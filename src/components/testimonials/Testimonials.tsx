"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { ASSETS } from "@/config/assets";

const testimonials = [
  {
    name: "Dr. Sarah Foster",
    specialty: "Primary Care Physician, MD",
    location: "Seattle, WA",
    photo: ASSETS.testimonials.doctor1,
    quote:
      "I was up till 10 pm two weeks ago writing notes instead of spending time with my kids. This week with VoiceDx I'm baking cookies with them.",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Family Medicine, MD",
    location: "Boston, MA",
    photo: ASSETS.testimonials.doctor2,
    quote:
      "I have more time to spend doing other things I enjoy—getting home early, rather than staying late at the office trying to finish my charts.",
    rating: 5,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Kristy Patterson",
    specialty: "Psychiatric Mental Health, NP",
    location: "Austin, TX",
    quote:
      "VoiceDx has been such a wonderful addition to my practice and being able to have all of the extra time to devote to the things that are important to me.",
    rating: 5,
    photo: ASSETS.testimonials.doctor3,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Erica Davis",
    specialty: "ARNP",
    location: "Miami, FL",
    quote:
      "I leave work on time and have my weekends again. VoiceDx brings me back to why I wanted to get into healthcare.",
    rating: 5,
    photo: ASSETS.testimonials.doctor4,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Dr. James Rodriguez",
    specialty: "Emergency Medicine, MD",
    location: "Los Angeles, CA",
    quote:
      "The efficiency gains are incredible. I can focus on patient care instead of drowning in documentation. Game changer for emergency medicine.",
    rating: 5,
    photo: ASSETS.testimonials.doctor1,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Dr. Amanda Lee",
    specialty: "Pediatrics, MD",
    location: "Portland, OR",
    quote:
      "My patients and their families get my full attention now. VoiceDx handles the paperwork so I can be the doctor I always wanted to be.",
    rating: 5,
    photo: ASSETS.testimonials.doctor2,
    color: "from-rose-500 to-pink-600",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-cyan-950 to-slate-950 py-32"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] animate-pulse rounded-full bg-teal-600 blur-[150px] filter"></div>
        <div
          className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-600 blur-[130px] filter"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] animate-pulse rounded-full bg-emerald-600 blur-[120px] filter"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <span className="rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 text-sm font-semibold text-purple-300 backdrop-blur-sm">
              Client Stories
            </span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Trusted by more than{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              17,000 healthcare providers
            </span>
          </h2>
          <p className="text-xl text-gray-300 md:text-2xl">
            (plus the people who matter most to them)
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Main Carousel */}
          <div className="relative flex h-[500px] items-center justify-center md:h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div
                  className={`relative mx-4 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-2xl md:p-12`}
                >
                  {/* Gradient glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].color} -z-10 rounded-3xl opacity-20 blur-2xl`}
                  ></div>

                  {/* Stars */}
                  <div className="mb-6 flex justify-center gap-1 md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      >
                        <FiStar className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8 text-center text-xl font-medium leading-relaxed text-white md:text-left md:text-2xl lg:text-3xl">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-4 md:flex-row">
                    <div
                      className={`relative h-20 w-20 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center shadow-2xl`}
                    >
                      <span className="text-3xl font-bold text-white">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-2xl opacity-50 blur-xl`}
                      ></div>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="mb-1 text-xl font-bold text-white">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-300">
                        {testimonials[currentIndex].specialty}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 bg-gradient-to-r from-purple-500 to-pink-500"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                20K+
              </div>
              <div className="text-sm text-gray-300">Clinicians</div>
            </div>
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                99.8%
              </div>
              <div className="text-sm text-gray-300">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                2hrs+
              </div>
              <div className="text-sm text-gray-300">Saved Daily</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
