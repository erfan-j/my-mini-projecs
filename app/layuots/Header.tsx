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
    <section className="w-screen">
      <div className="flex py-4 justify-center overflow-x-auto">
        <div className="flex gap-x-7 justify-center">  
          {projects.map((projects, index) => {
            return (
              <span
                onClick={handleSelection}
                className={`cursor-pointer text-primary p-3 duration-300 hover:bg-gray-800 hover:font-bold rounded-lg`}
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
