'use client'
import Image from 'next/image'
import { getAssetPath } from '@/utils/paths'

export default function Schedule() {
  const scheduleData = [
    {
      day: 1,
      date: '2025.11.27',
      activityName: 'Invited Talk',
      activities: [
        { time: '14:00-14:30', activity: 'Masahiko INAMI - Superhuman Sports'},
        { time: '14:30-15:00', activity: 'Andrea Bianchi - “If All You Have is a Hammer”: Designing Digitally Augmented Physical Tools'},
        { time: '15:00-15:30', activity: 'Boyu Gao - Exploring User-centered Authentication for VR/AR Devices'},
        { time: '15:30-16:00', activity: 'HyeonBeom YI - Augmented Body Parts: VR Embodiment and Wearable Robotics'},
        { time: '16:00-16:30', activity: 'Tao Luo - Beyond Point Studies: Transferring Interaction Technique to Spatial Computing'},
        { time: '16:30-17:00', activity: 'Sungyong Shin - Designing a Multisensory Assistive System for Music Education of Deaf and Hard-of-Hearing Individuals'},
      ]
    },
  ]
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gray-100" style={{ 
              width: '2000px', 
              height: '120px',  
              transform: 'translate(-0%, 35%)',
              opacity: 0.5
            }}></div>
            <h2 className="section-title relative z-10" style={{ 
              fontFamily: 'RalewayCustom', 
              fontWeight: 400, 
              fontSize: '26px',
              transform: 'translate(0%, -100%)'
              }}>
              A one-day event of talks, activities, and workshops.
            </h2>
          </div>
        </div>

        {/* Detailed schedule - 简化版，只显示时间 */}
        <div className="max-w-5xl mx-auto w-full">
          {scheduleData.map((day) => (
            <div key={day.day} className="mb-6">
              {/* 标题行 */}
              <div
                className="w-full mt-2 mb-2 flex items-center justify-center"
                style={{ height: '40px', fontFamily: 'RalewayCustom', fontWeight: 700, fontSize: '20px', backgroundColor: '#d1d5db' }}
              >
                Day {day.day}
              </div>
              {/* 表格行 */}
              <div className="w-full">
                {day.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex gap-4 py-4"
                    style={{ borderTop: '6px solid #ffffff', borderBottom: '6px solid #ffffff' }}
                  >
                    {/* 左侧时间矩形 */}
                    <div className="flex items-center justify-center text-gray-800 font-number" style={{ height: '30px', width: '100px', fontWeight: 400, backgroundColor: '#f3f4f6' }}>{activity.time}</div>
                    {/* 右侧活动内容矩形（与左侧拼接，整体撑满左右） */}
                    <div className="flex-1 flex items-center justify-center text-gray-800" style={{ height: '30px', width:'1000px', fontFamily: 'RalewayCustom', fontWeight: 400, backgroundColor: '#f3f4f6' }}>{activity.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
