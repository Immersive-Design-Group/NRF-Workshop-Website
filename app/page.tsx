import Header from '@/components/1_Header'
import Hero from '@/components/2_Hero'
import About from '@/components/3_About'
import Schedule from '@/components/4_Schedule'
import Speakers from '@/components/5_Speakers'
import Venue from '@/components/6_Venue'
import Organizers from '@/components/7_Organizers'
import Supporters from '@/components/8_Supporters'
import Footer from '@/components/9_Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section
        className="relative min-h-[1300px] pb-56"
        style={{
          backgroundImage: "linear-gradient(180deg,rgb(188, 188, 188) 0%, #FFFFFF 100%)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left top',
          backgroundSize: '100% 60%'
        }}
      >
        <Header />
        <Hero />
      </section>
      <About />
      <Schedule />
      <Speakers />
      <Venue />
      <Organizers />
      <Supporters />
      <Footer />
    </main>
  )
}
