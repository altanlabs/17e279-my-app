import { useState } from "react"
import { JobCard } from "@/components/blocks/JobCard"
import { SearchFilters } from "@/components/blocks/SearchFilters"

// Mock data for initial UI development
const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We're looking for an experienced Frontend Developer to join our team and help build amazing user experiences.",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio",
    location: "New York",
    type: "Full-time",
    salary: "$90k - $120k",
    description: "Join our creative team as a Product Designer and help shape the future of our digital products.",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "StartupX",
    location: "San Francisco",
    type: "Contract",
    salary: "$130k - $160k",
    description: "Looking for a skilled Backend Engineer to help scale our infrastructure and implement new features.",
  },
]

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedType, setSelectedType] = useState("")

  // Filter jobs based on search criteria
  const filteredJobs = MOCK_JOBS.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesLocation = 
      !selectedLocation || 
      job.location.toLowerCase() === selectedLocation.toLowerCase()
    
    const matchesType = 
      !selectedType || 
      job.type.toLowerCase() === selectedType.toLowerCase()

    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Find Your Next Job</h1>
        
        <div className="mb-8">
          <SearchFilters
            onSearchChange={setSearchTerm}
            onLocationChange={setSelectedLocation}
            onTypeChange={setSelectedType}
          />
        </div>

        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              salary={job.salary}
              description={job.description}
              onClick={() => {
                // Will be implemented with routing later
                console.log("View job:", job.id)
              }}
            />
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No jobs found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}