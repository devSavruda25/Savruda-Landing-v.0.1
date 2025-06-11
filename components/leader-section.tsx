"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"

const leaders = [
  {
    name: "Dadasaheb S. Shendage",
    title: "Founder & CEO",
    bio: "Visionary leader with 15+ years in enterprise software development and AI research. Former VP of Engineering at Google, holds PhD in Computer Science from Stanford.",
    image: "/placeholder.svg?height=400&width=400",
    achievements: [""],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "shendage@savruda.in.com",
    },
  },
  {
    name: "Savita D. Shendage",
    title: "Co-Founder",
    bio: "Strategic financial expert with extensive experience in scaling tech startups. Former CFO at three successful exits, MBA from Wharton Business School.",
    image: "/placeholder.svg?height=400&width=400",
    achievements: [""],
    social: {
     linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "shendage@savruda.in.com",
    },
  },
  {
    name: "Omkar D. Shendage",
    title: "Founder- Brotein Bistro",
    bio: "Technical innovator specializing in cloud architecture and machine learning systems. Former Principal Engineer at AWS, published 50+ research papers.",
    image: "/placeholder.svg?height=400&width=400",
    achievements: [],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "shendage@savruda.in.com",
    },
  },
]

export default function LeaderSection() {
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

    const element = document.getElementById("leaders")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="leaders" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and excellence at SAVRUDA INNOVATION.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card
                key={leader.name}
                className={`group hover:shadow-xl transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <a href={leader.social.linkedin} className="hover:text-primary transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href={leader.social.twitter} className="hover:text-primary transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a href={`mailto:${leader.social.email}`} className="hover:text-primary transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-primary font-semibold">{leader.title}</p>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{leader.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {leader.achievements.map((achievement) => (
                        <Badge key={achievement} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
