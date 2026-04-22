"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface FranchiseCardProps {
  title: string;
  text: string;
  img: string;
  button?: string;
}

function FranchiseCard({ title, text, img, button }: FranchiseCardProps) {
  return (
    <div className="franchise-card sticky top-20 h-[55vh] flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl h-[50vh]">
        {/* Left Content */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-[#1c2980] mb-4">{title}</h3>
          <p className="text-lg text-gray-600 mb-6">{text}</p>
          {button && (
            <button className="px-6 py-3 bg-[#b9cf36] text-[#1c2980] font-semibold rounded-md hover:bg-lime-600 transition">
              {button}
            </button>
          )}
        </div>

        {/* Right Image */}
        <div className="flex-1 relative min-h-[250px] md:min-h-[350px]">
          <Image src={img} alt={title} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function FranchiseCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(".franchise-card");
    cards.forEach((card, i) => {
      card.style.setProperty("--index", `${i + 1}`);
    });
    container.style.setProperty("--numcards", `${cards.length}`);
  }, []);

  const cards = [
    {
      title: "Ontario’s Trusted Partner",
      text: "MrLandlord.ca is your trusted property management partner across Ontario, dedicated to landlords and renters alike.",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      button: "Learn More",
    },
    {
      title: "Seamless & Supportive",
      text: "We bring property owners and renters a seamless, secure, and supportive real estate experience that builds confidence.",
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
      button: "Our Services",
    },
    {
      title: "Expert Management",
      text: "Our knowledgeable team manages properties efficiently, from single homes to full portfolios, with care and professionalism.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      button: "Meet the Team",
    },
    {
      title: "Stress-Free Ownership",
      text: "Our mission is simple , to make property ownership rewarding, stress-free, and straightforward for every client.",
      img: "https://images.unsplash.com/photo-1560185008-5b90f66df2a9?auto=format&fit=crop&w=800&q=80",
      button: "Get Started",
    },
  ];

  return (
    <section ref={containerRef} id="cards" className="relative bg-gray-50 py-20">
      {cards.map((card, i) => (
        <FranchiseCard key={i} {...card} />
      ))}

      <style jsx>{`
        #cards {
          --numcards: 1;
        }
        .franchise-card {
          --index: 1;
          --index0: calc(var(--index) - 1);
          --reverse-index: calc(var(--numcards) - var(--index0));
          --reverse-index0: calc(var(--reverse-index) - 1);
        }

        @keyframes scale {
          to {
            transform: scale(calc(1.05 - (0.05 * var(--reverse-index0))));
          }
        }

        .franchise-card > div {
          animation: linear scale forwards;
          animation-timeline: view();
          animation-range: exit-crossing
              calc(var(--index0) / var(--numcards) * 100%)
            exit-crossing calc(var(--index) / var(--numcards) * 100%);
        }
      `}</style>
    </section>
  );
}
