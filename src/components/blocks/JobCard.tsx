import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface JobCardProps {
  title: string
  company: string
  location: string
  type: string
  description: string
  salary?: string
  onClick?: () => void
}

export function JobCard({ 
  title, 
  company, 
  location, 
  type, 
  description, 
  salary,
  onClick 
}: JobCardProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
          {salary && (
            <Badge variant="secondary" className="text-sm">
              {salary}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Badge variant="outline">{location}</Badge>
          <Badge variant="outline">{type}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" onClick={onClick} className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}