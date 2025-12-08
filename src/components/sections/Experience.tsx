import { IExperience } from "@/types/portfolio"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences: IExperience[] = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    startYear: "2022",
    endYear: "Present",
    responsibilities: [
      "Led a team of 5 developers in building and maintaining enterprise-level applications",
      "Architected and implemented microservices-based solutions using modern tech stack",
      "Improved system performance by 40% through optimization and refactoring",
      "Mentored junior developers and conducted code reviews"
    ],
    techStack: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
  },
  {
    id: "2",
    company: "Digital Innovations Co.",
    position: "Full Stack Developer",
    startYear: "2020",
    endYear: "2022",
    responsibilities: [
      "Developed and maintained multiple client-facing web applications",
      "Implemented RESTful APIs and integrated third-party services",
      "Collaborated with UX designers to implement responsive designs",
      "Participated in agile development processes"
    ],
    techStack: ["Laravel", "Vue.js", "MySQL", "Docker", "Redis"]
  },
  {
    id: "3",
    company: "StartUp Hub",
    position: "Junior Developer",
    startYear: "2018",
    endYear: "2020",
    responsibilities: [
      "Built and maintained company website and internal tools",
      "Assisted in database design and optimization",
      "Implemented automated testing and CI/CD pipelines",
      "Collaborated with cross-functional teams"
    ],
    techStack: ["PHP", "JavaScript", "MySQL", "Git", "Jenkins"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-slate-700 transform -translate-x-1/2 xl:block hidden" />

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative ${
                    index % 2 === 0
                      ? 'lg:pr-12 xl:translate-x-[-50%] lg:translate-x-[-20%]'
                      : 'lg:pl-12 xl:translate-x-[50%] lg:translate-x-[20%]'
                  }`}
                >
                  {/* Timeline dot */}
                  {/* <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-red-600 rounded-full transform -translate-x-1/2 z-10" /> */}

                  {/* Card */}
                  <Card className="relative p-6 bg-white/5 border-slate-800 backdrop-blur-sm">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {exp.position}
                          </h3>
                          <p className="text-slate-300">{exp.company}</p>
                        </div>
                        <div className="text-right text-slate-400">
                          <p>{exp.startYear} - {exp.endYear}</p>
                        </div>
                      </div>

                      <ul className="list-disc list-inside text-slate-300 space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-slate-800/50 text-slate-300 border-slate-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
