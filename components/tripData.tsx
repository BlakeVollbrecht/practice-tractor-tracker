import { useState } from "react"
import { Map, Marker } from "pigeon-maps"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { format as formatDate } from "date-fns"

import { data as telemetryData } from "@/mockData/telemetry"

export default function TripData() {
  const [pointTime, setPointTime] = useState("")

  function formatTime(time: string) {
    return formatDate(new Date(time), "h:mm aaa")
  }

  if (!telemetryData) {
    return (
      <div className="flex justify-center py-24">
        <p>{"<No Data>"}</p>
      </div>
    )
  }

  return (
    <div>
      <Map height={400} defaultCenter={[43.51559, -80.60789]} defaultZoom={15}>
        {telemetryData.map((point) => (
          <Marker
            className="pl-2 pt-5"
            key={point.time}
            width={20}
            anchor={[point.lat, point.lng]}
            onMouseOver={() => setPointTime(point.time)}
          >
            <svg
              className="w-1.5 h-1.5"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#f00" />
            </svg>
          </Marker>
        ))}
      </Map>
      <ResponsiveContainer className="pt-4" height={200}>
        <LineChart data={telemetryData}>
          <Line
            type="linear"
            dataKey="rpm"
            stroke="#f20"
            onMouseOver={(x, ev) => console.log(ev.target)}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="time" tickFormatter={formatTime} />
          <YAxis label={{ value: "RPM", angle: -90, position: "insideLeft" }} />
          <Tooltip labelFormatter={formatTime} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
