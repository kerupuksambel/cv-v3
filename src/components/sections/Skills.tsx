import { ISkill } from "@/types/portfolio"
import { Card } from "@/components/ui/card"

const skills: ISkill[] = [
  {
    id: "1",
    name: "PHP",
    icon: "devicon-php-plain"
  },
  {
    id: "2",
    name: "Laravel",
    icon: "devicon-laravel-plain"
  },
  {
    id: "3",
    name: "JavaScript",
    icon: "devicon-javascript-plain"
  },
  {
    id: "4",
    name: "TypeScript",
    icon: "devicon-typescript-plain"
  },
  {
    id: "5",
    name: "ExpressJS",
    icon: "devicon-express-original"
  },
  {
    id: "6",
    name: "ReactJS",
    icon: "devicon-react-original"
  }
]

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
