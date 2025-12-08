import { useState } from "react"
import { IPortfolio } from "@/types/portfolio"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const portfolioItems: IPortfolio[] = [
  {
    id: "1",
    name: "ExaMove",
    client: "-",
    year: "2025",
    description: "This project starts with our observation of undergrad students lacking a proper cycle of exercising, hence we made this app to tackle those problem by guiding and keeping students for more consistent cycle. To tackle those problem, we did extensive researches and finally formulated two main approaches; tracking the intensity of the exercise by detecting their BPM, and creating a recommendation system tailored for the user so they can directly exercise without any hassle of choosing the exercise menu they wanted to do. In this project, I worked on the BPM detection mechanism by utilizing Apple's technology such as WatchOS and HealthKit, and developed the synchronization between Apple Watch and iPhone. It resulted on a real-time connection and synchronization for the BPM tracking.",
    techStack: ["SwiftUI", "WatchOS", "iOS", "HealthKit"],
    images: [
      "https://placehold.co/800x600/334155/ffffff?text=E-Commerce+1",
      "https://placehold.co/800x600/334155/ffffff?text=E-Commerce+2",
      "https://placehold.co/800x600/334155/ffffff?text=E-Commerce+3"
    ]
  },
  {
    id: "2",
    name: "Bigedor",
    client: "-",
    year: "2025",
    description: "This project starts with the lacks of online image editor that are able to handle high-resolution images and export them in high-resolution. Based on those problem, I designed the hybrid architecture I could use to let the high resolution images get loaded and processed more smoothly.",
    techStack: ["TypeScript", "Node.js", "Skia", "HTML5 Canvas"],
    images: [
      "https://placehold.co/800x600/334155/ffffff?text=Social+App+1",
      "https://placehold.co/800x600/334155/ffffff?text=Social+App+2",
      "https://placehold.co/800x600/334155/ffffff?text=Social+App+3"
    ]
  },
  // {
  //   id: "2",
  //   name: "[REDACTED]",
  //   client: "[REDACTED]",
  //   year: "2023",
  //   description: "This project came from the request of the client to create a social app specialized in event hosting. Based on the client's desired use cases, I designed the business flows and the overall architecture of the app. Besides that, I also lead the backend team to develop the API needed for the mobile app using NodeJS and ExpressJS. In this project, I was responsible for the overall project management, architecture design, and backend development.",
  //   techStack: ["TypeScript", "Node.js", "ExpressJS", "MySQL", "Redis", "Docker"],
  //   images: [
  //     "https://placehold.co/800x600/334155/ffffff?text=Healthcare+1",
  //     "https://placehold.co/800x600/334155/ffffff?text=Healthcare+2"
  //   ]
  // },
  {
    id: "3",
    name: "Cochrane Sinclair Landing Page",
    client: "Cochrane Sinclair",
    year: "2024",
    description: "This project starts from the request of a client that wanted their landing page revamped, not only from the frontend side but also the backend one as well, given the existing landing page is a static Webframe app. To fulfill the requirements, I analyzed the existing landing page and built up the backend system based on the needed entities. In this project, I worked as a full staack developer, but especially working on the backend side, by building up the administrator system using Laravel and PHP. The result is a fully functional landing page with an easy-to-use administrator panel for managing the contents.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      "https://placehold.co/800x600/334155/ffffff?text=RealEstate+1",
      "https://placehold.co/800x600/334155/ffffff?text=RealEstate+2"
    ]
  }
]

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<IPortfolio | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => {
                setSelectedProject(item)
                setCurrentImageIndex(0)
              }}
            >
              <img 
                src={item.images[0]} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.client} | {item.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog 
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null)
            setCurrentImageIndex(0)
          }
        }}
      >
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.name}</DialogTitle>
              </DialogHeader>
              <div className="relative mt-4">
                <div className="aspect-video relative">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.name} ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2"
                        onClick={handlePrevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={handleNextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <p><span className="font-semibold">Client:</span> {selectedProject.client}</p>
                  <p><span className="font-semibold">Year:</span> {selectedProject.year}</p>
                  <p><span className="font-semibold">Description:</span> {selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold">Tech Stack:</span>
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
