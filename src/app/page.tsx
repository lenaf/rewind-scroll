import LinkAsButton from "@/components/LinkAsButton";
import siteData from "@/data/siteData";

export default function Home() {
  return (
    <div>
      {siteData.homeHeroText.map((text, i) =>
        <div className="mb-4" key={i}>{text}</div>)
      }
      <LinkAsButton className="btn-secondary" href="/about">Learn More</LinkAsButton>
    </div>
  );
}
