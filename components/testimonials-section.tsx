"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer Walsh",
    title: "CEO, RetailTech Solutions",
    content:
      "TechFlow transformed our entire digital infrastructure. Their expertise in cloud migration and AI integration has given us a competitive edge we never thought possible.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    title: "CTO, FinanceForward",
    content:
      "The team's attention to detail and technical prowess is outstanding. They delivered our mobile banking platform ahead of schedule and exceeded all performance expectations.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "Dr. Amanda Foster",
    title: "Director of Operations, HealthTech Innovations",
    content:
      "Working with TechFlow has been a game-changer. Their DevOps solutions reduced our deployment time by 80% and significantly improved our system reliability.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    name: "Robert Chen",
    title: "Founder, StartupLaunch",
    content:
      "From concept to deployment, TechFlow guided us through every step. Their SaaS consulting expertise helped us build a scalable platform that grows with our business.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

export default function TestimonialsSection() {
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

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`transition-all duration-500 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">"{testimonial.content}"</blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar }
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
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
