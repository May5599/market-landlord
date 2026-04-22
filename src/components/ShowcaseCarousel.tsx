"use client";

import Image from "next/image";
import {
  useKeenSlider,
  KeenSliderPlugin,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { Building2, TrendingUp, Users } from "lucide-react";

// ✅ Autoplay plugin
const Autoplay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 4500);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

export default function ShowcaseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      slides: { perView: 1, spacing: 15 },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [Autoplay]
  );

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1920&q=80",
      title: "Franchise Support That Sets You Apart",
      text: "From tenant screening to legal compliance, MrLandlord provides a proven framework that simplifies property management while protecting your investment.",
      icon: <Building2 className="w-10 h-10 text-[#b9cf36]" />,
    },
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
      title: "High-Growth Market Opportunity",
      text: "Ontario’s rental demand continues to grow. Joining MrLandlord gives you the systems and brand recognition to thrive in this expanding market.",
      icon: <TrendingUp className="w-10 h-10 text-[#b9cf36]" />,
    },
    {
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80",
      title: "Dedicated Training and Ongoing Support",
      text: "Our team ensures you are never alone. With training, marketing tools, and round-the-clock support, your success is our mission.",
      icon: <Users className="w-10 h-10 text-[#b9cf36]" />,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a2e73] text-center mb-12">
          Why Choose MrLandlord Franchise
        </h2>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="keen-slider__slide relative h-[300px] sm:h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 text-white">
                <div className="mb-4">{slide.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                <p className="text-sm md:text-base">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === idx
                  ? "bg-[#b9cf36] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
