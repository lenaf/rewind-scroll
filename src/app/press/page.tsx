import { genPageMetadata } from "../seo"

export const metadata = genPageMetadata({ title: 'Press' })

export default function Page() {
  return (
    <div className="p-24">
      Press
    </div>
  )
}
