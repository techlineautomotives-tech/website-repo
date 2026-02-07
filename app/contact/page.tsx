'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Menu, X, ChevronRight, Phone, Mail, Clock, Car, Globe, Headphones } from 'lucide-react'
import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl text-primary flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              TechLine Automotives
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-sm hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
              <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Support</Link>
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pb-4 space-y-4 border-t border-primary/20 pt-4">
              <Link href="/services" className="block text-sm hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="block text-sm hover:text-primary transition-colors">Contact</Link>
              <Button asChild variant="default" className="w-full bg-primary text-primary-foreground">
                <Link href="/contact">Get Support</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:text-primary/80">Home</Link>
            <ChevronRight size={16} className="text-foreground/50" />
            <span className="text-foreground/70">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-secondary border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 text-primary rounded-full text-sm font-semibold mb-6">
            🌍 24/7 Global Support
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Have questions about our services? Need technical support? Our expert team is here to help. Reach out today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Phone Support</h3>
              <p className="text-foreground/70 mb-4">Call us for immediate assistance</p>
              <a href="https://wa.me/+13073106871" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                +1 (307) 310-6871
              </a>
            </Card>

            <Card className="p-8 text-center bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Email Support</h3>
              <p className="text-foreground/70 mb-4">Send us your inquiries anytime</p>
              <a href="mailto:Techlineautomotives@gmail.com" className="text-primary font-semibold hover:text-primary/80 transition-colors text-sm">
                Techlineautomotives@gmail.com
              </a>
            </Card>

            <Card className="p-8 text-center bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Globe size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Remote Support</h3>
              <p className="text-foreground/70 mb-4">TeamViewer & AnyDesk support</p>
              <span className="text-primary font-semibold">Available 24/7</span>
            </Card>
          </div>

          <Card className="p-8 bg-card border-2 border-primary/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Business Hours</h3>
                <p className="text-foreground/70">Monday - Saturday</p>
                <p className="text-foreground/70">09:00 AM - 05:00 PM</p>
                <p className="text-primary font-semibold mt-3 flex items-center gap-2">
                  <Headphones size={16} /> 24/7 Remote Support Available
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked <span className="text-primary">Questions</span></h2>

          <div className="space-y-6">
            {[
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, bank transfers, and PayPal. Contact us for custom payment arrangements.'
              },
              {
                q: 'Do you provide technical support after purchase?',
                a: 'Yes, we offer 24/7 remote support via TeamViewer for all our products and services. Technical assistance is included with your purchase.'
              },
              {
                q: 'How long does remote support typically take?',
                a: 'Most issues are resolved within 30-60 minutes. Complex diagnostics may take longer depending on the vehicle system involved.'
              },
              {
                q: 'Can you support vehicles outside of Europe?',
                a: 'Yes! We support vehicles worldwide. We have expertise with North American, Asian, and European automotive brands.'
              },
              {
                q: 'What is your typical response time?',
                a: 'We aim to respond to all inquiries within 2 hours during business hours, and typically the same day on weekends.'
              },
              {
                q: 'Do you offer training for new technicians?',
                a: 'Absolutely. We provide comprehensive training on all diagnostic tools and coding procedures. Contact us for training packages.'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <h3 className="text-lg font-bold text-primary mb-3">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Call our support team or use our live chat for instant help with your automotive diagnostic needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <a href="tel:+13073106871">Call Now</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg text-primary">TechLine Automotives</h3>
              </div>
              <p className="text-foreground/60 text-sm">Professional automotive diagnostic and programming solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/services" className="hover:text-primary transition-colors">Diagnostic Tools</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Coding Services</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">OEM Retrofits</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8">
            <p className="text-center text-foreground/50 text-sm">
              © 2025 TechLine Automotives. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
