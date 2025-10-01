'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8 py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center mt-8 gap-8">
          {/* 文案 */}
          <div>
            <p className="text-gray-900 mt-8" style={{ fontFamily: 'RalewayCustom', fontWeight: 400, fontSize: 18 }}>
              Designed by{' '}
              <a href="#" className="underline" style={{ fontWeight: 700 }}>
                Immersive Design Group
              </a>
            </p>
            <p className="text-gray-900" style={{ fontFamily: 'RalewayCustom', fontWeight: 400, fontSize: 18 }}>
              Contact us:{' '}
              <a href="mailto:Weitaojiangdesign@gmail.com" className="underline">
                Weitaojiangdesign@gmail.com
              </a>
            </p>
          </div>

          {/* Logo 列表 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center">
            <figure className="flex flex-col items-center">
              <Image src="/Assets/logo/immersivedesign.svg" alt="Immersive Design" width={160} height={40} />
            </figure>

            <figure className="flex flex-col items-center">
              <Image src="/Assets/logo/ssg.svg" alt="Sound Studies Group" width={160} height={40} />
            </figure>

            <figure className="flex flex-col items-center">
              <Image src="/Assets/logo/sd.svg" alt="School of Design" width={160} height={40} />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  )
}
