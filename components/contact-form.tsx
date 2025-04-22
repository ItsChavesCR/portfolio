"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
      valid = false
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido"
      valid = false
    }

    // Validar asunto
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido"
      valid = false
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
      valid = false
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (validateForm()) {
      setIsSubmitting(true)
  
      try {
        const response = await fetch("https://formspree.io/f/xldjygzv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        })
  
        if (response.ok) {
          setIsSubmitted(true)
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
          setTimeout(() => setIsSubmitted(false), 3000)
        } else {
          alert("Error al enviar el mensaje. Intenta nuevamente.")
        }
      } catch (error) {
        console.error("Error:", error)
        alert("Ocurrió un error inesperado.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div id="contact" className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center p-6 bg-green-100 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-500/30">
          <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-500 mb-4" />
          <h3 className="text-xl font-bold text-green-600 dark:text-green-500 mb-2">¡Mensaje enviado!</h3>
          <p className="text-center text-slate-700 dark:text-slate-300">
            Gracias por contactarme. Te responderé lo antes posible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Nombre
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-teal-500 text-slate-900 dark:text-slate-200 ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Tu nombre"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-teal-500 text-slate-900 dark:text-slate-200 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Asunto
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-teal-500 text-slate-900 dark:text-slate-200 ${
                errors.subject ? "border-red-500" : ""
              }`}
              placeholder="Asunto del mensaje"
            />
            {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Mensaje
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-teal-500 text-slate-900 dark:text-slate-200 min-h-[120px] ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Escribe tu mensaje aquí..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Enviar mensaje
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
