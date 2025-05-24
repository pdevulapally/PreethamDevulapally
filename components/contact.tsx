"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Linkedin } from "lucide-react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import RevealText from "./reveal-text"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields")
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      // Submit to Firebase - Note the collection name change from "contacts" to "messages"
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: serverTimestamp(),
      })

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setSubmitStatus("success")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-background bg-opacity-50">
      <div className="container-custom">
        <RevealText>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="section-title mb-0">Contact Me</h2>
            <p className="text-text-primary mt-2 md:mt-0 font-medium">Let's discuss opportunities</p>
          </div>
        </RevealText>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <RevealText className="lg:col-span-2 space-y-6" delay={100}>
            <div className="contact-info-card">
              <h3 className="text-xl font-semibold mb-6 text-primary">Get In Touch</h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-text-primary">Email</p>
                    <a
                      href="mailto:PreethamDevulapally@gmail.com"
                      className="text-text-primary hover:text-primary transition-colors"
                    >
                      PreethamDevulapally@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-text-primary">Location</p>
                    <p className="text-text-primary">London, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-text-primary">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/preethamdevulapally/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-primary transition-colors"
                    >
                      linkedin.com/in/preethamdevulapally
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="font-medium text-text-primary mb-3">Looking for:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-text-primary">Software Engineering Roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-text-primary">Full-Stack Development Positions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-text-primary">Collaborative Team Environments</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealText>

          <RevealText className="lg:col-span-3" delay={200}>
            <div className="contact-form-card">
              <h3 className="text-xl font-semibold mb-6 text-primary">Send a Message</h3>

              {submitStatus === "success" ? (
                <div className="flex items-center p-4 mb-6 text-green-500 bg-green-500 bg-opacity-10 rounded-lg border border-green-500 border-opacity-30">
                  <CheckCircle className="mr-2" size={20} />
                  <p className="text-text-primary">
                    Your message has been sent successfully! I'll get back to you soon.
                  </p>
                </div>
              ) : submitStatus === "error" ? (
                <div className="flex items-center p-4 mb-6 text-red-500 bg-red-500 bg-opacity-10 rounded-lg border border-red-500 border-opacity-30">
                  <AlertCircle className="mr-2" size={20} />
                  <p className="text-text-primary">{errorMessage}</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-text-primary">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-text-primary">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-text-primary">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-text-primary">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  )
}
