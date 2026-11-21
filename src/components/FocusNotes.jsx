import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    title: 'Plan your day',
    text: 'Organise your priorities and focus on what matters most.',
  },
  {
    title: 'Protect deep work',
    text: 'Block 90 minutes with notifications off and finish one important task first.',
  },
  {
    title: 'Review and reset',
    text: 'Close the day by moving unfinished tasks forward and marking what you completed.',
  },
]

export default function FocusNotes() {
  const [index, setIndex] = useState(0)
  const count = SLIDES.length
  const slide = SLIDES[index]

  // Circular navigation
  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <section
      className={`notes notes--${index + 1}`}
      aria-roledescription="carousel"
      aria-label="Focus Notes"
      onKeyDown={onKeyDown}
    >
      <div className="notes__body" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${count}`}>
        <p className="notes__label">Focus Notes · {index + 1} of {count}</p>
        <div aria-live="polite">
          <h2 className="notes__title">{slide.title}</h2>
          <p className="notes__text">{slide.text}</p>
        </div>
      </div>

      <div className="notes__controls">
        <div className="notes__dots" role="group" aria-label="Choose slide">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
        <div className="notes__buttons">
          <button type="button" className="btn btn--light" onClick={prev} aria-label="Previous slide">
            <ChevronLeft size={18} aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button type="button" className="btn btn--light" onClick={next} aria-label="Next slide">
            <span>Next</span>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
