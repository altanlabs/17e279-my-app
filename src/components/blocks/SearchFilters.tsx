import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase } from "lucide-react"

interface SearchFiltersProps {
  onSearchChange: (value: string) => void
  onLocationChange: (value: string) => void
  onTypeChange: (value: string) => void
}

export function SearchFilters({ onSearchChange, onLocationChange, onTypeChange }: SearchFiltersProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="relative">
        <Search className="absolute left-3 top-9 h-4 w-4 text-muted-foreground" />
        <label htmlFor="search" className="text-sm font-medium">
          Search Jobs
        </label>
        <Input
          id="search"
          className="pl-9"
          placeholder="Job title or company..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
          <MapPin className="h-4 w-4" /> Location
        </label>
        <Select onValueChange={onLocationChange}>
          <SelectTrigger id="location">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">🌍 Remote</SelectItem>
            <SelectItem value="new-york">🗽 New York</SelectItem>
            <SelectItem value="san-francisco">🌉 San Francisco</SelectItem>
            <SelectItem value="london">🇬🇧 London</SelectItem>
            <SelectItem value="berlin">🇩🇪 Berlin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="type" className="text-sm font-medium flex items-center gap-2">
          <Briefcase className="h-4 w-4" /> Job Type
        </label>
        <Select onValueChange={onTypeChange}>
          <SelectTrigger id="type">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
            <SelectItem value="internship">Internship</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}