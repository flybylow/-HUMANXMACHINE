'use client';

import { Mail, Linkedin, Calendar } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Whether you&apos;re exploring DPP requirements or ready to implement, 
              let&apos;s discuss how Human×Machine can help your organization.
            </p>

            {/* Contact Options */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-200">Email</h4>
                  <a 
                    href="mailto:ward@humanmachine.be" 
                    className="text-green-400 hover:text-green-300 text-lg font-medium transition-colors"
                  >
                    ward@humanmachine.be
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-200">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/warddem" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-lg font-medium transition-colors"
                  >
                    Connect with Ward
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-200">Book a Call</h4>
                  <a 
                    href="mailto:ward@humanmachine.be?subject=Schedule%2030-minute%20consultation" 
                    className="text-green-400 hover:text-green-300 text-lg font-medium transition-colors"
                  >
                    Schedule 30-minute consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                  I&apos;m interested in...
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:border-green-500 focus:outline-none transition-colors"
                >
                  <option value="">Select one</option>
                  <option value="implementation">DPP Implementation</option>
                  <option value="consulting">CIRPASS-2 Consulting</option>
                  <option value="design-system">Design Systems</option>
                  <option value="workshop">Workshop/Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

