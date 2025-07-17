"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, Calendar, Clock, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"contact" | "consultation">("contact")
  const [consultationStep, setConsultationStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [consultationData, setConsultationData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    preferredDate: "",
    preferredTime: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleContactSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let the form submit naturally to FormSubmit
    console.log("Contact form submitting...")
  }

  const handleConsultationSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let the form submit naturally to FormSubmit
    console.log("Consultation form submitting...")
  }

  const handleInputChange = (field: string, value: string) => {
    if (activeTab === "contact") {
      setFormData((prev) => ({ ...prev, [field]: value }))
    } else {
      setConsultationData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const isStep1Valid = consultationData.name && consultationData.email && consultationData.company
  const isStep2Valid = consultationData.serviceType && consultationData.projectDescription
  const isStep3Valid = consultationData.preferredDate && consultationData.preferredTime

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <div className="flex space-x-1 mb-4">
                  <Button
                    variant={activeTab === "contact" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("contact")}
                  >
                    Quick Contact
                  </Button>
                  <Button
                    variant={activeTab === "consultation" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("consultation")}
                  >
                    Schedule Consultation
                  </Button>
                </div>
                <CardTitle>{activeTab === "contact" ? "Send us a Message" : "Schedule Free Consultation"}</CardTitle>
                <CardDescription>
                  {activeTab === "contact"
                    ? "Fill out the form below and we'll get back to you within 24 hours."
                    : "Let's discuss your project requirements step by step."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {activeTab === "contact" ? (
                  <form
                    action="https://formsubmit.co/developer.savruda@gmail.com"
                    method="POST"
                    onSubmit={handleContactSubmit}
                    className="space-y-6"
                  >
                    {/* FormSubmit Configuration */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Contact Form Submission from Savruda.in"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for contacting Savruda Innovation! We'll get back to you within 24 hours."
                    />

                    <div>
                      <Label htmlFor="contact-name">Name</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center space-x-2 mb-6">
                      {[1, 2, 3].map((stepNumber) => (
                        <div key={stepNumber} className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              consultationStep >= stepNumber
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {consultationStep > stepNumber ? <CheckCircle className="h-4 w-4" /> : stepNumber}
                          </div>
                          {stepNumber < 3 && (
                            <div
                              className={`w-12 h-0.5 mx-2 ${consultationStep > stepNumber ? "bg-primary" : "bg-muted"}`}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {consultationStep < 4 ? (
                      <>
                        {consultationStep === 1 && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-center mb-4">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="cons-name">Full Name *</Label>
                                <Input
                                  id="cons-name"
                                  value={consultationData.name}
                                  onChange={(e) => handleInputChange("name", e.target.value)}
                                  required
                                  placeholder="Your full name"
                                />
                              </div>
                              <div>
                                <Label htmlFor="cons-email">Email *</Label>
                                <Input
                                  id="cons-email"
                                  type="email"
                                  value={consultationData.email}
                                  onChange={(e) => handleInputChange("email", e.target.value)}
                                  required
                                  placeholder="your.email@example.com"
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="company">Company Name *</Label>
                              <Input
                                id="company"
                                value={consultationData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                                required
                                placeholder="Your company name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={consultationData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="+1 (555) 123-4567"
                              />
                            </div>
                            <Button
                              type="button"
                              onClick={() => setConsultationStep(2)}
                              disabled={!isStep1Valid}
                              className="w-full"
                            >
                              Next: Project Details
                            </Button>
                          </div>
                        )}

                        {consultationStep === 2 && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-center mb-4">Project Information</h3>
                            <div>
                              <Label htmlFor="serviceType">Service Type *</Label>
                              <Select
                                value={consultationData.serviceType}
                                onValueChange={(value) => handleInputChange("serviceType", value)}
                                required
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select service" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Web Development">Web Development</SelectItem>
                                  <SelectItem value="DevOps Solutions">DevOps Solutions</SelectItem>
                                  <SelectItem value="Cloud Solutions">Cloud Solutions</SelectItem>
                                  <SelectItem value="AI Integration">AI Integration</SelectItem>
                                  <SelectItem value="SaaS Consulting">SaaS Consulting</SelectItem>
                                  <SelectItem value="Custom Software">Custom Software</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="projectDescription">Project Description *</Label>
                              <Textarea
                                id="projectDescription"
                                value={consultationData.projectDescription}
                                onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                                placeholder="Describe your project requirements, goals, and any specific needs..."
                                rows={3}
                                required
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="budget">Budget Range</Label>
                                <Select
                                  value={consultationData.budget}
                                  onValueChange={(value) => handleInputChange("budget", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select budget" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Under $10,000">Under $10,000</SelectItem>
                                    <SelectItem value="$10,000 - $25,000">$10,000 - $25,000</SelectItem>
                                    <SelectItem value="$25,000 - $50,000">$25,000 - $50,000</SelectItem>
                                    <SelectItem value="$50,000 - $100,000">$50,000 - $100,000</SelectItem>
                                    <SelectItem value="Over $100,000">Over $100,000</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="timeline">Timeline</Label>
                                <Select
                                  value={consultationData.timeline}
                                  onValueChange={(value) => handleInputChange("timeline", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="ASAP">ASAP</SelectItem>
                                    <SelectItem value="1-3 months">1-3 months</SelectItem>
                                    <SelectItem value="3-6 months">3-6 months</SelectItem>
                                    <SelectItem value="6-12 months">6-12 months</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={() => setConsultationStep(1)}>
                                Back
                              </Button>
                              <Button type="button" onClick={() => setConsultationStep(3)} disabled={!isStep2Valid}>
                                Next: Schedule Time
                              </Button>
                            </div>
                          </div>
                        )}

                        {consultationStep === 3 && (
                          <form
                            action="https://formsubmit.co/developer.savruda@gmail.com"
                            method="POST"
                            onSubmit={handleConsultationSubmit}
                            className="space-y-4"
                          >
                            {/* FormSubmit Configuration */}
                            <input
                              type="hidden"
                              name="_subject"
                              value="New Consultation Request from Savruda.in"
                            />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
                            <input type="hidden" name="_template" value="table" />
                            <input
                              type="hidden"
                              name="_autoresponse"
                              value="Thank you for scheduling a consultation with Savruda Innovation! We'll contact you soon to confirm your appointment."
                            />

                            {/* All consultation data as hidden inputs */}
                            <input type="hidden" name="Full Name" value={consultationData.name} />
                            <input type="hidden" name="Email" value={consultationData.email} />
                            <input type="hidden" name="Company Name" value={consultationData.company} />
                            <input type="hidden" name="Phone Number" value={consultationData.phone} />
                            <input type="hidden" name="Service Type" value={consultationData.serviceType} />
                            <input
                              type="hidden"
                              name="Project Description"
                              value={consultationData.projectDescription}
                            />
                            <input type="hidden" name="Budget Range" value={consultationData.budget} />
                            <input type="hidden" name="Project Timeline" value={consultationData.timeline} />

                            <h3 className="text-lg font-semibold text-center mb-4">Schedule Consultation</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="preferredDate">Preferred Date *</Label>
                                <Input
                                  id="preferredDate"
                                  name="Preferred Date"
                                  type="date"
                                  value={consultationData.preferredDate}
                                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="preferredTime">Preferred Time *</Label>
                                <Select
                                  value={consultationData.preferredTime}
                                  onValueChange={(value) => handleInputChange("preferredTime", value)}
                                  required
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select time" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="09:00 AM">09:00 AM</SelectItem>
                                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                                    <SelectItem value="02:00 PM">02:00 PM</SelectItem>
                                    <SelectItem value="03:00 PM">03:00 PM</SelectItem>
                                    <SelectItem value="04:00 PM">04:00 PM</SelectItem>
                                  </SelectContent>
                                </Select>
                                <input type="hidden" name="Preferred Time" value={consultationData.preferredTime} />
                              </div>
                            </div>

                            {/* Summary Section */}
                            <div className="bg-muted/50 rounded-lg p-4 mt-6">
                              <h4 className="font-semibold mb-3">Consultation Summary</h4>
                              <div className="space-y-2 text-sm">
                                <p>
                                  <strong>Name:</strong> {consultationData.name}
                                </p>
                                <p>
                                  <strong>Email:</strong> {consultationData.email}
                                </p>
                                <p>
                                  <strong>Company:</strong> {consultationData.company}
                                </p>
                                {consultationData.phone && (
                                  <p>
                                    <strong>Phone:</strong> {consultationData.phone}
                                  </p>
                                )}
                                <p>
                                  <strong>Service:</strong> {consultationData.serviceType}
                                </p>
                                {consultationData.budget && (
                                  <p>
                                    <strong>Budget:</strong> {consultationData.budget}
                                  </p>
                                )}
                                {consultationData.timeline && (
                                  <p>
                                    <strong>Timeline:</strong> {consultationData.timeline}
                                  </p>
                                )}
                                <p>
                                  <strong>Date:</strong> {consultationData.preferredDate}
                                </p>
                                <p>
                                  <strong>Time:</strong> {consultationData.preferredTime}
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={() => setConsultationStep(2)}>
                                Back
                              </Button>
                              <Button type="submit" disabled={!isStep3Valid} className="bg-primary hover:bg-primary/90">
                                Schedule Consultation
                                <Send className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </form>
                        )}
                      </>
                    ) : (
                      <div className="text-center space-y-4">
                        <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                        <h3 className="text-xl font-semibold text-green-600">Consultation Scheduled!</h3>
                        <p className="text-muted-foreground">
                          We'll send you a confirmation email with meeting details.
                        </p>
                        <Button
                          onClick={() => {
                            setConsultationStep(1)
                            setActiveTab("contact")
                          }}
                          className="w-full"
                        >
                          Done
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">developer.savruda@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Office</h3>
                      <p className="text-muted-foreground">
                        123 Innovation Drive
                        <br />
                        Tech Valley, CA 94025
                      </p>
                    </div>
                  </div>

                  {/* Embedded Map */}
                  <div className="mt-4 rounded-lg overflow-hidden border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d788.1558004420443!2d73.75721935745774!3d20.00339613557721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752769067542!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      title="Savruda Innovation Office Location"
                    />
                  </div>

                  {/* Map Actions */}
                  <div className="mt-3 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
                      <a
                        href="https://maps.app.goo.gl/MbsrR98JXFiXCorW7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View in Maps
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=123+Innovation+Drive,+Tech+Valley,+CA+94025"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              

              {/* <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Free Consultation Available</h3>
                  <p className="mb-4 text-sm">
                    Schedule a 60-minute consultation to discuss your project requirements.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Project scope analysis</li>
                    <li>• Technology recommendations</li>
                    <li>• Timeline and budget estimation</li>
                    <li>• Q&A session</li>
                  </ul>
                  <Button variant="secondary" className="w-full" onClick={() => setActiveTab("consultation")}>
                    <Clock className="mr-2 h-4 w-4" />
                    Schedule Now
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
