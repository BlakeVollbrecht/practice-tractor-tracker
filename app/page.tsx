import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="flex justify-center space-x-4 pt-16 pb-32 px-4">
        <Link href="/dashboard">
          <Card className="hover:bg-slate-300/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 space-x-4 pb-2">
              <CardTitle className="text-sm font-medium">Dashboard</CardTitle>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                stroke="currentColor"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            </CardHeader>
            <CardContent className="flex justify-center pt-2 pb-6">
              <svg
                className="h-10 w-10"
                fill="currentColor"
                stroke="currentColor"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M19.5 12c.93 0 1.78.28 2.5.76V8c0-1.1-.9-2-2-2h-6.29l-1.06-1.06 1.41-1.41-.71-.71-3.53 3.53.71.71 1.41-1.41L13 6.71V9c0 1.1-.9 2-2 2h-.54c.95 1.06 1.54 2.46 1.54 4 0 .34-.04.67-.09 1h3.14c.25-2.25 2.14-4 4.45-4z"></path>
                <path d="M19.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM4 9h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1s.45 1 1 1zm5.83 4.82-.18-.47.93-.35c-.46-1.06-1.28-1.91-2.31-2.43l-.4.89-.46-.21.4-.9C7.26 10.13 6.64 10 6 10c-.53 0-1.04.11-1.52.26l.34.91-.47.18-.35-.93c-1.06.46-1.91 1.28-2.43 2.31l.89.4-.21.46-.9-.4C1.13 13.74 1 14.36 1 15c0 .53.11 1.04.26 1.52l.91-.34.18.47-.93.35c.46 1.06 1.28 1.91 2.31 2.43l.4-.89.46.21-.4.9c.55.22 1.17.35 1.81.35.53 0 1.04-.11 1.52-.26l-.34-.91.47-.18.35.93c1.06-.46 1.91-1.28 2.43-2.31l-.89-.4.21-.46.9.4c.22-.55.35-1.17.35-1.81 0-.53-.11-1.04-.26-1.52l-.91.34zm-2.68 3.95c-1.53.63-3.29-.09-3.92-1.62-.63-1.53.09-3.29 1.62-3.92 1.53-.63 3.29.09 3.92 1.62.64 1.53-.09 3.29-1.62 3.92z"></path>
              </svg>
            </CardContent>
          </Card>
        </Link>
        <Link href="/settings">
          <Card className="hover:bg-slate-300/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 space-x-4 pb-2">
              <CardTitle className="text-sm font-medium">Settings</CardTitle>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                stroke="currentColor"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            </CardHeader>
            <CardContent className="flex justify-center pt-2 pb-6">
              <svg
                className="h-10 w-10"
                fill="currentColor"
                stroke="currentColor"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
              </svg>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  )
}
