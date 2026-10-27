import { ISocialMedia } from "@/types/portfolio"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

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

const platformIcons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Get in Touch
        </h2>
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
            Connect With Me
          </h3>
          <div className="space-y-4">
            {socialLinks.map((link) => {
              const Icon = platformIcons[link.platform as keyof typeof platformIcons] ?? Mail
              return (
                <Card key={link.id} className="p-4">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-700 hover:text-red-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.handle}</span>
                  </a>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
