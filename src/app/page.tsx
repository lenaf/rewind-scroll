"use client"

import PageScroller from "@/components/PageScroller";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import { ProgressIndicatorProvider } from "src/context/ProgressIndicatorContext";

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Home() {
  return (
    <ProgressIndicatorProvider>
      <div style={{ height: '100vh', position: 'relative' }}>
        <PageScroller>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            return (<div style={{ background: getRandomColor(), padding: '400px 100px', height: '100vh', width: '1000%', display: 'flex', fontSize: '64px' }} key={i} >
              <h1>Page {i + 1}</h1>
            </div>);
          })}

        </PageScroller>
        <ProgressIndicator totalScreenCount={6} />
      </div>
    </ProgressIndicatorProvider>
  );
}
