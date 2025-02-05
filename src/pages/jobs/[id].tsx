import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for UI development
const JOB_DETAILS = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "Tech Corp",
  location: "Remote",
  type: "Full-time",
  salary: "$120k - $150k",
  description: `We're looking for an experienced Frontend Developer to join our team and help build amazing user experiences.

Key Responsibilities:
• Develop and maintain responsive web applications
• Collaborate with designers and backend developers
• Write clean, maintainable, and efficient code
• Participate in code reviews and technical discussions

Requirements:
• 5+ years of experience with React
• Strong TypeScript skills
• Experience with modern frontend tools and practices
• Excellent problem-solving abilities`,
  companyDescription: "Tech Corp is a leading software company focused on creating innovative solutions for businesses worldwide.",
  benefits: [
    "Competitive salary",
    "Health insurance",
    "Flexible working hours",
    "Remote work options",
    "Professional development budget"
  ]
}

export default function JobDetails() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => window.history.back()}
        >
          ← Back to Jobs
        </Button>

        <Card className="p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{JOB_DETAILS.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{JOB_DETAILS.company}</p>
              <div className="flex gap-2">
                <Badge variant="outline">{JOB_DETAILS.location}</Badge>
                <Badge variant="outline">{JOB_DETAILS.type}</Badge>
                <Badge variant="secondary">{JOB_DETAILS.salary}</Badge>
              </div>
            </div>
            <Button size="lg">
              Apply Now
            </Button>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <div className="whitespace-pre-line mb-8">
              {JOB_DETAILS.description}
            </div>

            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc pl-6 mb-8">
              {JOB_DETAILS.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-4">About {JOB_DETAILS.company}</h2>
            <p>{JOB_DETAILS.companyDescription}</p>
          </div>
        </Card>

        <Card className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Interested in this position?</h2>
          <Button size="lg">
            Apply Now
          </Button>
        </Card>
      </div>
    </div>
  )
}