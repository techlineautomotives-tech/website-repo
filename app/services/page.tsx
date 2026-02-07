'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Menu, X, ChevronRight, Car } from 'lucide-react'
import { useState } from 'react'

export default function ServicesPage() {
  const [isOpen, setIsOpen] = useState(false)

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
            <span className="text-foreground/70">Services & Products</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-secondary border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 text-primary rounded-full text-sm font-semibold mb-6">
            ⚡ Professional Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional Diagnostic <span className="text-primary">Solutions</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Comprehensive range of OEM diagnostic tools, software, and support services for automotive professionals worldwide.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Service <span className="text-primary">Categories</span></h2>

          <div className="space-y-12">
            {/* BMW Services */}
            <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl"><img src="/brands/bmw-logo-2020-gray-download.png" className='w-20 h-20' /></div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">BMW Solutions</h3>
                  <p className="text-foreground/70">Complete BMW diagnostic and coding ecosystem</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> ISPI & ISTA Online</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> ISTA+ BMW System</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Esys & EsysPlus Online</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> NCD 2.0 Secure</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> SMG Retrofit</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> FSC Code Generation</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> CarPlay Wireless</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Map Updates</li>
              </ul>
            </Card>

            {/* Mercedes Services */}
            <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl"><img src="/brands/mercedes-logo-15875.png" className='w-20 h-20' alt="" /></div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Mercedes-Benz Solutions</h3>
                  <p className="text-foreground/70">Advanced diagnostics and coding for all Mercedes platforms</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Xentry Diagnosis</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> DTS Monaco 9.0.2</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> SCN Online</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Map PIN Code</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> NTG5.x to NTG6 Upgrade</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> AMG Menu Activation</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Air Suspension Control</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Anti-theft PIN</li>
              </ul>
            </Card>

            {/* Tesla Services */}
            <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">  <img src="/brands/tesla-logo-2007-full-download.png" className='w-20 h-20' alt="" /></div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Tesla Solutions</h3>
                  <p className="text-foreground/70">Advanced Tesla diagnostics, configuration, and software services</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Tesla Toolbox 3</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Vehicle Configuration & Coding</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Firmware Installation & Updates</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> HV Battery Diagnostics</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Drive Unit Diagnostics</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Autopilot & ADAS Calibration</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Gateway & Security Access</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Retrofit & Module Replacement Support</li>
              </ul>
            </Card>

            {/* Land Rover Services */}
            <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl"><img src="/brands/land-rover.png" className='w-20 h-20' alt="" /></div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Land Rover Solutions</h3>
                  <p className="text-foreground/70">Complete JLR diagnostics, programming, and security solutions</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Pathfinder Diagnostics</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> SDD & Topix Cloud</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> ECU Programming & CCF Coding</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Security Access & Key Programming</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Air Suspension Calibration</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Gearbox & Transfer Case Reset</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> ADAS Calibration</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Infotainment & Map Updates</li>
              </ul>
            </Card>

            {/* Toyota Services */}
            <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl"><img src="/brands/toyota-logo-2020-europe-download.png" className='w-20 h-20' alt="" /></div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Toyota Solutions</h3>
                  <p className="text-foreground/70">Professional Toyota & Lexus diagnostics, programming, and security services</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Toyota TIS 2024</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Techstream Diagnostics</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> ECU Programming & Flashing</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Smart Key & Immobilizer Reset</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Seed–Passcode (All Keys Lost)</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> TPMS Initialization</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> ADAS Calibration Support</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Navigation & Multimedia Updates</li>
              </ul>
            </Card>

            {/* Porsche Services */}
            <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl"><img src="/brands/porsche-logo-2014-full-download.png" className='w-20 h-20' alt="" /></div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Porsche Solutions</h3>
                  <p className="text-foreground/70">Premium Porsche diagnostics and programming</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> PIWIS Tester 2024</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> PPN Remote</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> PCM6 Programming</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Sport Chrono Enable</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> CarPlay Wireless</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Feature Activation</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Performance Tuning</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Retrofit Integration</li>
              </ul>
            </Card>

            {/* JLR Services */}
            <Card className="p-8 bg-card border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl"><img src="/brands/jaguar-logo-2021-download.png" className='w-20 h-20' alt="" /></div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Jaguar Solutions</h3>
                  <p className="text-foreground/70">Engineering-level support for JLR vehicles</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> JET Master Token</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> TOPIx Remote</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> CCF Tools Editor</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> DOIP Pathfinder</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Key Programming</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Module Coding</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> VBF AsBuilt File</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Engineering Master</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-secondary border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Additional <span className="text-primary">Services</span></h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'CarPlay & Android Auto',
                description: 'Wireless and wired CarPlay/Android Auto activation for modern infotainment systems.',
                icon: '📱'
              },
              {
                title: 'ECU Performance',
                description: 'Professional chip tuning with DIMSport partnership. Safe performance optimization.',
                icon: '⚙️'
              },
              {
                title: 'Spare Parts',
                description: 'OEM retrofit parts, wiring harness, and technical manuals with coding support.',
                icon: '📦'
              },
              {
                title: 'Software Updates',
                description: 'Navigation updates, platform updates, and regional system conversions.',
                icon: '💾'
              },
              {
                title: 'Training & Support',
                description: '24/7 remote support via TeamViewer. Technical training and troubleshooting.',
                icon: '👨‍🏫'
              },
              {
                title: 'Diagnostic Testing',
                description: 'Complete vehicle diagnostics, module testing, and system health checks.',
                icon: '🔍'
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact our team for product information, pricing, or to schedule a demo of our diagnostic solutions.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
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
                <li><Link href="/services" className="hover:text-primary transition-colors">BMW Solutions</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Mercedes Solutions</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Porsche Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
             
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8">
            <p className="text-center text-foreground/50 text-sm">
              © 2025 TechLine Automotives. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
