"use client"
import {  Linkedin, Twitter, Mail } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">SAVRUDA INNOVATION</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with cutting-edge IT solutions, cloud infrastructure, and AI-driven innovations that
              transform ideas into reality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://in.linkedin.com/company/savruda-in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a
                href="developer.savruda@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              {/* Optional Github icon */}
              {/* 
              <a
                href="https://github.com/savruda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a> 
              */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
               <li>
                <a href="https://ess.emgage.work/login" className="text-muted-foreground hover:text-primary transition-colors">
                  MY GROWTH
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 SAVRUDA INNOVATION. All rights reserved. Built with passion and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  )
}
