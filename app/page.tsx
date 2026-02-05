'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Menu, X, Clock, Globe, Headphones, Zap, Wrench, Cpu, Settings, Car, Shield, CheckCircle, ArrowRight, Users, Award, Rocket } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  const heroImages = [
    '/hero_car_1_1770228359837.png',
    '/hero_car_2_1770228377467.png',
    '/hero_car_3_1770228395534.png',
    '/hero_car_4_1770228413578.png',
    '/hero_car_5_1770228427443.png'
  ]

  const brandLogos = [
    { brand: 'BMW', logo: '/brands/bmw-logo-2020-gray-download.png' },
    { brand: 'Mercedes-Benz', logo: '/brands/mercedes-logo-15875.png' },
    { brand: 'Toyota', logo: '/brands/toyota-logo-2020-europe-download.png' },
    { brand: 'Honda', logo: '/brands/honda-logo-2000-full-download.png' },
    { brand: 'Porsche', logo: '/brands/porsche-logo-2014-full-download.png' },
    { brand: 'Jaguar', logo: '/brands/jaguar-logo-2021-download.png' },
    { brand: 'Audi', logo: '/brands/audi-logo-2016-download.png' },
    { brand: 'Tesla', logo: '/brands/tesla-logo-2007-full-download.png' }
  ]

  // Hero carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  // Stats visibility observer - only trigger once
  const hasAnimatedRef = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setStatsVisible(true)
          hasAnimatedRef.current = true
          observer.disconnect() // Stop observing after first trigger
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    return () => observer.disconnect()
  }, [])

  // Animated counter component
  const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!statsVisible) return

      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [statsVisible, target])

    return <span>{count}{suffix}</span>
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

          {/* Mobile Menu */}
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

      {/* Hero Section with Carousel */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={img}
                alt={`Automotive service ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        </div>

        {/* Hero Content - Two Column Layout */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Text */}
              <div className="space-y-4 md:space-y-6 text-center md:text-left">
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 border border-primary/40 text-primary rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">
                  ⚡ 20+ Years of Excellence
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  OEM Diagnostic & <span className="text-primary stat-glow">Programming</span>
                </h1>
                <p className="text-base md:text-lg text-foreground/80">
                  Dealer-level diagnostics, coding & retrofits for premium vehicles worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
                    <Link href="/contact">Get Remote Support</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="font-semibold border-primary/50 hover:bg-primary/10">
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>

              {/* Right Side - Services Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { icon: Wrench, title: 'OEM Diagnostic', desc: 'BMW, Mercedes, Porsche & more' },
                  { icon: Cpu, title: 'ECU Coding', desc: 'Programming & feature activation' },
                  { icon: Settings, title: 'Retrofits', desc: 'CarPlay, audio & infotainment' },
                  { icon: Globe, title: '24/7 Remote', desc: 'Instant global support' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 md:p-5 bg-card/60 backdrop-blur-md rounded-xl border border-primary/20 hover:border-primary/50 transition-all group">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary text-sm md:text-base mb-0.5 md:mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-foreground/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide
                ? 'bg-primary w-8'
                : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section - Enhanced - Black Background */}
      <section ref={statsRef} className="py-20 bg-secondary text-secondary-foreground border-y border-primary/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Trusted Worldwide</h2>
            <p className="text-foreground/60">Powering automotive excellence across the globe</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: 7, suffix: '+', label: 'Years Experience' },
              { icon: Wrench, value: 3000, suffix: '+', label: 'Workshops Serviced' },
              { icon: Settings, value: 270, suffix: '+', label: 'Products & Services' },
              { icon: Zap, value: 3700, suffix: '+', label: 'Annual Transactions' }
            ].map((stat, index) => (
              <Card key={index} className="p-6 bg-white/5 border-primary/30 hover:border-primary/60 transition-all group hover:shadow-lg hover:shadow-primary/20">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 stat-glow">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-foreground/70 text-sm font-medium">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core <span className="text-primary">Services</span></h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive automotive diagnostic and programming solutions for professional workshops and dealerships worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: 'OEM Diagnostic',
                description: 'Dealer-level diagnostic tools and software for BMW, Mercedes, Porsche, JLR, and more. Professional technical support included.'
              },
              {
                icon: Cpu,
                title: 'Coding & Programming',
                description: 'Advanced ECU coding, immobilizer programming, and feature activation with remote support via TeamViewer.'
              },
              {
                icon: Settings,
                title: 'OEM Retrofits',
                description: 'Transform your vehicle with OEM-level upgrades: CarPlay wireless, audio systems, lighting, and infotainment options.'
              },
              {
                icon: Zap,
                title: 'ECU Performance',
                description: 'Professional ECU chip tuning solutions in partnership with DIMSport Asia. Optimize engine performance safely.'
              },
              {
                icon: Shield,
                title: 'Module Programming',
                description: 'Front-end, rear-end, VTS module programming and key programming with immobilizer unlock capabilities.'
              },
              {
                icon: Globe,
                title: 'Remote Support',
                description: '24/7 internet-based remote support for system installation, updates, troubleshooting, and technical guidance.'
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 bg-card border-primary/10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground border-y border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It <span className="text-primary">Works</span></h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Get professional remote support in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {[
              { step: '01', icon: Headphones, title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or email with your diagnostic needs' },
              { step: '02', icon: Globe, title: 'Remote Connect', desc: 'We connect to your system securely via TeamViewer or AnyDesk' },
              { step: '03', icon: Wrench, title: 'Diagnosis & Fix', desc: 'Our experts diagnose and resolve issues in real-time' },
              { step: '04', icon: CheckCircle, title: 'Complete', desc: 'Your vehicle is back on track with full documentation' }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center group">
                {/* Step Number Badge */}
                <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 md:right-auto md:left-1/2 md:-translate-x-1/2 md:-top-3 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute top-20 -right-4 w-8 h-8 text-primary/40" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Start Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-primary">TechLine?</span></h2>
                <p className="text-lg text-foreground/70">
                  Industry-leading expertise with unmatched dedication to your success
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Award, title: '7+ Years Experience', desc: 'Two decades of automotive diagnostic expertise' },
                  { icon: Users, title: '3000+ Happy Clients', desc: 'Trusted by workshops and dealerships worldwide' },
                  { icon: Globe, title: 'Global Coverage', desc: '24/7 remote support across all timezones' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-foreground/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Rocket, title: 'Fast Resolution', desc: 'Average response time under 15 minutes', color: 'bg-primary' },
                { icon: Shield, title: 'Secure & Safe', desc: '100% secure remote connections', color: 'bg-accent' },
                { icon: Zap, title: 'Latest Tools', desc: 'Always updated with newest software', color: 'bg-primary' },
                { icon: Headphones, title: 'Expert Team', desc: 'Certified automotive specialists', color: 'bg-accent' }
              ].map((item, idx) => (
                <Card key={idx} className={`p-6 ${idx === 0 || idx === 3 ? 'bg-primary/10' : 'bg-card'} border-primary/20 hover:border-primary/50 transition-all group`}>
                  <div className={`w-12 h-12 rounded-xl ${item.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-foreground/60 text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Remote Operations Section - Black Background */}
      <section className="py-20 bg-secondary text-secondary-foreground border-y border-primary/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center pulse-ring">
                    <span className="text-3xl font-bold text-primary-foreground">24/7</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Always <span className="text-primary">Available</span>
                  </h2>
                  <p className="text-foreground/60 text-lg">Remote Operations Worldwide</p>
                </div>
              </div>

              <p className="text-xl text-foreground/80 leading-relaxed">
                Our expert technicians are available around the clock to provide instant remote diagnostic support, programming assistance, and technical guidance - no matter your timezone.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, text: 'Global Coverage' },
                  { icon: Headphones, text: 'Instant Support' },
                  { icon: Clock, text: 'Zero Downtime' },
                  { icon: Zap, text: 'Fast Resolution' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-card/50 rounded-xl border border-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Connect Now</Link>
              </Button>
            </div>

            {/* Right - World Map Visual */}
            <div className="relative h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-card to-card/50 rounded-3xl border border-primary/20 overflow-hidden">
                {/* Globe Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Horizontal lines */}
                    {[...Array(8)].map((_, i) => (
                      <ellipse
                        key={`h-${i}`}
                        cx="200"
                        cy="150"
                        rx={180 - i * 20}
                        ry={120 - i * 13}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-primary"
                      />
                    ))}
                    {/* Vertical lines */}
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={40 + i * 30}
                        y1="30"
                        x2={40 + i * 30}
                        y2="270"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-primary"
                      />
                    ))}
                  </svg>
                </div>

                {/* Pulsing dots representing global coverage */}
                {[
                  { top: '25%', left: '20%' },
                  { top: '35%', left: '45%' },
                  { top: '35%', left: '70%' },
                  { top: '55%', left: '10%' },
                  { top: '40%', left: '75%' },
                  { top: '50%', left: '55%' },
                ].map((pos, idx) => (
                  <div
                    key={idx}
                    className="absolute w-3 h-3"
                    style={{ top: pos.top, left: pos.left }}
                  >
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </div>
                ))}

                {/* Center Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-primary mx-auto mb-4 opacity-20" />
                    <p className="text-2xl font-bold text-primary">Remote Diagnostics</p>
                    <p className="text-foreground/60">Anywhere, Anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Section - Horizontal Scrolling Marquee */}
      <section className="py-16 bg-secondary border-y border-primary/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-3xl font-bold text-center">Brands We <span className="text-primary">Support</span></h2>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="marquee-track flex items-center gap-16 py-8">
              {/* First set of logos */}
              {brandLogos.map((item, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-32 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
                >
                  <img src={item.logo} alt={item.brand} className="w-32 h-32 object-contain" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((item, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-32 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
                >
                  <img src={item.logo} alt={item.brand} className="w-32 h-32 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Need Professional Support?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 text-balance max-w-2xl mx-auto">
            Get in touch with our expert team for remote assistance, technical guidance, or product inquiries. Available 24/7 for your automotive needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6">
            <Link href="/contact">Contact Us Now</Link>
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
              <p className="text-foreground/60 text-sm">Professional automotive diagnostic and programming solutions for global workshops and dealerships.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/services" className="hover:text-primary transition-colors">Diagnostic Tools</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">ECU Tuning</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">OEM Retrofits</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/services" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">LinkedIn</a>
              </div>
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
