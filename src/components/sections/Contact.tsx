import { useState } from "react"
import { ISocialMedia, IContactForm } from "@/types/portfolio"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

const socialLinks: ISocialMedia[] = [
  {
    id: "1",
    platform: "Email",
    url: "mailto:ammaralifianfahdan@gmail.com",
    handle: "ammaralifianfahdan@gmail.com"
  },
  {
    id: "2",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ammar-alifian-fahdan-014372117",
    handle: "Ammar Alifian Fahdan"
  },
  {
    id: "3",
    platform: "GitHub",
    url: "https://www.github.com/kerupuksambel",
    handle: "kerupuksambel"
  }
]

export function Contact() {
  const [formData, setFormData] = useState<IContactForm>({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission to your API
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <Card key={link.id} className="p-4">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-700 hover:text-red-600 transition-colors"
                  >
                    {link.platform === "Email" ? (
                      <Mail className="h-5 w-5" />
                    ) : (
                      <Linkedin className="h-5 w-5" />
                    )}
                    <span>{link.handle}</span>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
