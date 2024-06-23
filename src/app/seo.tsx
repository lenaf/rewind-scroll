import { Metadata } from 'next'
import siteData from '@/data/index'

export function genPageMetadata({ title, description, ...rest }: Metadata): Metadata {
  return {
    title: `${title} | ${siteData.title}`,
    description: description || siteData.description,
  }
}
