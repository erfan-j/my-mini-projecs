"use client";

import TypeWriter from "@/app/components/shared/typeWriter";
import React, { useEffect, useState } from 'react';

const intoTexts = [
  {
    id: 0,
    text: "Hello, welcome to `my mini projects` website.",
  },
  {
    id: 1,
    text:
      "Im a junior frontend developer; you cen see all my mini projects here as a website",
  },
  {
    id: 2,
    text:
      "I created this website using nextjs framework; im currently learning it and this website is the start of my nextjs projects.",
  },
];

export default function Intro() {
  const [showTypeWriter, setShowTypeWriter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTypeWriter(true);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-4xl py-10 font-bold hover:text-primary hover:font-extrabold duration-300">
        <TypeWriter text="Erfan Jahandoost" delay={100} />
      </h1>
      <div className="text-lg flex flex-col gap-y-3">
        {intoTexts.map((text: any) => {
          return <p key={text.id}>{text.text}</p>;
        })}
      </div>
      <div className="text-primary py-8 text-xl font-bold">
       {showTypeWriter && <TypeWriter text="Hope you enjoy it!" delay={100} />}
      </div>
    </div>
  );
}
