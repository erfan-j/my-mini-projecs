'use client';

import { useState } from "react";

const projects = [
  { name: "Calculator" },
  { name: "Calculator2" },
  { name: "Calculator3" },
  { name: "Calculator4" },
];

export default function Header() {
  const [selected, setSelected] = useState(false);
  const handleSelection = () => {
    setSelected(true);
    if(selected){console.log('selecteed is true')}
  };

  return (
    <section className=" border-primary border-t ">
      <div className="flex py-4 px-8 items-center justify-center">
        <div className="flex gap-x-5">
          {projects.map((projects, index) => {
            return (
              <span
                onClick={handleSelection}
                className={`text-primary duration-300 hover:bg-gray-800 hover:font-bold rounded-lg p-3`}
                key={index}
              >
                {projects.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
