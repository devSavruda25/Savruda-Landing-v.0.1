"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import VenturesSection from "@/components/ventures-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"
import LoadingScreen from "@/components/loading-screen"
import StatsSection from "@/components/stats-section"
import LeaderSection from "@/components/leader-section"
import AIAssistant from "@/components/ai-assistant"
// import ThankYouPage from "@/components/thank-you/page"

export default function LandingPage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <LeaderSection />
        <TeamSection />
        <VenturesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        {/* <ThankYouPage /> */}
      </main>
      <FooterSection />
      <AIAssistant />
    </div>
  )
}
