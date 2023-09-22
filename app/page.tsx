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

import data from "./mock.json"

export default function Home() {
  const [current, setCurrent] = useState("")

  function formatTime(time: string) {
    return formatDate(new Date(time), "h:mm aaa")
  }

  return (
    <main className="flex min-h-screen flex-col p-16">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Tractor Tracker v0
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/blakevollbrecht"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Blake
          </a>
        </div>
      </div>

      <div className="pt-16">
        <Map
          height={500}
          defaultCenter={[43.51559, -80.60789]}
          defaultZoom={15}
        >
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
            <Line type="linear" dataKey="rpm" stroke="#f20" onMouseOver={(x,ev) => console.log(ev.target)} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" tickFormatter={formatTime} />
            <YAxis
              label={{ value: "RPM", angle: -90, position: "insideLeft" }}
            />
            <Tooltip labelFormatter={formatTime} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}
