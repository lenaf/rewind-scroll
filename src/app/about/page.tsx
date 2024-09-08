import { genPageMetadata } from "../seo"

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="p-24">
      About
    </div>
  )
}
