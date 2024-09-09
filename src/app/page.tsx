"use client"

import LinkAsButton from "@/components/common/LinkAsButton";
import Image from "next/image"
import heroDesktop from "public/images/photography/heroDesktop.jpg"
import heroMobile from "public/images/photography/heroMobile.jpg"

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen	">

      <section id='home-hero' className="relative h-5/6 w-full animate-fade">
        <Image
          src={heroDesktop}
          alt="hero"
          fill
          className="desktop object-cover object-top"
        />
        <Image
          src={heroMobile}
          alt="hero"
          fill
          className="mobile object-cover object-top"
        />
        {/* <div className="prose absolute left-16 sm:left-24 top-1/2 -translate-y-1/2 transform">
          <LinkAsButton href="/about">Learn More</LinkAsButton>
        </div> */}
      </section>
    </div>
  );
}
