'use client'
import Image from 'next/image'

export default function Organizers() {
  const organizers = [
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/NRF-Workshop-Website/Assets/people/Weitao Jiang.png',
      url: 'https://portfolio-weitao.vercel.app'
    },
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Weitao Jiang',
      title: 'General chair',
      image: '/api/placeholder/150/150'
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
            <h2 className="relative z-20" style={{fontFamily: 'RalewayCustom', fontWeight: 300, fontSize: 28, transform: 'translate(-10%, -80%)' }}>Organizers</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {organizers.map((organizer, index) => (
            <div key={index} className="text-center">
              {organizer.url ? (
                <a href={organizer.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${organizer.name} website`}>
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Image
                  src={organizer.image}
                  alt={organizer.name}
                  width={100}
                  height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              ) : (
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src={organizer.image}
                    alt={organizer.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h3 className="font-bold text-gray-800 text-m mb-2">{organizer.name}</h3>
              <p className="text-xs text-gray-600">{organizer.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
