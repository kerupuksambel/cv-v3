import { IExperience } from "@/types/portfolio"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences: IExperience[] = [
  {
    id: "0",
    company: "Hostly",
    position: "Back End Developer",
    startYear: "2025",
    endYear: "Present",
    responsibilities: [
      "Lead the backend team to work on the backend for Hostly, a social app optimized for hosting and promoting social events.",
      "Designed the ERD and databases structure based on client’s needs",
      "Worked on WebSocket technology for real-time messaging and optimized the payload for up to 90% speed",
      "Worked on Firebase for real-time notification used by the application",
      "Integrated Apple sign-in mechanism for Flutter mobile app"
    ],
    techStack: [
      "TypeScript",
      "ExpressJS",
      "MySQL",
      "Redis",
      "Docker",
      "Firebase"
    ]
  },
  {
    id: "1",
    company: "Rally the Locals",
    position: "Lead Developer",
    startYear: "2022",
    endYear: "Present",
    responsibilities: [
      "Developed Rally the Locals main frontend along with supporting pages",
      "Developed the payment gateway using Stripe",
      "Developed and improved RTL admin dashboard for better administrator experience and easier organization",
      "Designed and led migration from a PHP Laravel backend to NodeJS + ExpressJS backend",
      "Designed Bitbucket CI pipeline for development",
      "Handled deployment for the migrated frontend and backend"
    ],
    techStack: [
      "Laravel",
      "NextJS",
      "ExpressJS",
      "Tailwind",
      "Stripe",
      "Docker",
      "Atlassian Suite"
    ]
  },
  {
    id: "2",
    company: "Technowand",
    position: "Freelance Full Stack Web Developer",
    startYear: "2022",
    endYear: "2022",
    responsibilities: [
      "Developed a fitness and personal trainer website using CodeIgniter",
      "Handled Stripe integration for transactions",
      "Developed the application using Scrum methodology"
    ],
    techStack: [
      "CodeIgniter",
      "Stripe",
      "Bootstrap",
      "Jira"
    ]
  },
  {
    id: "3",
    company: "DPTSI - Institut Teknologi Sepuluh Nopember",
    position: "Intern Full Stack Web Developer",
    startYear: "2020",
    endYear: "2021",
    responsibilities: [
      "Developed the proctoring system for ITS entrance exam",
      "Designed the database and data management system to streamline report generation with up to 60% faster load times",
      "Developed a MOOC platform using Laravel and Bootstrap",
      "Designed scalable database and models for the MOOC application"
    ],
    techStack: [
      "Laravel",
      "Microsoft SQL Server",
      "Bootstrap"
    ]
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
                      ? 'lg:pr-12 xl:translate-x-[-45%] lg:translate-x-[-20%]'
                      : 'lg:pl-12 xl:translate-x-[45%] lg:translate-x-[20%]'
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
