import { Carousel } from "@/components/Carousel";
import LinkAsButton from "@/components/LinkAsButton";
import siteData from "@/data/siteData";
import Image from "next/image"
import pride_1 from "public/images/photography/pride_1.png"

export default function Home() {
  return (
    <div>
      <Carousel className="w-full" id='home-hero'>
        <Image
          src={pride_1}
          alt="GLYS Logo"
          width={500}
          height={500}
          className="w-full"
        />
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
