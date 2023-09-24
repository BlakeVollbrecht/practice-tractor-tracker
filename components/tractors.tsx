"use client"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import TripData from "./tripData"

import { tractors } from "@/mockData/tractors"

export default function Tractors() {
  const [tractorId, setTractorId] = useState<string>()

  return (
    <div>
      <div className="py-4">
        <Select value={tractorId} onValueChange={value => setTractorId(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a tractor" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tractors</SelectLabel>
              {tractors.map((tractor) => (
                <SelectItem
                  key={tractor.id}
                  value={tractor.id}
                >{`${tractor.make} ${tractor.model}`}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <TripData tractorId={tractorId} />
    </div>
  )
}
