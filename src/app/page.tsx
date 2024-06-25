"use client"

import { Carousel } from "@/components/Carousel";
import LinkAsButton from "@/components/LinkAsButton";
import siteData from "@/data/siteData";
import Image from "next/image"
import pride_1 from "public/images/photography/pride_1.png"
import pride_2 from "public/images/photography/pride_2.png"
import pride_3 from "public/images/photography/pride_3.png"

const heroCarouselSrcs = [pride_1, pride_2, pride_3]

export default function Home() {
  return (
    <div>
      <Carousel className="w-full" id='home-hero'>
        {heroCarouselSrcs.map((src, i) =>
          <Image
            key={i}
            src={src}
            alt="Pride Photography"
            width={500}
            className="w-full"
          />)}
      </Carousel>
      <div className="px-12">
        {siteData.homeHeroText.map((text, i) =>
          <div className="mb-4" key={i}>{text}</div>)
        }
        <LinkAsButton className="btn-secondary" href="/about">Learn More</LinkAsButton>
      </div>
    </div>
  );
}
