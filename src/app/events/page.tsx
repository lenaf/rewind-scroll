import Calendar from "@/components/Calendar"
import { genPageMetadata } from "../seo"

export const metadata = genPageMetadata({ title: 'Events' })

export default function Page() {
  return (
    <div className="p-12">
      <Calendar />
    </div>
  )
}
