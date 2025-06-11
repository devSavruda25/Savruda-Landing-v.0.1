"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Calendar, CheckCircle } from "lucide-react"

const stats = [
  {
    icon: CheckCircle,
    number: "150+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries",
  },
  {
    icon: Users,
    number: "98%",
    label: "Satisfied Clients",
    description: "Client satisfaction rate based on project feedback",
  },
  {
    icon: Calendar,
    number: "8+",
    label: "Years Experience",
    description: "Combined team experience in technology solutions",
  },
  {
    icon: Trophy,
    number: "25+",
    label: "Industry Awards",
    description: "Recognition for excellence and innovation",
  },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          stats.forEach((stat, index) => {
            const finalNumber = Number.parseInt(stat.number.replace(/\D/g, ""))
            let current = 0
            const increment = finalNumber / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= finalNumber) {
                current = finalNumber
                clearInterval(timer)
              }
              setAnimatedNumbers((prev) => {
                const newNumbers = [...prev]
                newNumbers[index] = Math.floor(current)
                return newNumbers
              })
            }, 30)
          })
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className={`text-center hover:shadow-lg transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number.includes("%")
                      ? `${animatedNumbers[index]}%`
                      : stat.number.includes("+")
                        ? `${animatedNumbers[index]}+`
                        : animatedNumbers[index]}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
