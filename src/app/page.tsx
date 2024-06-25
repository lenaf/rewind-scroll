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
    <div className="flex flex-col items-center">

      <section id='home-hero' className="relative w-full animate-fade">
        <Carousel id='home-hero-carousel'>
          {heroCarouselSrcs.map((src, i) =>
            <Image
              key={i}
              src={src}
              alt="Pride Photography"
              width={500}
              className="w-full"
            />)}
        </Carousel>
        <div className="prose backdrop-blur-sm absolute left-24 top-1/2 -translate-y-1/2 transform">
          <h1 className="text-base-100 text-xl sm:text-5xl ">We are GLYS</h1>
          <h6 className="text-base-100 text-sm sm:text-xl">Growing LGBTQ+ youth support</h6>
        </div>
      </section>

      <section className="px-12 py-6 prose">
        {siteData.homeHeroText.map((text, i) =>
          <p className="mb-4 mx-auto" key={i}>{text}</p>
        )
        }
        <LinkAsButton className="btn-secondary" href="/about">Learn More</LinkAsButton>
      </section>
    </div>
  );
}
