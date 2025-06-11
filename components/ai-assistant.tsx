"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Sparkles, Zap } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

const predefinedQuestions = [
  "What services do you offer?",
  "How can I schedule a consultation?",
  "What's your pricing structure?",
  "Tell me about your team",
  "What technologies do you use?",
]

const aiResponses: Record<string, string> = {
  "what services do you offer":
    "We offer comprehensive IT solutions including Web Development, DevOps Solutions, Cloud Solutions, AI Integration, SaaS Consulting, and Custom Software Development. Each service is tailored to meet your specific business needs.",

  "how can i schedule a consultation":
    "You can schedule a free consultation by clicking the 'Schedule Consultation' button in our contact section, or simply click 'Get Started' in the navigation. We offer 60-minute consultations to discuss your project requirements.",

  "what's your pricing structure":
    "Our pricing varies based on project scope and requirements. We offer competitive rates for startups to enterprise clients. During our free consultation, we'll provide a detailed quote based on your specific needs.",

  "tell me about your team":
    "Our team consists of experienced professionals led by our Founder & CEO Sarah Chen, CFO Michael Rodriguez, and CTO Dr. Emily Watson. We have specialists in development, DevOps, design, data science, and more.",

  "what technologies do you use":
    "We work with cutting-edge technologies including React, Node.js, AWS, Docker, Kubernetes, Python, TensorFlow, and more. We choose the best tech stack for each project's requirements.",

  hello:
    "Hello! 👋 I'm SAVRUDA INNOVATION's AI assistant. I'm here to help you learn about our services, schedule consultations, and answer any questions about our IT solutions. How can I assist you today?",

  hi: "Hi there! Welcome to SAVRUDA INNOVATION! I'm your AI assistant, ready to help you with information about our services, team, or anything else you'd like to know. What can I help you with?",

  default:
    "I'd be happy to help you with that! For detailed information about our services, pricing, or to schedule a consultation, I recommend speaking with our team directly. You can use the contact form or schedule a free consultation. Is there anything specific about SAVRUDA INNOVATION you'd like to know?",
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm SAVRUDA INNOVATION's AI assistant. I'm here to help you learn about our services and answer any questions. How can I assist you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Check for exact matches first
    for (const [key, response] of Object.entries(aiResponses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }

    // Check for keywords
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("budget")) {
      return aiResponses["what's your pricing structure"]
    }

    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("do")) {
      return aiResponses["what services do you offer"]
    }

    if (lowerMessage.includes("team") || lowerMessage.includes("who") || lowerMessage.includes("staff")) {
      return aiResponses["tell me about your team"]
    }

    if (
      lowerMessage.includes("consultation") ||
      lowerMessage.includes("meeting") ||
      lowerMessage.includes("schedule")
    ) {
      return aiResponses["how can i schedule a consultation"]
    }

    if (lowerMessage.includes("technology") || lowerMessage.includes("tech") || lowerMessage.includes("stack")) {
      return aiResponses["what technologies do you use"]
    }

    return aiResponses["default"]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: generateResponse(inputValue),
          sender: "assistant",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 "
          size="icon"
        >
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card
          className={`fixed bottom-6 right-6 w-96 shadow-2xl z-50 transition-all duration-300 ${
            isMinimized ? "h-16" : "h-[600px]"
          }`}
        >
          {/* Chat Header */}
          <CardHeader className="pb-3 bg-gradient-to-r from-primary to-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="w-8 h-8 bg-white/20">
                    <AvatarFallback className="bg-white/20 text-white">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold">SAVRUDA IN. AI Assistant</CardTitle>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="p-0 flex flex-col h-[calc(600px-80px)]">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          <AvatarFallback
                            className={
                              message.sender === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }
                          >
                            {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Quick Questions */}
              {messages.length <= 1 && (
                <div className="p-4 border-t bg-muted/30">
                  <p className="text-xs text-muted-foreground mb-2 flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Quick questions:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {predefinedQuestions.slice(0, 3).map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 px-2"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about SAVRUDA INNOVATION..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="bg-gradient-to-r from-primary to-secondary"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <Zap className="h-3 w-3 mr-1" />
                  Powered by SAVRUDA INNOVATION AI
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  )
}
