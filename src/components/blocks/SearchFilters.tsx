import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchFiltersProps {
  onSearchChange: (value: string) => void
  onLocationChange: (value: string) => void
  onTypeChange: (value: string) => void
}

export function SearchFilters({ onSearchChange, onLocationChange, onTypeChange }: SearchFiltersProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="search" className="text-sm font-medium">
          Search Jobs
        </label>
        <Input
          id="search"
          placeholder="Search by title or company..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className="text-sm font-medium">
          Location
        </label>
        <Select onValueChange={onLocationChange}>
          <SelectTrigger id="location">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="san-francisco">San Francisco</SelectItem>
            <SelectItem value="london">London</SelectItem>
            <SelectItem value="berlin">Berlin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="text-sm font-medium">
          Job Type
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