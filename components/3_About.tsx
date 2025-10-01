'use client'
import Image from 'next/image'

export default function About() {
  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <div className="flex justify-center items-center" style={{paddingBottom: '80px' }}>
          <div className="relative">
            <Image
              src="/Assets/imgs/bg_small.png"
              alt="Decoration"
              width={120}
              height={60}
              className="absolute z-0 pointer-events-none"
              style={{transform: 'translate(+55%, +85%)' }}
              priority
            />
            <h2 className="relative z-20" style={{fontFamily: 'RalewayCustom', fontWeight: 300, fontSize: 28, transform: 'translate(0%, 0%)' }}>About the Workshop</h2>
          </div>
        </div>

        <div className="w-full" style={{paddingBottom: '80px' }}>
          <Image
            src="/Assets/imgs/about.png"
            alt="About"
            width={3000}
            height={600}
            className="w-full h-auto mt-20 mb-20"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* 文字区域 */}
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-900" style={{ fontFamily: 'RalewayCustom', fontWeight: 400, fontSize: 18}}>
          Music serves as a collective experience, significantly influencing culture, the economy, and society. What does the future hold for music consumption and concerts? Historically, we have transitioned from physical formats like CDs and tapes to streaming, and we may now be on the brink of virtual reality (VR). <br />
          <br />
          The key question is how music and live performances will evolve. In the past and present, we have depended on being physically present, but the pandemic has accelerated the shift to virtual concerts via VR. A notable example is BlackPink, which hosted a concert last year that attracted 280,000 paying viewers, generating 10 billion won in revenue and connecting with fans across 10 countries. <br />
          <br />
          Despite their potential, VR concerts encounter various obstacles. They frequently lack engagement and can lead to solitary experiences. Instead, we propose the concept of mixed reality concerts, where both participants and spectators can be present either remotely or physically, merging the tangible and virtual worlds. To bring this vision to life, we are concentrating on developing a digital mixed reality experience for both musicians and audiences through mixed reality graphics. Additionally, we intend to gather biometric data from the audience to map music or visual parameters and provide haptic feedback between musicians and the audience.
          </p>
        </div>
      </div>
    </section>
  )
}
