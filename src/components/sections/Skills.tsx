import { ISkill } from "@/types/portfolio"
import { Card } from "@/components/ui/card"

const skills: ISkill[] = [{
  id: "1",
  name: "Swift",
  icon: "devicon-swift-plain"
},
{
  id: "2",
  name: "SwiftUI",
  icon: "devicon-swift-plain" // SwiftUI has no separate devicon; Swift is the closest
},
{
  id: "3",
  name: "UIKit",
  icon: "devicon-apple-original" // UIKit has no devicon; Apple is the closest valid icon
},
{
  id: "4",
  name: "CoreML",
  icon: "devicon-apple-original" // No CoreML icon; Apple is valid
},
{
  id: "5",
  name: "Jira",
  icon: "devicon-jira-plain"
},
{
  id: "7",
  name: "MS Teams",
  icon: "devicon-microsoft-plain"
},
{
  id: "8",
  name: "PHP",
  icon: "devicon-php-plain"
},
{
  id: "9",
  name: "Laravel",
  icon: "devicon-laravel-plain"
},
{
  id: "10",
  name: "ExpressJS",
  icon: "devicon-express-original"
},
{
  id: "11",
  name: "Golang",
  icon: "devicon-go-plain"
},
{
  id: "12",
  name: "MySQL",
  icon: "devicon-mysql-plain"
},
{
  id: "13",
  name: "PostgreSQL",
  icon: "devicon-postgresql-plain"
},
{
  id: "14",
  name: "MongoDB",
  icon: "devicon-mongodb-plain"
},
{
  id: "15",
  name: "NGINX",
  icon: "devicon-nginx-original"
},
{
  id: "16",
  name: "Docker",
  icon: "devicon-docker-plain"
},
{
  id: "17",
  name: "AWS",
  icon: "devicon-amazonwebservices-original"
},
{
  id: "18",
  name: "GCP",
  icon: "devicon-googlecloud-plain"
},
{
  id: "19",
  name: "Stripe",
  icon: "devicon-stripe-plain"
},
{
  id: "20",
  name: "Firebase",
  icon: "devicon-firebase-plain"
},
{
  id: "21",
  name: "Supabase",
  icon: "devicon-supabase-plain"
},
{
  id: "22",
  name: "Google Maps",
  icon: "devicon-google-plain" // No Maps icon; Google is valid
}]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <Card key={skill.id} className="p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
              <i className={`${skill.icon} text-4xl text-slate-700 mb-3`} />
              <span className="text-sm font-medium text-slate-900">{skill.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
