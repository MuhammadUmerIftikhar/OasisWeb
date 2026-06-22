'use client'

type Props = {
  src: string
  alt: string
}

export default function AppIconImage({ src, alt }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-[88px] h-[88px] rounded-2xl object-cover mb-4 shadow-md bg-gray-800"
      onError={(e) => {
        const target = e.target as HTMLImageElement
        if (target.src.endsWith('.webp')) {
          target.src = target.src.replace('.webp', '.png')
        } else if (target.src.endsWith('.png')) {
          target.src = target.src.replace('.png', '.PNG')
        } else if (target.src.endsWith('.PNG')) {
          target.src = target.src.replace('.PNG', '.jpg')
        } else if (target.src.endsWith('.jpg')) {
          target.src = target.src.replace('.jpg', '.jpeg')
        } else if (target.src.endsWith('.jpeg')) {
          target.src = target.src.replace('.jpeg', '.JPG')
        }
      }}
    />
  )
}
