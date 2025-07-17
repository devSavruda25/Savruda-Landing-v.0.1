"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Miss.Rutuja Bafana",
    title: "HR",
    image: "https://res.cloudinary.com/dttagqqne/image/upload/v1752767092/femaleuser_sva0ow.png",
    skills: ["Human Resources", "Recruitment", "Employee Relations", "Training and Development"],
  },
  {
    name: "Mr.Prathamesh Devrukhakar",
    title: "Full Stack Developer",
    image: "https://res.cloudinary.com/dttagqqne/image/upload/v1752767109/maleuser_w4qphc.png",
    skills: ["ReactJs", "Node.js", "TypeScript", "Next.js", "Tailwind CSS", "Express.js", "MongoDB", "PostgreSQL", "Docker"],
  },
  {
    name: "Mr.David Kumar",
    title: "UI/UX Designer",
    image: "https://res.cloudinary.com/dttagqqne/image/upload/v1752767109/maleuser_w4qphc.png",
    skills: ["Figma", "Design Systems", "User Research"],
  },
  {
    name: "Miss. Jagruti ",
    title: "Accountant",
    image: "https://res.cloudinary.com/dttagqqne/image/upload/v1752767092/femaleuser_sva0ow.png",
    skills: ["Accounting", "Financial Analysis", "Taxation"],
  },
  
]

export default function TeamSection() {
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

    const element = document.getElementById("team")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Talented professionals working together to deliver exceptional results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`group hover:shadow-lg transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{member.title}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
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
