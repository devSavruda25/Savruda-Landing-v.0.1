"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Server, Cloud, Brain, Settings, Code } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with the latest technologies.",
  },
  // {
  //   icon: Server,
  //   title: "DevOps Solutions",
  //   description: "Streamlined development workflows, CI/CD pipelines, and infrastructure automation.",
  // },
  // {
  //   icon: Cloud,
  //   title: "Cloud Solutions",
  //   description: "Scalable cloud infrastructure, migration services, and cloud-native application development.",
  // },
  // {
  //   icon: Brain,
  //   title: "AI Integration",
  //   description: "Intelligent automation, machine learning models, and AI-powered business solutions.",
  // },
  {
    icon: Settings,
    title: "SaaS Consulting",
    description: "Strategic guidance for SaaS development, architecture design, and platform optimization.",
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your specific business requirements.",
  },
]

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
