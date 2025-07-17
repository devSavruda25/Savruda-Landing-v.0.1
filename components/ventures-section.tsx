"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Smartphone, ShoppingCart, GraduationCap, SproutIcon, Salad } from "lucide-react"
import Link from "next/link"



const ventures = [
  {
    name: "KENSO AGRO INDUSTRIES",
    type: "AGRO INDUSTRIES",
    description:
      "Kenso Agro Pvt. Ltd. is an agrochemical manufacturing company based in Nashik, Maharashtra. Established in 2011, it specializes in producing fertilizers, pesticides, soil conditioners, and organic manure. The company operates from its facility located at Gat No. 231, Khatwad Phata, Pimpalnare, Nashik – 422202. Kenso Agro Pvt. Ltd. is registered as a private limited company and is classified under the agriculture and allied activities sector. The company is active and continues to serve the agricultural community with its products.",
    image: "https://res.cloudinary.com/dttagqqne/image/upload/v1750234377/kensoProfile_jhkzhs.png",
    icon: SproutIcon,
    color: "from-green-500 to-teal-600",
    link: "https://www.indiamart.com/kenso-agro-chemical/aboutus.html?srsltid=AfmBOoqixkinl0NooiAEl8036UiYfJQn4vBantzc3B-KBPFGNN44_7hU",
  },
  {
    name: "BROTEIN BISTRO",
    type: "Protein-Rich Fitness Café in Nashik",
    description:
      "Brotein Bistro is a health-focused café in Nashik, offering a diverse menu that combines taste with nutritional value. Their offerings include protein-rich meal bowls, whole wheat pizzas, wraps, sandwiches, and shakes, catering to health-conscious individuals. The bistro provides both dine-in and delivery options, with outlets in Parijat Nagar and College Road. It's a popular choice for those seeking wholesome meals without compromising on flavor.",
    image: "https://res.cloudinary.com/dttagqqne/image/upload/v1750235181/bb_cjmexj.jpg",
    icon: Salad,
    // tags: ["iOS Development", "Android Apps", "Cross-platform"],
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
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                className={`group overflow-hidden hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <img
                    src={venture.image}
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

                  {/* <div className="flex flex-wrap gap-2 mb-6">
                    {venture.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  <Link href={venture.link} target="_blank" rel="noopener noreferrer">
                    <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                      <span>
                        Visit {venture.name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
