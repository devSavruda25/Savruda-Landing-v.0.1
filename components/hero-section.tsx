"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import hero from "@/public/hero.png"
import hero1 from "@/public/hero1.jpg"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Server,
  Brain,
  Rocket,
} from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Innovation Technology"
          width={500}
          height={600}
          className="w-full h-auto rounded-2xl shadow-2xl relative z-10 opacity-20 object-cover pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-secondary/20"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-20 left-10 h-8 w-8 text-primary/30 animate-float" />
        <Zap className="absolute top-40 right-20 h-6 w-6 text-secondary/30 animate-float-delayed" />
        <Shield className="absolute bottom-40 left-20 h-10 w-10 text-primary/20 animate-float" />
        <Cpu className="absolute top-60 left-1/4 h-7 w-7 text-blue-500/30 animate-float" />
        <Database className="absolute bottom-60 right-1/4 h-9 w-9 text-green-500/30 animate-float-delayed" />
        <Cloud className="absolute top-32 right-1/3 h-8 w-8 text-purple-500/30 animate-float" />
        <Smartphone className="absolute bottom-32 left-1/3 h-6 w-6 text-pink-500/30 animate-float-delayed" />
        <Globe className="absolute top-80 right-10 h-7 w-7 text-indigo-500/30 animate-float" />
        <Server className="absolute bottom-80 left-40 h-8 w-8 text-orange-500/30 animate-float-delayed" />
        <Brain className="absolute top-96 left-60 h-6 w-6 text-red-500/30 animate-float" />
        <Rocket className="absolute bottom-96 right-60 h-9 w-9 text-cyan-500/30 animate-float-delayed" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
                  Innovation
                </span>
                <span className="text-foreground block">Meets Technology</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Empowering businesses with cutting-edge IT solutions, cloud infrastructure, and AI-driven innovations
                that transform ideas into reality.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6 h-14 min-w-[200px]" asChild>
                <a href="#contact" className="flex items-center justify-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-14 min-w-[200px]" asChild>
                <a href="#services" className="flex items-center justify-center">
                  Explore Services
                </a>
              </Button>
            </div>

            {/* Key Features */}
            <div className="pt-8 border-t border-border/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Secure Solutions</p>
                    <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Fast Delivery</p>
                    <p className="text-sm text-muted-foreground">Rapid deployment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Expert Team</p>
                    <p className="text-sm text-muted-foreground">Skilled professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-lg">
              {/* Background Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl transform rotate-6 scale-110"></div>

              {/* Main Hero Image Container */}
              <div className="relative bg-background/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20">
                <Image
                  src="https://res.cloudinary.com/dttagqqne/image/upload/v1750234376/hero1_osvchm.jpg"
                  alt="Innovation Technology"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                />

              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -left-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Cloud className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Cloud Ready</p>
                    <p className="text-xs text-muted-foreground">99.9% Uptime</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <Brain className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">AI Powered</p>
                    <p className="text-xs text-muted-foreground">Smart Automation</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 bg-background/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border animate-float transform -translate-y-1/2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Database className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Scalable</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/3 -right-8 bg-background/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <Rocket className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Fast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
