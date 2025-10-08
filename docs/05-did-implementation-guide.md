# DPP Data Adapter - Developer Handoff Document
## Building the Universal Data Ingestion System

**Version:** 1.0  
**Date:** October 2025  
**Status:** Ready for Development  
**Estimated Effort:** 40-60 hours (Phase 1)

---

## 🎯 WHAT WE'RE BUILDING

A **data adapter system** that:
1. Ingests product data from ANY source (Excel, ERP, APIs, manual entry)
2. Automatically generates DIDs (Decentralized Identifiers) for organization
3. Exposes data via DUAL interfaces (traditional API + DID resolution)
4. Enables future interoperability without vendor lock-in

**Key Insight:** DIDs are internal plumbing. Clients don't need to understand them. We use them to organize data and enable portability.

---

## 📐 ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────────┐
│                     DATA SOURCES (Client's World)                │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────────┐ │
│  │  Excel   │  │   ERP    │  │   API    │  │  Manual Entry  │ │
│  │  Upload  │  │  (SAP)   │  │  (REST)  │  │    (Forms)     │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────────┬───────┘ │
└───────┼─────────────┼─────────────┼──────────────────┼─────────┘
        │             │             │                  │
        ▼             ▼             ▼                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ADAPTER LAYER (Your System)                   │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  1. DATA INGESTION                                         │ │
│  │     • Normalize different formats                          │ │
│  │     • Validate required fields                             │ │
│  │     • Extract metadata                                     │ │
│  └────────────────┬───────────────────────────────────────────┘ │
│                   ▼                                              │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  2. DID GENERATION (Internal)                              │ │
│  │     • Generate: did:web:domain:products:id                 │ │
│  │     • Create DID document (W3C format)                     │ │
│  │     • Link to product data                                 │ │
│  └────────────────┬───────────────────────────────────────────┘ │
│                   ▼                                              │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  3. UNIFIED STORAGE                                        │ │
│  │     • Database: Product data + metadata                    │ │
│  │     • File System: DID documents (did.json files)          │ │
│  │     • Cache: Fast resolution                               │ │
│  └────────────────┬───────────────────────────────────────────┘ │
└───────────────────┼─────────────────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                    OUTPUT INTERFACES                             │
│                                                                  │
│  ┌─────────────────────┐         ┌──────────────────────────┐  │
│  │  Traditional API    │         │  DID Resolution          │  │
│  │  GET /api/products  │         │  did:web:domain:id       │  │
│  │  → JSON response    │         │  → DID Document          │  │
│  └─────────────────────┘         └──────────────────────────┘  │
│           │                                    │                 │
│           └────────────┬───────────────────────┘                 │
│                        ▼                                         │
│              SAME UNDERLYING DATA                                │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🗂️ PROJECT STRUCTURE

```
/chocolate-dpp
├── /app                          # Next.js 14 app directory
│   ├── /api
│   │   ├── /products
│   │   │   ├── /[id]
│   │   │   │   └── route.ts      # GET /api/products/:id
│   │   │   └── /import
│   │   │       └── route.ts      # POST /api/products/import
│   │   └── /adapters
│   │       └── /[source]
│   │           └── route.ts      # Data source configs
│   ├── /consumer
│   │   └── page.tsx              # Existing consumer view
│   └── /admin
│       └── /import
│           └── page.tsx          # NEW: Data import UI
│
├── /lib
│   ├── /adapters                 # THE CORE OF YOUR SYSTEM
│   │   ├── base-adapter.ts       # Abstract base class
│   │   ├── excel-adapter.ts      # Excel/CSV ingestion
│   │   ├── erp-adapter.ts        # ERP system connector
│   │   ├── api-adapter.ts        # REST API ingestion
│   │   └── manual-adapter.ts     # Form entry
│   │
│   ├── /did
│   │   ├── generator.ts          # DID generation logic
│   │   ├── document-builder.ts   # Create DID documents
│   │   ├── resolver.ts           # Resolve DIDs
│   │   └── publisher.ts          # Write did.json files
│   │
│   ├── /db
│   │   ├── schema.prisma         # Database schema
│   │   └── client.ts             # Prisma client
│   │
│   └── /utils
│       ├── validators.ts         # Data validation
│       └── normalizers.ts        # Format normalization
│
├── /public
│   └── /products                 # DID documents published here
│       └── /[id]
│           └── did.json          # Auto-generated
│
├── /data                         # Sample data for testing
│   ├── chocolate-products.json
│   ├── batteries.csv
│   └── sample-batch.xlsx
│
└── /docs
    ├── architecture.md
    ├── api-reference.md
    └── did-specification.md
```

---

## 🗄️ DATABASE SCHEMA

```prisma
// prisma/schema.prisma

model Product {
  id            String   @id @default(cuid())
  
  // Traditional identifiers
  internalId    String   @unique // What client gave us
  sku           String?
  
  // DID identifiers (generated)
  did           String   @unique
  didDocument   Json     // Full W3C DID document
  
  // Product data (flexible JSON)
  data          Json
  
  // Metadata
  type          String   // 'chocolate', 'battery', 'textile', etc.
  dataSource    String   // 'excel', 'erp', 'manual', 'api'
  sourceConfig  Json?    // Configuration used for import
  
  // Timestamps
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  // Relations
  manufacturer  Manufacturer? @relation(fields: [manufacturerId], references: [id])
  manufacturerId String?
  
  journey       Journey?
  
  @@index([internalId])
  @@index([did])
  @@index([type])
}

model Manufacturer {
  id        String    @id @default(cuid())
  name      String
  did       String?   @unique
  domain    String?
  products  Product[]
  createdAt DateTime  @default(now())
}

model Journey {
  id          String   @id @default(cuid())
  productId   String   @unique
  product     Product  @relation(fields: [productId], references: [id])
  
  // Journey data
  timeline    Json     // Array of journey events
  stakeholders Json    // All stakeholder data
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model ImportLog {
  id          String   @id @default(cuid())
  source      String   // 'excel', 'erp', etc.
  status      String   // 'success', 'partial', 'failed'
  recordCount Int
  errorLog    Json?
  createdAt   DateTime @default(now())
}
```

---

## 🔧 CORE ADAPTER IMPLEMENTATION

### File: `/lib/adapters/base-adapter.ts`

```typescript
import { PrismaClient } from '@prisma/client'
import { DIDGenerator } from '../did/generator'
import { DIDDocumentBuilder } from '../did/document-builder'
import { DIDPublisher } from '../did/publisher'

const prisma = new PrismaClient()

export interface DataSource {
  type: 'excel' | 'erp' | 'manual' | 'api'
  config?: Record<string, any>
}

export interface NormalizedProduct {
  internalId: string
  type: string
  data: Record<string, any>
  manufacturer?: {
    name: string
    domain?: string
  }
}

export interface ImportResult {
  success: boolean
  did?: string
  internalId?: string
  errors?: string[]
}

export abstract class BaseAdapter {
  protected didGenerator: DIDGenerator
  protected documentBuilder: DIDDocumentBuilder
  protected publisher: DIDPublisher

  constructor() {
    this.didGenerator = new DIDGenerator()
    this.documentBuilder = new DIDDocumentBuilder()
    this.publisher = new DIDPublisher()
  }

  /**
   * Main ingestion pipeline
   */
  async ingest(
    source: DataSource,
    rawData: any
  ): Promise<ImportResult> {
    try {
      // 1. Normalize data
      const normalized = await this.normalize(rawData, source)

      // 2. Validate
      const validation = this.validate(normalized)
      if (!validation.valid) {
        return {
          success: false,
          errors: validation.errors
        }
      }

      // 3. Generate DID
      const did = this.didGenerator.generate(normalized.internalId)

      // 4. Create DID document
      const didDocument = this.documentBuilder.build(did, normalized)

      // 5. Store in database
      const product = await prisma.product.create({
        data: {
          internalId: normalized.internalId,
          did: did,
          didDocument: didDocument,
          data: normalized.data,
          type: normalized.type,
          dataSource: source.type,
          sourceConfig: source.config || {},
          manufacturer: normalized.manufacturer
            ? {
                connectOrCreate: {
                  where: { name: normalized.manufacturer.name },
                  create: {
                    name: normalized.manufacturer.name,
                    domain: normalized.manufacturer.domain
                  }
                }
              }
            : undefined
        }
      })

      // 6. Publish DID document (create did.json file)
      await this.publisher.publish(did, didDocument)

      return {
        success: true,
        did: did,
        internalId: normalized.internalId
      }

    } catch (error) {
      console.error('Ingestion error:', error)
      return {
        success: false,
        errors: [error.message]
      }
    }
  }

  /**
   * Batch import
   */
  async ingestBatch(
    source: DataSource,
    rawDataArray: any[]
  ): Promise<ImportResult[]> {
    const results: ImportResult[] = []

    for (const rawData of rawDataArray) {
      const result = await this.ingest(source, rawData)
      results.push(result)
    }

    return results
  }

  /**
   * Abstract methods - each adapter implements these
   */
  protected abstract normalize(
    rawData: any,
    source: DataSource
  ): Promise<NormalizedProduct>

  /**
   * Validate normalized data
   */
  protected validate(data: NormalizedProduct): {
    valid: boolean
    errors?: string[]
  } {
    const errors: string[] = []

    if (!data.internalId) {
      errors.push('Missing required field: internalId')
    }

    if (!data.type) {
      errors.push('Missing required field: type')
    }

    if (!data.data || Object.keys(data.data).length === 0) {
      errors.push('Product data is empty')
    }

    return {
      valid: errors.length === 0,
      errors: errors.length > 0 ? errors : undefined
    }
  }
}
```

---

### File: `/lib/adapters/excel-adapter.ts`

```typescript
import { BaseAdapter, DataSource, NormalizedProduct } from './base-adapter'
import * as XLSX from 'xlsx'

export class ExcelAdapter extends BaseAdapter {
  
  /**
   * Parse Excel file and extract rows
   */
  async parseFile(file: File | Buffer): Promise<any[]> {
    const workbook = XLSX.read(file, {
      cellDates: true,
      cellFormulas: false
    })

    const firstSheet = workbook.Sheets[workbook.SheetNames[0]]
    const data = XLSX.utils.sheet_to_json(firstSheet)

    return data
  }

  /**
   * Normalize Excel row to standard product format
   */
  protected async normalize(
    rawData: any,
    source: DataSource
  ): Promise<NormalizedProduct> {
    
    // Map Excel columns to standard fields
    // Supports flexible column naming
    const getId = (row: any) => {
      return row['Product ID'] 
        || row['ID'] 
        || row['SKU']
        || row['Batch ID']
        || row['Serial Number']
    }

    const getType = (row: any) => {
      return row['Type']?.toLowerCase() 
        || row['Product Type']?.toLowerCase()
        || 'unknown'
    }

    const internalId = getId(rawData)
    const type = getType(rawData)

    // Extract all other fields as product data
    const data = { ...rawData }
    delete data['Product ID']
    delete data['ID']
    delete data['Type']

    // Extract manufacturer if present
    const manufacturer = rawData['Manufacturer'] || rawData['Brand']
      ? {
          name: rawData['Manufacturer'] || rawData['Brand'],
          domain: rawData['Manufacturer Domain'] || undefined
        }
      : undefined

    return {
      internalId,
      type,
      data,
      manufacturer
    }
  }

  /**
   * Import entire Excel file
   */
  async importFile(
    file: File | Buffer,
    source: DataSource
  ): Promise<any> {
    const rows = await this.parseFile(file)
    return this.ingestBatch(source, rows)
  }
}
```

---

### File: `/lib/did/generator.ts`

```typescript
export class DIDGenerator {
  private domain: string

  constructor(domain?: string) {
    this.domain = domain || process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000'
  }

  /**
   * Generate DID from product ID
   * Format: did:web:domain:products:clean-id
   */
  generate(productId: string): string {
    const cleanId = this.cleanId(productId)
    return `did:web:${this.domain}:products:${cleanId}`
  }

  /**
   * Clean product ID for DID usage
   * - Lowercase
   * - Replace spaces/special chars with hyphens
   * - Remove consecutive hyphens
   */
  private cleanId(id: string): string {
    return id
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }

  /**
   * Extract product ID from DID
   */
  extractId(did: string): string | null {
    const match = did.match(/did:web:[^:]+:products:(.+)/)
    return match ? match[1] : null
  }

  /**
   * Validate DID format
   */
  validate(did: string): boolean {
    return /^did:web:[^:]+:products:[a-z0-9-]+$/.test(did)
  }
}
```

---

### File: `/lib/did/document-builder.ts`

```typescript
import { NormalizedProduct } from '../adapters/base-adapter'

export interface DIDDocument {
  '@context': string[]
  id: string
  controller?: string
  verificationMethod?: any[]
  authentication?: any[]
  service?: any[]
}

export class DIDDocumentBuilder {
  private domain: string

  constructor(domain?: string) {
    this.domain = domain || process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000'
  }

  /**
   * Build W3C-compliant DID document
   */
  build(did: string, product: NormalizedProduct): DIDDocument {
    const document: DIDDocument = {
      '@context': [
        'https://www.w3.org/ns/did/v1',
        'https://w3id.org/security/suites/jws-2020/v1'
      ],
      id: did
    }

    // Set controller (manufacturer if available)
    if (product.manufacturer?.domain) {
      document.controller = `did:web:${product.manufacturer.domain}`
    } else {
      document.controller = did
    }

    // Add verification method (placeholder for now)
    document.verificationMethod = [
      {
        id: `${did}#key-1`,
        type: 'JsonWebKey2020',
        controller: did,
        publicKeyJwk: {
          // This would be actual manufacturer's public key
          // For MVP, we use a placeholder
          kty: 'EC',
          crv: 'P-256',
          x: 'placeholder',
          y: 'placeholder'
        }
      }
    ]

    // Add service endpoints
    document.service = [
      {
        id: `${did}#dpp`,
        type: 'DigitalProductPassport',
        serviceEndpoint: `https://${this.domain}/api/products/${product.internalId}`
      },
      {
        id: `${did}#metadata`,
        type: 'ProductMetadata',
        serviceEndpoint: `https://${this.domain}/api/products/${product.internalId}/metadata`
      }
    ]

    return document
  }

  /**
   * Update DID document with new data
   */
  update(existingDoc: DIDDocument, updates: Partial<DIDDocument>): DIDDocument {
    return {
      ...existingDoc,
      ...updates
    }
  }
}
```

---

### File: `/lib/did/publisher.ts`

```typescript
import fs from 'fs/promises'
import path from 'path'
import { DIDDocument } from './document-builder'

