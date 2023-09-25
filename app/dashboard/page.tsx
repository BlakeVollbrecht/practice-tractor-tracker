"use client"

import TripData from "@/components/tripData"
import { DashboardNav } from "@/components/dashboardNav"

export default function Tractors() {
  return (
    <div className="border-t max-w-screen-xl mx-auto ">
      <div className="bg-background">
        <div className="grid lg:grid-cols-5">
          <DashboardNav className="lg:block" />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6">
              <TripData />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
