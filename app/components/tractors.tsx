"use client"

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

import data from "../mock.json"

export default function Tractors() {
  const [current, setCurrent] = useState("")

  function formatTime(time: string) {
    return formatDate(new Date(time), "h:mm aaa")
  }

  return (
    <div>
      <Map height={500} defaultCenter={[43.51559, -80.60789]} defaultZoom={15}>
        {data.map((point) => (
          <Marker
            className="pl-3"
            key={point.time}
            width={20}
            anchor={[point.lat, point.lng]}
            onMouseOver={() => setCurrent(point.time)}
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
        <LineChart data={data}>
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
