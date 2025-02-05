import { useState } from "react"
import { JobCard } from "@/components/blocks/JobCard"
import { SearchFilters } from "@/components/blocks/SearchFilters"
import { motion } from "framer-motion"

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We're looking for an experienced Frontend Developer to join our team and help build amazing user experiences.",
    logo: "https://ui-avatars.com/api/?name=TC&background=6366f1&color=fff"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio",
    location: "New York",
    type: "Full-time",
    salary: "$90k - $120k",
    description: "Join our creative team as a Product Designer and help shape the future of our digital products.",
    logo: "https://ui-avatars.com/api/?name=DS&background=ec4899&color=fff"
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "StartupX",
    location: "San Francisco",
    type: "Contract",
    salary: "$130k - $160k",
    description: "Looking for a skilled Backend Engineer to help scale our infrastructure and implement new features.",
    logo: "https://ui-avatars.com/api/?name=SX&background=14b8a6&color=fff"
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedType, setSelectedType] = useState("")

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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Find Your Dream Job
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover opportunities that match your skills and aspirations
            </motion.p>
          </div>
          
          <motion.div 
            className="mb-12 backdrop-blur-sm bg-background/50 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchFilters
              onSearchChange={setSearchTerm}
              onLocationChange={setSelectedLocation}
              onTypeChange={setSelectedType}
            />
          </motion.div>

          <motion.div 
            className="grid gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <JobCard
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  type={job.type}
                  salary={job.salary}
                  description={job.description}
                  logo={job.logo}
                  onClick={() => {
                    window.location.href = `/jobs/${job.id}`
                  }}
                />
              </motion.div>
            ))}
            
            {filteredJobs.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-lg font-medium">No jobs found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search filters
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}