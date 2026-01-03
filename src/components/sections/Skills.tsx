import { ISkill } from "@/types/portfolio"
import { Card } from "@/components/ui/card"

// interface SkillsProps {
//   name: string;
//   skills: ISkill[];
// }

const skills: ISkill[] = [{
  name: "Swift",
  icon: "devicon-swift-plain",
  desc: "The primary language of iOS development."
},
{
  name: "SwiftUI",
  icon: "devicon-swift-plain", // SwiftUI has no separate devicon; Swift is the closest
  desc: "The primary framework for iOS UI, powered by Swift."
},
{
  name: "UIKit",
  icon: "devicon-apple-original" // UIKit has no devicon; Apple is the closest valid icon
},
{
  name: "CoreML",
  icon: "devicon-apple-original" // No CoreML icon; Apple is valid
},
{
  name: "Jira",
  icon: "devicon-jira-plain"
},
{
  name: "MS Teams",
  icon: "devicon-microsoft-plain"
},
{
  name: "PHP",
  icon: "devicon-php-plain"
},
{
  name: "Laravel",
  icon: "devicon-laravel-plain"
},
{
  name: "ExpressJS",
  icon: "devicon-express-original"
},
{
  name: "Golang",
  icon: "devicon-go-plain"
},
{
  name: "MySQL",
  icon: "devicon-mysql-plain"
},
{
  name: "PostgreSQL",
  icon: "devicon-postgresql-plain"
},
{
  name: "MongoDB",
  icon: "devicon-mongodb-plain"
},
{
  name: "NGINX",
  icon: "devicon-nginx-original"
},
{
  name: "Docker",
  icon: "devicon-docker-plain"
},
{
  name: "AWS",
  icon: "devicon-amazonwebservices-original"
},
{
  name: "GCP",
  icon: "devicon-googlecloud-plain"
},
{
  name: "Stripe",
  icon: "devicon-stripe-plain"
},
{
  name: "Firebase",
  icon: "devicon-firebase-plain"
},
{
  name: "Supabase",
  icon: "devicon-supabase-plain"
},
{
  name: "Google Maps",
  icon: "devicon-google-plain" // No Maps icon; Google is valid
}]

// const groupedSkills: SkillsProps[] = [
//   {
//     name: "iOS Development",
//     skills: skills.filter((skill) => ['Swift', 'SwiftUI', 'UIKit', 'CoreML'].includes(skill.name))
//   }
// ]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, sIdx) => (
            <Card key={sIdx} className="p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
              <i className={`${skill.icon} text-4xl text-slate-700 mb-3`} />
              <span className="text-sm font-medium text-slate-900">{skill.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
