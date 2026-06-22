'use client'

import { useState } from 'react'

// ─── SafeThreeDImage ─────────────────────────────────────────────────────────

function SafeThreeDImage({
  baseName,
  ext,
  onClick,
}: {
  baseName: string
  ext: string
  onClick?: () => void
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex flex-col items-center justify-center w-full aspect-square bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-lg p-4 text-center cursor-pointer mb-6 break-inside-avoid">
        <span className="text-gray-400 text-sm font-medium">Image Not Found</span>
        <span className="text-gray-500 text-xs font-mono mt-1">/{baseName}.{ext}</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/${baseName}.${ext}`}
      alt={`Environment Image ${baseName}`}
      className="w-full h-auto block object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer shadow-md mb-6 break-inside-avoid"
      onClick={onClick}
      onError={() => setFailed(true)}
    />
  )
}

// ─── ThreeDGallery ────────────────────────────────────────────────────────────

type ImageEntry = { baseName: string; ext: string }

export default function ThreeDGallery() {
  const [activeFilter, setActiveFilter] = useState('Environment')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const environmentImages: ImageEntry[] = [
    ...Array.from({ length: 5 }, (_, i) => ({ baseName: `3D${i + 1}`, ext: 'jpeg' })),
    ...Array.from({ length: 25 }, (_, i) => ({ baseName: `3D${i + 6}`, ext: 'jpg' })),
  ]
  const characterImages: ImageEntry[] = []

  const displayImages: ImageEntry[] =
    activeFilter === 'Environment' ? environmentImages : characterImages

  return (
    <div className="w-full block">
      {/* Filter buttons */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setActiveFilter('Environment')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeFilter === 'Environment'
              ? 'bg-red-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:text-white'
          }`}
        >
          Environment
        </button>
        <button
          onClick={() => setActiveFilter('Characters')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeFilter === 'Characters'
              ? 'bg-red-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:text-white'
          }`}
        >
          Characters
        </button>
      </div>

      {/* Gallery or empty state */}
      <div className="flow-root w-full">
        {displayImages.length === 0 ? (
          <div className="flex items-center justify-center py-32 text-gray-400 text-xl font-medium border-2 border-dashed border-gray-800 rounded-2xl w-full mt-4">
            Character models coming soon.
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full mt-0 pt-0">
            {displayImages.map(({ baseName, ext }) => (
              <div
                key={baseName}
                className="break-inside-avoid mb-6 w-full inline-block rounded-lg overflow-hidden"
              >
                <SafeThreeDImage
                  baseName={baseName}
                  ext={ext}
                  onClick={() => setSelectedImage(`/${baseName}.${ext}`)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
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
              alt="3D model preview"
              className="max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