export class DIDPublisher {
  private publicDir: string

  constructor() {
    this.publicDir = path.join(process.cwd(), 'public')
  }

  /**
   * Publish DID document to public directory
   * Creates: /public/products/[id]/did.json
   */
  async publish(did: string, document: DIDDocument): Promise<void> {
    try {
      // Extract path from DID
      // did:web:domain:products:choc-001 -> products/choc-001
      const pathSegments = did.split(':').slice(2) // Skip 'did' and 'web'
      pathSegments.shift() // Remove domain
      
      const filePath = path.join(
        this.publicDir,
        ...pathSegments,
        'did.json'
      )

      // Create directory if doesn't exist
      const dir = path.dirname(filePath)
      await fs.mkdir(dir, { recursive: true })

      // Write DID document
      await fs.writeFile(
        filePath,
        JSON.stringify(document, null, 2),
        'utf-8'
      )

      console.log(`Published DID document: ${filePath}`)
    } catch (error) {
      console.error('Failed to publish DID document:', error)
      throw error
    }
  }

  /**
   * Unpublish DID document
   */
  async unpublish(did: string): Promise<void> {
    const pathSegments = did.split(':').slice(2)
    pathSegments.shift()
    
    const filePath = path.join(
      this.publicDir,
      ...pathSegments,
      'did.json'
    )

    try {
      await fs.unlink(filePath)
    } catch (error) {
      // File doesn't exist, ignore
    }
  }
}
```

---

### File: `/lib/did/resolver.ts`

```typescript
import { PrismaClient } from '@prisma/client'
import { DIDDocument } from './document-builder'

