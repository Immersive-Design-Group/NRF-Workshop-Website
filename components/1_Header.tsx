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
              <a 
                href="https://www.sustech.edu.cn/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/NRF-Workshop-Website/Assets/logo/sustech.svg"
                  alt="SUSTech Logo"
                  width={160}
                  height={32}
                  className="object-contain"
                />
              </a>
            </div>
            
            {/* School of Design Logo Group */}
            <div className="flex items-center">
              <a 
                href="https://designschool.sustech.edu.cn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/NRF-Workshop-Website/Assets/logo/sd.svg"
                  alt="School of Design Logo"
                  width={125}
                  height={32}
                  className="object-contain"
                />
              </a>
            </div>
            
            {/* KAIST Logo */}
            <a 
              href="https://www.kaist.ac.kr/kr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/NRF-Workshop-Website/Assets/logo/kaist.png"
                alt="KAIST Logo"
                width={110}
                height={32}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
