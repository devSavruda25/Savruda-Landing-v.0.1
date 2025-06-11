"use client"

import { useEffect, useState } from "react"
import { Code, Zap, Shield } from "lucide-react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 10) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            <div
              className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"
              style={{ animationDuration: "1s" }}
            ></div>
            <div className="absolute inset-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Code className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>

          {/* Floating Icons */}
          <Zap className="absolute -top-2 -right-2 h-6 w-6 text-primary animate-bounce" />
          <Shield
            className="absolute -bottom-2 -left-2 h-6 w-6 text-primary animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Company Name */}
        <h1 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SAVRUDA INNOVATION</span>
        </h1>

        {/* Loading Text */}
        <p className="text-muted-foreground mb-6">Loading innovative solutions...</p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-muted rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground">{progress}%</p>
        </div>

        {/* Loading Messages */}
        <div className="mt-6 h-6">
          {progress < 30 && <p className="text-sm text-muted-foreground animate-fade-in">Initializing systems...</p>}
          {progress >= 30 && progress < 60 && (
            <p className="text-sm text-muted-foreground animate-fade-in">Loading components...</p>
          )}
          {progress >= 60 && progress < 90 && (
            <p className="text-sm text-muted-foreground animate-fade-in">Preparing experience...</p>
          )}
          {progress >= 90 && <p className="text-sm text-muted-foreground animate-fade-in">Almost ready!</p>}
        </div>
      </div>
    </div>
  )
}
