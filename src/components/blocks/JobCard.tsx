import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface JobCardProps {
  title: string
  company: string
  location: string
  type: string
  description: string
  salary?: string
  logo?: string
  onClick?: () => void
}

export function JobCard({ 
  title, 
  company, 
  location, 
  type, 
  description, 
  salary,
  logo,
  onClick 
}: JobCardProps) {
  return (
    <Card className="w-full overflow-hidden group">
      <motion.div 
        className="p-6"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex gap-4">
          {logo && (
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt={company} 
                className="w-12 h-12 rounded-lg shadow-md"
              />
            </div>
          )}
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-muted-foreground">{company}</p>
              </div>
              {salary && (
                <Badge variant="secondary" className="text-sm font-medium">
                  {salary}
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-background/50">
                  {location}
                </Badge>
                <Badge variant="outline" className="bg-background/50">
                  {type}
                </Badge>
              </div>
              
              <Button 
                variant="ghost" 
                onClick={onClick}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Details →
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Card>
  )
}