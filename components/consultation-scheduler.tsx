"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, CheckCircle, X } from "lucide-react"
import { format } from "date-fns"

interface ConsultationSchedulerProps {
  isOpen: boolean
  onClose: () => void
}

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM",
]

const serviceTypes = [
  "Web Development", "DevOps Solutions", "Cloud Solutions",
  "AI Integration", "SaaS Consulting", "Custom Software", "General Consultation",
]

export function ConsultationScheduler({ isOpen, onClose }: ConsultationSchedulerProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    projectDescription: "",
    date: undefined as Date | undefined,
    time: "",
    budget: "",
    timeline: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      serviceType: "",
      projectDescription: "",
      date: undefined,
      time: "",
      budget: "",
      timeline: "",
    })
    setStep(1)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const isStep1Valid = formData.name && formData.email && formData.company
  const isStep2Valid = formData.serviceType && formData.projectDescription
  const isStep3Valid = formData.date && formData.time

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl">Schedule Free Consultation</DialogTitle>
              <DialogDescription>
                Let's discuss your project requirements and how we can help you achieve your goals.
              </DialogDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Progress */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > stepNumber ? <CheckCircle className="h-4 w-4" /> : stepNumber}
              </div>
              {stepNumber < 3 && <div className={`w-12 h-0.5 mx-2 ${step > stepNumber ? "bg-primary" : "bg-muted"}`} />}
            </div>
          ))}
        </div>

        <form
          action="https://formsubmit.co/developer.savruda@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">Tell us about yourself and your company</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" name="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" name="company" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
              </div>

              <div className="flex justify-end">
                <Button type="button" onClick={() => setStep(2)} disabled={!isStep1Valid}>Next: Project Details</Button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold">Project Information</h3>
                <p className="text-muted-foreground">Help us understand your project needs</p>
              </div>

              <div>
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the service you're interested in" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="projectDescription">Project Description *</Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                  required
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="over-100k">Over $100,000</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6-12months">6-12 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button type="button" onClick={() => setStep(3)} disabled={!isStep2Valid}>Next: Schedule Time</Button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold">Schedule Your Consultation</h3>
                <p className="text-muted-foreground">Choose your preferred date and time</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Select Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={handleDateSelect}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Select Time *</Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger><SelectValue placeholder="Choose time slot" /></SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          <div className="flex items-center"><Clock className="mr-2 h-4 w-4" />{time}</div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Hidden Inputs */}
              <input type="hidden" name="serviceType" value={formData.serviceType} />
              <input type="hidden" name="projectDescription" value={formData.projectDescription} />
              <input type="hidden" name="date" value={formData.date ? format(formData.date, "yyyy-MM-dd") : ""} />
              <input type="hidden" name="time" value={formData.time} />
              <input type="hidden" name="budget" value={formData.budget} />
              <input type="hidden" name="timeline" value={formData.timeline} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thanks for scheduling! We’ll get back to you soon." />

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>Back</Button>
                <Button type="submit" disabled={!isStep3Valid}>Schedule Consultation</Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
