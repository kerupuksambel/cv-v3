import { useState } from "react"
import { ISkill, ISkillGroup } from "@/types/portfolio"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const SIMPLE_ICONS_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons"

const skillGroups: ISkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Vue", icon: "devicon-vuejs-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
      { name: "Figma", icon: "devicon-figma-plain" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "ExpressJS", icon: "devicon-express-original" },
      { name: "Go", icon: "devicon-go-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "Laravel", icon: "devicon-laravel-original" },
      { name: "Stripe", icon: "simple:stripe" }
    ]
  },
  {
    name: "Data & Messaging",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MySQL", icon: "devicon-mysql-original" },
      { name: "Redis", icon: "devicon-redis-plain" },
      { name: "Firebase", icon: "devicon-firebase-plain" },
      { name: "Supabase", icon: "devicon-supabase-plain" },
      { name: "RabbitMQ", icon: "devicon-rabbitmq-original" }
    ]
  },
  {
    name: "Cloud & Infra",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "GCP", icon: "devicon-googlecloud-plain" },
      { name: "DigitalOcean", icon: "devicon-digitalocean-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "Terraform", icon: "devicon-terraform-plain" },
      { name: "NGINX", icon: "devicon-nginx-original" }
    ]
  },
  {
    name: "CI/CD & Observability",
    skills: [
      { name: "Bitbucket Pipelines", icon: "devicon-bitbucket-original" },
      { name: "Jenkins", icon: "devicon-jenkins-plain" },
      { name: "SonarQube", icon: "devicon-sonarqube-original" },
      { name: "Grafana", icon: "devicon-grafana-plain" },
      { name: "Prometheus", icon: "devicon-prometheus-original" },
      { name: "Jest", icon: "devicon-jest-plain" }
    ]
  },
  {
    name: "Mobile",
    skills: [
      { name: "Swift", icon: "devicon-swift-plain" },
      { name: "SwiftUI", icon: "devicon-apple-original" },
      { name: "Xcode", icon: "devicon-xcode-plain" }
    ]
  }
]

const ALL = "All"
const allSkills = skillGroups.flatMap((group) => group.skills)

function SkillIcon({ skill, className }: { skill: ISkill; className: string }) {
  if (skill.icon.startsWith("simple:")) {
    const url = `url(${SIMPLE_ICONS_CDN}/${skill.icon.slice("simple:".length)}.svg)`
    return (
      <span
        aria-hidden="true"
        className={cn("inline-block bg-current w-[1em] h-[1em]", className)}
        style={{ maskImage: url, WebkitMaskImage: url, maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat" }}
      />
    )
  }
  return <i aria-hidden="true" className={cn(skill.icon, className)} />
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(ALL)
  const isAll = activeTab === ALL
  const visibleSkills = isAll
    ? allSkills
    : skillGroups.find((group) => group.name === activeTab)?.skills ?? []

  const tabButton = (name: string) => (
    <button
      key={name}
      type="button"
      role="tab"
      aria-selected={activeTab === name}
      aria-controls="skills-panel"
      onClick={(e) => {
        setActiveTab(name)
        // Keeps the selected tab visible in the horizontally scrolling row on small screens
        e.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" })
      }}
      className={cn(
        "shrink-0 whitespace-nowrap px-4 py-2 text-left text-sm transition-colors",
        "border-b-2 md:border-b-0 md:border-l-2 md:-ml-px",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
        activeTab === name
          ? "border-red-600 font-semibold text-slate-900"
          : "border-transparent text-slate-500 hover:text-slate-900"
      )}
    >
      {name}
    </button>
  )

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid gap-8 md:grid-cols-[13rem_1fr]">
          <div
            role="tablist"
            aria-label="Skill groups"
            className="flex overflow-x-auto border-b border-slate-200 md:flex-col md:self-start md:overflow-visible md:border-b-0 md:border-l"
          >
            {tabButton(ALL)}
            <div aria-hidden="true" className="hidden md:block my-2 ml-4 border-t border-slate-200" />
            {skillGroups.map((group) => tabButton(group.name))}
          </div>

          <div
            id="skills-panel"
            role="tabpanel"
            aria-label={activeTab}
            className={cn(
              "grid content-start",
              isAll
                ? "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            )}
          >
            {visibleSkills.map((skill) => (
              <Card
                key={skill.name}
                className={cn(
                  "flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow",
                  isAll ? "p-3" : "p-6"
                )}
              >
                <SkillIcon
                  skill={skill}
                  className={cn("text-slate-700", isAll ? "text-2xl mb-2" : "text-4xl mb-3")}
                />
                <span className={cn("font-medium text-slate-900", isAll ? "text-xs" : "text-sm")}>
                  {skill.name}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
