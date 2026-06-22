'use client'

import { useState } from 'react'

const GALLERY_BASES = Array.from({ length: 10 }, (_, i) => `/UI${i + 1}`)

// ─── Per-image component with its own load state ──────────────────────────────

type Phase = 'png' | 'PNG' | 'failed'

type GalleryImageProps = {
  basePath: string
  onOpen: (src: string) => void
}

function GalleryImage({ basePath, onOpen }: GalleryImageProps) {
  const [phase, setPhase] = useState<Phase>('png')

  if (phase === 'failed') {
    return (
      <div className="w-full h-32 flex items-center justify-center bg-[#1e293b] text-gray-500 text-sm rounded-lg border border-gray-700">
        Image Not Found
      </div>
    )
  }

  const src = `${basePath}.${phase}`

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className="w-full h-auto block object-cover hover:opacity-80 transition-opacity cursor-pointer"
      onError={() => {
        if (phase === 'png') setPhase('PNG')
        else setPhase('failed')
      }}
      onClick={() => onOpen(src)}
    />
  )
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

export default function UIUXGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 w-full pt-4">
        {GALLERY_BASES.map((basePath) => (
          <div
            key={basePath}
            className="break-inside-avoid mb-4 lg:mb-6 rounded-lg overflow-hidden block w-full"
          >
            <GalleryImage basePath={basePath} onOpen={setSelectedImage} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl font-bold transition-colors duration-200"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            &#x2715;
          </button>

          <div
            className="flex items-center justify-center max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt=""
              className="max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
