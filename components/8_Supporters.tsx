'use client'
import Image from 'next/image'

export default function Supporters() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Title */}
        <div className="flex justify-center items-center" style={{paddingBottom: '80px' }}>
          <div className="relative">
            <Image
              src="/NRF-Workshop-Website/Assets/imgs/bg_small.png"
              alt="Decoration"
              width={120}
              height={60}
              className="absolute z-0 pointer-events-none"
              style={{transform: 'translate(+0%, +85%)' }}
              priority
            />
            <h2 className="relative z-20" style={{fontFamily: 'RalewayCustom', fontWeight: 300, fontSize: 28, transform: 'translate(-10%, 0%)' }}>Supporters</h2>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Image
            src="/NRF-Workshop-Website/Assets/logo/nrf.png"
            alt="nrf"
            width={574}
            height={169}
          />
        </div>
      </div>
    </section>
  )
}