const prisma = new PrismaClient()

export class DIDResolver {
  
  /**
   * Resolve DID to DID document
   * First checks database, then falls back to HTTP
   */
  async resolve(did: string): Promise<DIDDocument | null> {
    // 1. Try database lookup (fast path)
    const product = await prisma.product.findUnique({
      where: { did }
    })

    if (product) {
      return product.didDocument as DIDDocument
    }

    // 2. Try HTTP resolution (for external DIDs)
    return this.resolveViaHTTP(did)
  }

  /**
   * Resolve DID via HTTP (standard did:web resolution)
   */
  private async resolveViaHTTP(did: string): Promise<DIDDocument | null> {
    try {
      // Convert DID to URL
      // did:web:example.com:products:123 
      // -> https://example.com/products/123/did.json
      
      const url = this.didToURL(did)
      const response = await fetch(url)

      if (!response.ok) {
        return null
      }

      return await response.json()
    } catch (error) {
      console.error('DID resolution failed:', error)
      return null
    }
  }

  /**
   * Convert DID to HTTPS URL
   */
  private didToURL(did: string): string {
    // Remove 'did:web:' prefix
    const path = did
      .replace('did:web:', '')
      .replace(/:/g, '/')
    
    return `https://${path}/did.json`
  }

  /**
   * Resolve multiple DIDs
   */
  async resolveBatch(dids: string[]): Promise<Map<string, DIDDocument | null>> {
    const results = new Map<string, DIDDocument | null>()

    await Promise.all(
      dids.map(async (did) => {
        const doc = await this.resolve(did)
        results.set(did, doc)
      })
    )

    return results
  }
}
```

---

## 🌐 API ROUTES

### File: `/app/api/products/import/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { ExcelAdapter } from '@/lib/adapters/excel-adapter'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const sourceType = formData.get('sourceType') as string || 'excel'

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Use appropriate adapter
    const adapter = new ExcelAdapter()
    const results = await adapter.importFile(buffer, {
      type: 'excel'
    })

    // Count successes and failures
    const successful = results.filter(r => r.success).length
    const failed = results.filter(r => !r.success).length

    return NextResponse.json({
      success: true,
      imported: successful,
      failed: failed,
      results: results
    })

  } catch (error) {
    console.error('Import error:', error)
    return NextResponse.json(
      { error: 'Import failed', details: error.message },
      { status: 500 }
    )
  }
}
```

---

### File: `/app/api/products/[id]/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = params.id

  try {
    // Look up by internal ID or DID
    const product = await prisma.product.findFirst({
      where: {
        OR: [
          { internalId: productId },
          { did: productId },
          { did: `did:web:${process.env.NEXT_PUBLIC_DOMAIN}:products:${productId}` }
        ]
      },
      include: {
        manufacturer: true,
        journey: true
      }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Return in traditional API format
    return NextResponse.json({
      id: product.internalId,
      did: product.did,
      type: product.type,
      manufacturer: product.manufacturer,
      data: product.data,
      journey: product.journey?.timeline || null,
      metadata: {
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        dataSource: product.dataSource
      }
    })

  } catch (error) {
    console.error('Product fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}
```

---

## 🎨 ADMIN UI FOR IMPORT

### File: `/app/admin/import/page.tsx`

```typescript
'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'

export default function ImportPage() {
  const [file, setFile] = useState<File | null>(null)
  const [importing, setImporting] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleImport = async () => {
    if (!file) return

    setImporting(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('sourceType', 'excel')

    try {
      const response = await fetch('/api/products/import', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error('Import failed:', error)
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Import Product Data</h1>

      <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
        <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="hidden"
          id="file-upload"
        />
        
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-blue-600 hover:text-blue-700"
        >
          Click to upload Excel/CSV file
        </label>
        
        {file && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Selected: {file.name}</p>
            <button
              onClick={handleImport}
              disabled={importing}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              {importing ? 'Importing...' : 'Import Products'}
            </button>
          </div>
        )}
      </div>

      {results && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Import Complete</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Successful</p>
              <p className="text-3xl font-bold text-green-600">
                {results.imported}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Failed</p>
              <p className="text-3xl font-bold text-red-600">
                {results.failed}
              </p>
            </div>
          </div>
          
          {results.results && (
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600">
                View Details
              </summary>
              <pre className="mt-2 p-4 bg-white rounded text-xs overflow-auto">
                {JSON.stringify(results.results, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}
    </div>
  )
}
```

---

## 📋 SAMPLE DATA FILES

### Sample Excel Structure

```
Product ID | Name                        | Type      | Manufacturer        | Origin   | Organic | Quantity
choc-001   | Dark Chocolate 70%          | chocolate | Chocolate Dreams    | Ecuador  | Yes     | 500kg
choc-002   | Milk Chocolate 45%          | chocolate | Chocolate Dreams    | Belgium  | Yes     | 750kg
choc-003   | White Chocolate Premium     | chocolate | Sweet Factory       | France   | No      | 300kg
```

### Sample JSON Data

```json
[
  {
    "internalId": "choc-12847-001",
    "type": "chocolate",
    "name": "Organic Dark Chocolate 70%",
    "manufacturer": {
      "name": "Chocolate Dreams Factory",
      "domain": "chocolatedreams.be"
    },
    "data": {
      "sustainabilityScore": 8.5,
      "badges": ["organic", "recyclable", "carbon-neutral"],
      "ingredients": [
        { "name": "Cocoa", "percentage": 70, "origin": "Ecuador" },
        { "name": "Sugar", "percentage": 25, "origin": "France" },
        { "name": "Milk", "percentage": 5, "origin": "Belgium" }
      ],
      "productionDate": "2024-10-15",
      "batchNumber": "12847"
    }
  }
]
```

---

## ✅ IMPLEMENTATION PHASES

### Phase 1: Core Adapter (Week 1 - 20 hours)

**Priority: HIGH - This is your MVP**

- [ ] Set up Prisma with database schema
- [ ] Implement `BaseAdapter` class
- [ ] Implement `DIDGenerator`
- [ ] Implement `DIDDocumentBuilder`
- [ ] Implement `DIDPublisher`
- [ ] Create `/api/products/[id]` endpoint
- [ ] Test with manual JSON data

**Acceptance:** Can import JSON, DID generated, did.json created, accessible via API

---

### Phase 2: Excel Import (Week 2 - 15 hours)

**Priority: HIGH - Sales demo needs this**

- [ ] Implement `ExcelAdapter`
- [ ] Create `/api/products/import` endpoint
- [ ] Build admin import UI
- [ ] Test with chocolate-products.xlsx
- [ ] Handle errors gracefully

**Acceptance:** Can upload Excel, all rows imported, DIDs generated, results shown

---

### Phase 3: DID Resolution (Week 3 - 10 hours)

**Priority: MEDIUM - Shows web3 capability**

- [ ] Implement `DIDResolver`
- [ ] Add DID resolution to product API
- [ ] Show DID in consumer view
- [ ] Add "View DID Document" feature
- [ ] Test resolution of external DIDs

**Acceptance:** Can resolve DIDs from database and HTTP, DID shown in UI

---

### Phase 4: Additional Adapters (Week 4 - 15 hours)

**Priority: MEDIUM - Shows flexibility**

- [ ] Implement `ManualAdapter` (form entry)
- [ ] Implement `APIAdapter` (REST endpoint ingestion)
- [ ] Create adapter selection UI
- [ ] Add adapter documentation

**Acceptance:** Multiple import methods work, adapter selection UI, documentation

---

## 🚀 START HERE

**Day 1 Tasks:**
1. Set up Prisma with schema
2. Implement DIDGenerator
3. Test DID generation with hardcoded data
4. Implement BaseAdapter skeleton

**First Win:** Generate first DID from JSON data in <2 hours.

Good luck! 🎯

