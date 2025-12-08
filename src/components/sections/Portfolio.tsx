import { useState } from "react"
import { IPortfolio } from "@/types/portfolio"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const portfolioItems: IPortfolio[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    client: "TechStore Inc.",
    year: "2024",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and customer analytics.",
    techStack: ["Laravel", "React", "MySQL", "AWS"],
    images: [
      "https://placehold.co/800x600/334155/ffffff?text=E-Commerce+1",
      "https://placehold.co/800x600/334155/ffffff?text=E-Commerce+2",
      "https://placehold.co/800x600/334155/ffffff?text=E-Commerce+3"
    ]
  },
  {
    id: "2",
    name: "Healthcare Management System",
    client: "MediCare Solutions",
    year: "2023",
    description: "An integrated healthcare management system for scheduling appointments, managing patient records, and generating reports.",
    techStack: ["PHP", "Laravel", "Vue.js", "PostgreSQL"],
    images: [
      "https://placehold.co/800x600/334155/ffffff?text=Healthcare+1",
      "https://placehold.co/800x600/334155/ffffff?text=Healthcare+2"
    ]
  },
  {
    id: "3",
    name: "Real Estate Portal",
    client: "HomeFind Realty",
    year: "2023",
    description: "A comprehensive real estate portal with property listings, virtual tours, and agent management system.",
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
