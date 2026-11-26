import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ExternalLink, Play, X } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { company } from '../data/siteData'
import '../styles/VideoSection.css'

export default function VideoSection() {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [open])

  return (
    <section
      className="section video"
      id="video"
      aria-labelledby="video-title"
    >
      <div className="container">
        <Reveal className="video__card">
          <div className="video__copy">
            <SectionHeading
              id="video-title"
              eyebrow="Product Video"
              title="A closer look at our frozen French fries."
              description="See the product presentation through the video shared by Shakti Global Exim on Google Drive."
              light
            />

            <div className="video__meta">
              <span>Hosted on Google Drive</span>
              <span>Opens in a preview window</span>
            </div>

            <div className="video__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => setOpen(true)}
                ref={triggerRef}
              >
                <Play size={15} fill="currentColor" aria-hidden="true" />
                Play Video
              </button>
              <a
                href={company.videoDriveUrl}
                className="btn btn--light-outline"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Drive
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>

            <p className="video__note">
              The video is hosted externally. If Google Drive shows a
              permission message, please request access or contact us directly.
            </p>
          </div>

          <button
            type="button"
            className="video__poster"
            onClick={() => setOpen(true)}
            aria-label="Play the Shakti Global Exim product video"
          >
            <img
              src="/images/video-poster.jpg"
              alt="Representative image of frozen French fries ready for serving"
              width="1600"
              height="1068"
              loading="lazy"
              decoding="async"
            />
            <span className="image-credit">Representative image</span>
            <span className="video__play" aria-hidden="true">
              <Play size={25} fill="currentColor" />
            </span>
            <span className="video__poster-caption">
              <small>Watch</small>
              Product video
            </span>
          </button>
        </Reveal>
      </div>

      {open && (
        <div
          className="video-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <div
            className="video-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <div className="video-modal__header">
              <div>
                <p className="video-modal__eyebrow">Shakti Global Exim</p>
                <h2 id="video-modal-title">Product video</h2>
              </div>
              <button
                type="button"
                className="video-modal__close"
                onClick={() => setOpen(false)}
                ref={closeButtonRef}
                aria-label="Close video"
              >
                <X size={21} aria-hidden="true" />
              </button>
            </div>

            <div className="video-modal__frame">
              <iframe
                src={company.videoEmbedUrl}
                title="Shakti Global Exim product video on Google Drive"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>

            <div className="video-modal__footer">
              <p>
                Video hosted on Google Drive. Access may require permission from
                the owner.
              </p>
              <a
                href={company.videoDriveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Open in Google Drive
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
