import { IExperience } from "@/types/portfolio"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences: IExperience[] = [
  {
    id: "0",
    company: "Apple Developer Institute for DevOps",
    position: "DevOps Engineer",
    startYear: "2026",
    endYear: "Present",
    responsibilities: [
      "Cut monthly observability spend from around $6,000 to below $200 by migrating from Grafana Cloud to self-hosted Grafana OSS",
      "Architected a meeting planner for a 99.99% availability target across 10 EC2 instances, using an Auto Scaling Group, multi-AZ RDS, and an Application Load Balancer",
      "Built a Bitbucket pipeline covering 3 environments, gating every build on linting, tests, coverage checks, and SonarQube SAST",
      "Took the meeting planner from Minikube to bare metal and then to managed EKS, scaling it with HPA and Metrics Server",
      "Processed around 750k samples/day on the Grafana LGTM stack, exporting telemetry with Alloy and building the dashboards the team monitors"
    ],
    techStack: [
      "AWS",
      "Kubernetes",
      "EKS",
      "Terraform",
      "Bitbucket Pipelines",
      "SonarQube",
      "Grafana"
    ]
  },
  {
    id: "1",
    company: "Hostly",
    position: "Back End Developer",
    startYear: "2025",
    endYear: "2026",
    responsibilities: [
      "Led the backend team behind Hostly, a social app for hosting and promoting events, and reviewed the team's code",
      "Designed the ERD and database structure from the client's requirements",
      "Made real-time messaging up to 90% faster by optimizing WebSocket payloads",
      "Built real-time notifications with Firebase",
      "Integrated Apple Sign In into the Flutter mobile app"
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
    id: "2",
    company: "Apple Developer Academy",
    position: "iOS Developer (Intern)",
    startYear: "2025",
    endYear: "2025",
    responsibilities: [
      "Led a team of 3 programmers building Meteor Crush, a space-themed SwiftUI game, and engineered its physics and meteor and star generation",
      "Built ExaMove, a sport-buddy app for iOS and watchOS, syncing real-time heart-rate data between Apple Watch and iPhone",
      "Trained an image recognition model with Create ML, Core ML, and YOLO"
    ],
    techStack: [
      "Swift",
      "SwiftUI",
      "watchOS",
      "HealthKit",
      "Core ML"
    ]
  },
  {
    id: "3",
    company: "Rally the Locals",
    position: "Lead Developer",
    startYear: "2022",
    endYear: "2026",
    responsibilities: [
      "Grew monthly site views by up to 200% by redesigning the Next.js frontend and improving SEO",
      "Designed and led the backend migration from PHP Laravel to Node.js + ExpressJS, then deployed the new frontend and backend",
      "Built the platform's Stripe payment gateway",
      "Built a granular CMS into the admin dashboard so administrators update landing-page text and images without needing a developer",
      "Owned the design-to-development workflow, turning designers' Figma files into responsive features, and reviewed the team's code",
      "Set up Bitbucket CI/CD with multi-stage Docker builds, cutting pipeline time from 8 to 5 minutes and automating promotion across dev, staging, and prod",
      "Shrank the Next.js Docker image by up to 60% and cut S3 costs by up to 80% with proper bucket policy rules"
    ],
    techStack: [
      "NextJS",
      "ExpressJS",
      "Laravel",
      "Tailwind",
      "Stripe",
      "Docker",
      "AWS",
      "Atlassian Suite"
    ]
  },
  {
    id: "4",
    company: "Technowand",
    position: "Freelance Full Stack Web Developer",
    startYear: "2022",
    endYear: "2022",
    responsibilities: [
      "Built a fitness and personal-trainer website end to end with CodeIgniter",
      "Integrated Stripe to handle the site's transactions",
      "Delivered the project in Scrum sprints, tracked in Jira"
    ],
    techStack: [
      "CodeIgniter",
      "Stripe",
      "Bootstrap",
      "Jira"
    ]
  },
  {
    id: "5",
    company: "DPTSI - Institut Teknologi Sepuluh Nopember",
    position: "Intern Full Stack Web Developer",
    startYear: "2020",
    endYear: "2021",
    responsibilities: [
      "Built the proctoring system for the ITS entrance exam",
      "Redesigned the database and data management behind its reports, making report generation up to 60% faster",
      "Built a MOOC platform with Laravel and Bootstrap, designing its database and models to scale"
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
