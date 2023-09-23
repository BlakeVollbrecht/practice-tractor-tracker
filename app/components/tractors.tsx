"use client"

import { useState } from "react"

import TripData from "./tripData"

import { data } from "@/mockData/telemetry"

export default function Tractors() {
  const [tractorId, setTractorId] = useState()

  return (
    <div>
      <TripData data={data} />
    </div>
  )
}
