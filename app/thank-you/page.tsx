"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Home, Mail, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(5)
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  const handleGoHome = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
          </div>

          {/* Main Content */}
          <Card className="shadow-2xl border-0 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Thank You!
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Your message has been successfully sent to our team at Savruda Innovation.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold mb-4 flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  What happens next?
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary">1</span>
                    </div>
                    <p>Our team will review your message within 2-4 business hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary">2</span>
                    </div>
                    <p>We'll send you a detailed response with next steps</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary">3</span>
                    </div>
                    <p>If needed, we'll schedule a consultation to discuss your project</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Schedule Consultation</h3>
                    <p className="text-xs text-muted-foreground mb-3">Book a free 60-minute consultation</p>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/#contact">Schedule Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-4 text-center">
                    <Mail className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Email Us Directly</h3>
                    <p className="text-xs text-muted-foreground mb-3">For urgent inquiries</p>
                    <Button size="sm" variant="outline" asChild>
                      <a href="mailto:hello@savruda.com">Send Email</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Auto Redirect Notice */}
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>
                    Automatically redirecting to homepage in{" "}
                    <span className="font-semibold text-primary">{countdown}</span> seconds
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleGoHome} className="flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  Go to Homepage
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#about" className="flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Message */}
          <p className="text-sm text-muted-foreground mt-8">
            Need immediate assistance? Call us at{" "}
            <a href="tel:+15551234567" className="text-primary hover:underline font-medium">
              +1 (555) 123-4567
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
