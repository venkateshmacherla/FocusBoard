import { useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
} from "lucide-react";

// Slide content copied from the Figma frames (15:2, 15:30, 15:58).
const SLIDES = [
  {
    title: "Make today count.",
    text: "A little focus goes a long way.",
    peek: {
      label: "NEXT UP",
      task: "Design landing page",
      percent: 60,
      icon: CheckCircle2,
      tone: "done",
    },
  },
  {
    title: "Small steps, big progress.",
    text: "Keep your priorities in view.",
    peek: {
      label: "IN PROGRESS",
      task: "Fix navigation",
      percent: 67,
      icon: LoaderCircle,
      tone: "progress",
    },
  },
  {
    title: "Celebrate the wins.",
    text: "Every completed task moves you forward.",
    peek: {
      label: "COMPLETED",
      task: "Onboarding copy",
      percent: 100,
      icon: CheckCircle2,
      tone: "done",
    },
  },
];

const pad = (n) => String(n).padStart(2, "0");

export default function FocusNotes() {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;
  const slide = SLIDES[index];
  const PeekIcon = slide.peek.icon;

  // Circular navigation
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  function onKeyDown(e) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Focus Notes"
      onKeyDown={onKeyDown}
    >
      <div
        className="hero__main"
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${count}`}
      >
        <p className="hero__label">
          <span>FOCUS NOTES</span>
          <span>
            {pad(index + 1)} / {pad(count)}
          </span>
        </p>

        <div aria-live="polite">
          <h2 className="hero__title">{slide.title}</h2>
          <p className="hero__text">{slide.text}</p>
        </div>

        <div className="hero__dashes" role="group" aria-label="Choose slide">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`dash ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <div className="hero__aside">
        <div className="peek" aria-hidden="true">
          <div className="peek__card">
            <span className={`peek__icon peek__icon--${slide.peek.tone}`}>
              <PeekIcon size={16} />
            </span>
            <div className="peek__body">
              <p className="peek__label">{slide.peek.label}</p>
              <p className="peek__task">{slide.peek.task}</p>
            </div>
            <div className="peek__progress">
              <span className="peek__bar">
                <span style={{ width: `${slide.peek.percent}%` }} />
              </span>
              <span className="peek__percent">{slide.peek.percent}%</span>
            </div>
          </div>
        </div>

        <div className="hero__arrows">
          <button
            type="button"
            className="hero__btn"
            onClick={prev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hero__btn hero__btn--next"
            onClick={next}
            aria-label="Next slide"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
