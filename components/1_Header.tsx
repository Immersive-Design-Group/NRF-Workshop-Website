'use client'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-transparent relative z-30">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8 mt-8">
            {/* SUSTech Logo Group */}
            <div className="flex items-center">
              <Image
                src="/Assets/logo/sustech.svg"
                alt="SUSTech Logo"
                width={160}
                height={32}
                className="object-contain"
              />
            </div>
            
            {/* School of Design Logo Group */}
            <div className="flex items-center">
              <Image
                src="/Assets/logo/sd.svg"
                alt="School of Design Logo"
                width={125}
                height={32}
                className="object-contain"
              />
            </div>
            
            {/* KAIST Logo */}
            <Image
              src="/Assets/logo/kaist.png"
              alt="KAIST Logo"
              width={110}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
