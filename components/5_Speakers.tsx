'use client'
import Image from 'next/image'

export default function Speakers() {
  const speakers = [
    {
      name: 'Andrea Bianchi',
      title: 'Associate Professor',
      affiliation: 'Industrial Design & School of Computing, KAIST',
      url: 'https://make.kaist.ac.kr/andrea'
    },
    {
      name: 'Seungwoo Je',
      title: 'Assistant Professor',
      affiliation: 'School of Design, SUSTech',
      url: 'http://www.immersivedesignresearch.com/seungwoo'
    },
    {
      name: 'Pengcheng An',
      title: 'Assistant Professor',
      affiliation: 'School of Design, SUSTech',
      url: 'https://anpengcheng.cn'
    },
    {
      name: 'Masahiko INAMI',
      title: 'Associate Professor',
      affiliation: 'Research Center for Advanced Science and Technology, The University of Tokyo',
      url: 'https://www.rcast.u-tokyo.ac.jp/en/research/people/staff-inami_masahiko.html'
    },
  ]

  return (
    <section className="section bg-gray-50">
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
              style={{transform: 'translate(+0%, +45%)' }}
              priority
            />
            <h2 className="relative z-20" style={{fontFamily: 'RalewayCustom', fontWeight: 300, fontSize: 28, transform: 'translate(0%, -80%)' }}>Speakers</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => {
            const imgSrc = `/NRF-Workshop-Website/Assets/people/${encodeURIComponent(speaker.name)}.png`
            const avatar = (
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden bg-gray-200">
                <Image
                  src={imgSrc}
                  alt={speaker.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            )
            return (
              <div key={index} className="text-center">
                {speaker.url ? (
                  <a href={speaker.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${speaker.name} website`}>
                    {avatar}
                  </a>
                ) : (
                  avatar
                )}
                <h3 className="font-bold text-gray-800 mb-2">{speaker.name}</h3>
                <p className="text-m text-gray-600 mb-2">{speaker.title}</p>
                <div className="flex justify-center mt-4 mb-4">
                  <Image src="/NRF-Workshop-Website/Assets/imgs/line.svg" alt="" width={220} height={6} aria-hidden />
                </div>
                <p className="text-xs text-gray-500">{speaker.affiliation}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
