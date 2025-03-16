"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CFO",
      company: "TechVentures",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "This platform revolutionized how we manage our crypto assets. The security features are unmatched in the industry.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Founder",
      company: "BlockInnovate",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "We've increased our trading efficiency by 200% since switching to this platform. The API integration is seamless.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Investment Manager",
      company: "Capital Growth",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The analytics tools provided have given us insights we never had before. Our investment strategy has completely transformed.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="min-w-full border-none bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="h-16 w-16 mb-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <blockquote className="text-lg italic mb-4">"{testimonial.content}"</blockquote>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

