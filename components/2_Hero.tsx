'use client'
import Image from 'next/image'
import { getAssetPath } from '@/utils/paths'

export default function Hero() {
  return (
    <section className="section bg-transparent relative overflow-visible min-h-[1200px] pb-24" style={{ paddingTop: '200px', paddingBottom: '200px', isolation: 'isolate' }}>
      {/* 背景椭圆：相对 section 定位 */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }} aria-hidden>
        <div
          style={{
            position: 'absolute',
            right: 100,
            top: 220,
            width: 700,
            height: 380,
            backgroundImage: `url('${getAssetPath('/Assets/imgs/bg.png')}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container relative h-full flex items-center">
        <div className="max-w-[1080px] relative z-50">
          <p className="text-gray-500 mb-8" style={{ fontFamily: 'RalewayCustom', fontWeight: 200, fontSize: 35 }}>Seminar and Workshop</p>
          <h1 className="text-gray-900 font-bold mb-10" style={{ fontFamily: 'RalewayCustom', fontWeight: 700, fontSize: 40 }}>
            Listening Through the Body:<br/>
            Combining Visual, Auditory, and Haptic Interaction<br/>
            For Designing a Concert Space for XR
          </h1>
          <p className="text-gray-700 mt-8 font-number" style={{fontFamily: 'MontserratNum', fontWeight: 300, fontSize: '30px', letterSpacing: '0.3px'}}>
            2025.11.27-2025.11.30
          </p>
        </div>
      </div>
    </section>
  )
}