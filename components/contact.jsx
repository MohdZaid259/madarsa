"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message. We will get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="py-12 px-24 bg-beige-100">
      <h1 className="text-center text-green-700 mb-8">Contact Us</h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card rounded-xl p-4">
            <h2 className="text-green-700 mb-2">Get in Touch</h2>
            <p className="mb-6">
              We welcome your inquiries and are happy to assist you with any questions about our madrasa, programs, or
              admission process.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex bg-beige-50 px-4 py-2 rounded-xl items-start gap-3">
                <Phone className="text-green-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Monday to Friday, 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex bg-beige-50 px-4 py-2 rounded-xl items-start gap-3">
                <Mail className="text-green-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>info@girlsmadrasa.org</p>
                  <p className="text-sm text-muted-foreground">We aim to respond within 24 hours</p>
                </div>
              </div>

              <div className="flex bg-beige-50 px-4 py-2 rounded-xl items-start gap-3">
                <MapPin className="text-green-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>123 Islamic Education Street</p>
                  <p>Rural Town, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-xl">
            <h2 className="text-green-700 mb-2">Visit Us</h2>
            <p className="mb-4">We welcome visitors during our open hours. Please call ahead to schedule a tour.</p>
            <div className="bg-beige-50 p-4 rounded-xl">
              <h3 className="font-bold mb-2">Open Hours</h3>
              <ul className="space-y-1">
                <li>
                  <strong>Monday - Thursday:</strong> 8:00 AM - 4:00 PM
                </li>
                <li>
                  <strong>Friday:</strong> 8:00 AM - 12:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> 9:00 AM - 2:00 PM (Administrative office only)
                </li>
                <li>
                  <strong>Sunday:</strong> Closed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

