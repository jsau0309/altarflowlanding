"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, BarChart3, Settings } from "lucide-react"
import Confetti from "@/components/ui/confetti"

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    website: "",
    churchSize: "",
    currentSystem: "",
    primaryNeed: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Confetti autoPlay={true} duration={10000} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Group%2020%281%29-DjH8B6FkcLxBMbhG8KmCxgXSYGq8yl.png"
                alt="Altarflow"
                className="h-[45px]" // Updated logo height from 60px to 45px
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                We're looking forward to meeting you
              </h1>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-lg">
                    Answers to any questions you have about Altarflow's church management platform
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-lg">
                    A custom assessment to see how much time Altarflow will save your ministry
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Settings className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-lg">
                    Information on how Altarflow can streamline your church operations and member engagement
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted by section */}
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your work email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Church website</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="churchSize">Church size</Label>
                <Select onValueChange={(value) => handleInputChange("churchSize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select church size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Under 100 members</SelectItem>
                    <SelectItem value="medium">100-500 members</SelectItem>
                    <SelectItem value="large">500-1000 members</SelectItem>
                    <SelectItem value="mega">1000+ members</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentSystem">Current management system</Label>
                <Select onValueChange={(value) => handleInputChange("currentSystem", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select current system" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No system currently</SelectItem>
                    <SelectItem value="excel">Excel/Spreadsheets</SelectItem>
                    <SelectItem value="churchtools">ChurchTools</SelectItem>
                    <SelectItem value="planning-center">Planning Center</SelectItem>
                    <SelectItem value="breeze">Breeze ChMS</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryNeed">Primary need</Label>
                <Select onValueChange={(value) => handleInputChange("primaryNeed", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select primary need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member-management">Member Management</SelectItem>
                    <SelectItem value="event-planning">Event Planning</SelectItem>
                    <SelectItem value="communication">Communication Tools</SelectItem>
                    <SelectItem value="giving">Giving & Donations</SelectItem>
                    <SelectItem value="volunteer-coordination">Volunteer Coordination</SelectItem>
                    <SelectItem value="all">All of the above</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Continue →
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Sign in →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
