"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description:
      "Complete overhaul of a major retail platform, improving performance by 40% and user engagement by 60%.",
    image: "/placeholder.svg?height=250&width=400",
    tags: ["React", "Node.js", "AWS"],
    category: "Web Development",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time business intelligence platform with machine learning insights for data-driven decisions.",
    image: "/placeholder.svg?height=250&width=400",
    tags: ["Python", "TensorFlow", "React"],
    category: "AI Integration",
  },
  {
    title: "Cloud Migration Project",
    description: "Seamless migration of legacy systems to AWS, reducing infrastructure costs by 35%.",
    image: "/placeholder.svg?height=250&width=400",
    tags: ["AWS", "Docker", "Kubernetes"],
    category: "Cloud Solutions",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking solution with biometric authentication and real-time transactions.",
    image: "/placeholder.svg?height=250&width=400",
    tags: ["React Native", "Node.js", "MongoDB"],
    category: "Mobile Development",
  },
  {
    title: "DevOps Automation Suite",
    description: "Complete CI/CD pipeline implementation reducing deployment time from hours to minutes.",
    image: "/placeholder.svg?height=250&width=400",
    tags: ["Jenkins", "Docker", "Terraform"],
    category: "DevOps",
  },
  {
    title: "SaaS Customer Portal",
    description: "Self-service customer portal with integrated billing, support, and analytics capabilities.",
    image: "/placeholder.svg?height=250&width=400",
    tags: ["Vue.js", "Laravel", "Stripe"],
    category: "SaaS Development",
  },
]

export default function PortfolioSection() {
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

    const element = document.getElementById("portfolio")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing successful projects that demonstrate our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {tag}
                      </span>
                    ))}
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
