import { Award, Users, Star } from "lucide-react"
import RevealText from "./reveal-text"

export default function Achievements() {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "First Class Honours",
      description: "Graduated with First Class Honours from University of Westminster"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "AI Tool Impact",
      description: "Built an AI tool used by 20+ peers"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership Awards",
      description: "Leadership & teamwork awards at college"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student Leadership",
      description: "Held elected roles in Student Council and Union"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "FANS Representative",
      description: "Supporting new students as FANS Representative"
    }
  ]

  return (
    <section id="achievements" className="py-16 bg-background bg-opacity-50">
      <div className="container-custom">
        <RevealText>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="section-title mb-0">Achievements</h2>
            <p className="text-text-secondary mt-2 md:mt-0">Recognition and accomplishments</p>
          </div>
        </RevealText>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {achievements.map((achievement, index) => (
                     <RevealText key={index} delay={index * 150}>
                       <div className="achievement-card">
                         <div className="flex items-center mb-4">
                           <div className="text-primary mr-3">
                             {achievement.icon}
                           </div>
                           <h3 className="text-lg font-semibold text-primary">{achievement.title}</h3>
                         </div>
                         <p className="text-text-secondary">{achievement.description}</p>
                       </div>
                     </RevealText>
                   ))}
                 </div>
      </div>
    </section>
  )
} 