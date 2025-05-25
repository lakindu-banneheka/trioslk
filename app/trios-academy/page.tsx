'use client'

import Image from 'next/image'

export default function TriosAcademyPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trios-academy.png"
            alt="Trios Academy Coming Soon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Trios Academy</h1>
          <p className="text-xl md:text-2xl text-gray-200 mt-4">Coming Soon...</p>
        </div>
      </section>
    </div>
  )
}
