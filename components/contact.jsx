"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {

  return (
    <div className="py-12 md:px-24 px-4 bg-beige-100">
      <h1 className="text-center text-green-700 mb-8">Contact Us</h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card rounded-xl rounded-t-none border-t-4 border-x-0 border-b-0 border-blue-500 p-4">
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
                  <p>+91 98383 55024</p>
                  <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="flex bg-beige-50 px-4 py-2 rounded-xl items-start gap-3">
                <Mail className="text-green-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>info@gulshanerabiya.org</p>
                  <p className="text-sm text-muted-foreground">We aim to respond within 24 hours</p>
                </div>
              </div>

              <div className="flex bg-beige-50 px-4 py-2 rounded-xl items-start gap-3">
                <MapPin className="text-green-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>Taton muraini, Lambhuwa</p>
                  <p>Sultanpur, 228001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-xl rounded-t-none border-t-4 border-x-0 border-b-0 border-pink-500">
            <h2 className="text-green-700 mb-2">Visit Us</h2>
            <p className="mb-4">We welcome visitors during our open hours. Please call ahead to schedule a tour.</p>
            <div className="bg-beige-50 p-4 rounded-xl">
              <h3 className="font-bold mb-2">Open Hours</h3>
              <ul className="space-y-1">
                <li>
                  <strong>Saturday - Thursday:</strong> 7:30 AM - 12:30 PM
                </li>
                <li>
                  <strong>Office Hours:</strong> 10:00 AM - 4:00 PM
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

