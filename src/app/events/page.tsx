import Calendar from "@/components/Calendar"
import { genPageMetadata } from "../seo"

export const metadata = genPageMetadata({ title: 'Events' })

export default function Page() {
  return (
    <div>
      <div className="prose max-w-sm mb-4">
        <h1>Events Calendar</h1>
      </div>
      <Calendar />
    </div>
  )
}
