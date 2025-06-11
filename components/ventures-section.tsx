"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Smartphone, ShoppingCart, GraduationCap, SproutIcon, Salad } from "lucide-react"
import Image from "next/image"
import brotein from "@/public/broteinProfile.png"


const ventures = [
  {
    name: "KENSO AGRO INDUSTRIES",
    type: "AGRO INDUSTRIES",
    description:
      "Kenso Agro Industries - Manufacturer of dry magnesium sulphate & other products since 2016 in Nashik, Maharashtra.",
    Image: {brotein},
    icon: SproutIcon,
    tags: ["Cloud Integration", "Real-time Sync", "Enterprise Ready"],
    color: "from-green-500 to-teal-600",
    link: "#",
  },
  {
    name: "BROTEIN BISTRO",
    type: "Mobile Development Agency",
    description:
      "Welcome to Broteing Bistro, where flavor meets passion! We are a culinary hub that brings together a diverse range of cuisines under one roof, offering an unforgettable diing experience for every food lover.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Salad,
    tags: ["iOS Development", "Android Apps", "Cross-platform"],
    color: "from-green-500 to-teal-600",
    link: "https://broteinbistro.com/",
  }
]

export default function VenturesSection() {
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

    const element = document.getElementById("ventures")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="ventures" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Ventures</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expanding our impact through innovative products and strategic business ventures.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {ventures.map((venture, index) => (
              <Card
                key={venture.name}
                className={`group overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <img
                    src={venture.image || "/placeholder.svg"}
                    alt={venture.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${venture.color} rounded-lg flex items-center justify-center`}
                    >
                      <venture.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{venture.name}</CardTitle>
                      <p className="text-muted-foreground text-sm">{venture.type}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{venture.description}</CardDescription>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {venture.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Visit {venture.name}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
