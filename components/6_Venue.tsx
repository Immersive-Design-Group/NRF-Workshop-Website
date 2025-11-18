'use client'
import Image from 'next/image'
import { getAssetPath } from '@/utils/paths'

export default function Venue() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Title */}
        <div className="flex justify-center items-center" style={{paddingBottom: '80px' }}>
          <div className="relative">
            <Image
              src={getAssetPath('/Assets/imgs/bg_small.png')}
              alt="Decoration"
              width={120}
              height={60}
              className="absolute z-0 pointer-events-none"
              style={{transform: 'translate(+0%, +85%)' }}
              priority
            />
            <h2 className="relative z-20" style={{fontFamily: 'RalewayCustom', fontWeight: 300, fontSize: 28, transform: 'translate(-10%, 0%)' }}>The Venue</h2>
          </div>
        </div>
      
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Address</h3>
            <p className="text-gray-700 mb-4">
            Room 103, College of Businesses, Southern University of Science and Technology, No. 1088, Xueyuan Avenue, Nanshan District, Nanshan District, Shenzhen, Guangdong, China
            </p>
            {/* <a
              href="https://designschool.sustech.edu.cn/about/contact-us"
              className="text-blue-600 hover:text-blue-800"
              style={{ textDecoration: 'underline' }}
            >
              More details
            </a> */}
            
            {/* Small logos */}
            {/* <div className="flex space-x-4 mt-6 mb-8">
              <Image
                src={getAssetPath('/Assets/logo/sd.svg')}
                alt="School of Design Logo"
                width={200}
                height={50}
                className="object-contain"
              />
            </div> */}
          </div>
          
          <div>
            {/* Google Map */}
            <div className="w-full overflow-hidden mb-8" style={{ height: '300px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.7535876706975!2d113.99896630330547!3d22.594383505401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f2f004433deb%3A0x78b8602ec96ff57b!2z5Y2X5pa556eR5oqA5aSn5a2m!5e1!3m2!1szh-CN!2shk!4v1763474701442!5m2!1szh-CN!2shk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        
        {/* Venue images */}
        {/* <div className="flex justify-center gap-4">
          <Image
            src={getAssetPath('/Assets/imgs/venue1.png')}
            alt="Venue1"
            width={622}
            height={326}
            className="object-contain"
          />
          <Image
            src={getAssetPath('/Assets/imgs/venue2.png')}
            alt="Venue2"
            width={622}
            height={326}
            className="object-contain"
          />
          <Image
            src={getAssetPath('/Assets/imgs/venue3.png')}
            alt="Venue3"
            width={622}
            height={326}
            className="object-contain"
          />
        </div> */}
      </div>
    </section>
  )
}
