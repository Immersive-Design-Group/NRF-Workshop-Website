'use client'
import Image from 'next/image'

export default function Schedule() {
  const scheduleData = [
    {
      day: 1,
      date: '2025.11.27',
      activityName: 'Invited Talk',
      activities: [
        { time: '08:00', activity: 'Flight from Seoul at 8 am' },
        { time: '12:00', activity: 'Lunch' },
        { time: '14:00', activity: 'Huaqiangbei Tour' },
        { time: '16:00', activity: 'Company Visit' },
        { time: '18:00', activity: 'Dinner' }
      ]
    },
    {
      day: 2,
      date: '2025.11.28',
      activityName: 'Invited Talk and Workshop',
      activities: [
        { time: '09:00', activity: 'Company Visit in the morning' },
        { time: '12:00', activity: 'Lunch' },
        { time: '14:00', activity: 'Guest talks and workshop in the afternoon' },
        { time: '18:00', activity: 'Dinner' }
      ]
    },
    {
      day: 3,
      date: '2025.11.29',
      activityName: 'Invited Talk and Workshop',
      activities: [
        { time: '09:00', activity: 'For those leaving early: morning shopping, followed by a 1 pm flight to Seoul (arriving at 5 pm)' },
        { time: '14:00', activity: 'Cultural Trip' }
      ]
    },
    {
      day: 4,
      date: '2025.11.30',
      activityName: 'Company Tour',
      activities: [
        { time: '09:00', activity: 'Morning shopping, then a 1 pm flight to Seoul (arriving at 5 pm)' }
      ]
    }
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
              A four-day event of talks, activities, and workshops.
            </h2>
          </div>
        </div>
        
        {/* Day indicators */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col sm:flex-row justify-between w-full max-w-7xl gap-4 sm:gap-0">
            {scheduleData.map((day) => (
              <div key={day.day} className="text-center relative flex-1 mx-2 sm:mx-12">
                {/* 椭圆背景 - 在底部 */}
                <Image
                  src="/NRF-Workshop-Website/Assets/imgs/bg_small.png"
                  alt="Decoration"
                  width={200}
                  height={100}
                  className="absolute pointer-events-none z-0 hidden sm:block"
                  style={{ 
                    objectFit: 'contain', 
                    left: '50%', 
                    top: '100%', 
                    transform: 'translate(-0%, 100%)' 
                  }}
                  priority
                />
                {/* 文字内容整体 */}
                <div className="relative z-30" style={{ transform: 'translate(0%, -40%)' }}>
                  {/* 序号 */}
                  <div className="mb-2">
                    <span className="text-2xl sm:text-4xl font-bold text-gray-400 font-number" style={{ fontFamily: 'MontserratNum', fontWeight: 700, fontSize: 'clamp(50px, 8vw, 100px)', opacity: 0.1 }}>{day.day}</span>
                  </div>
                  {/* 日期 */}
                  <p className="font-semibold text-gray-800 mb-2 sm:mb-4" style={{ fontFamily: 'MontserratNum', fontWeight: 300, fontSize: 'clamp(16px, 4vw, 26px)' }}>
                    {day.date}
                  </p>
                  {/* 活动名称 */}
                  <p className="text-sm text-gray-600 mb-2 sm:mb-4" style={{ fontFamily: 'RalewayCustom', fontWeight: 700, fontSize: 'clamp(14px, 3vw, 20px)' }}>
                    {day.activityName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed schedule - 简化版，只显示时间 */}
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-0">
          {scheduleData.map((day) => (
            <div key={day.day} className="mb-6">
              {/* 标题行 */}
              <div
                className="w-full mt-2 mb-2 flex items-center justify-center"
                style={{ height: '40px', fontFamily: 'RalewayCustom', fontWeight: 700, fontSize: 'clamp(16px, 4vw, 20px)', backgroundColor: '#d1d5db' }}
              >
                Day {day.day}
              </div>
              {/* 表格行 */}
              <div className="w-full">
                {day.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-4 py-2 sm:py-4"
                    style={{ borderTop: '6px solid #ffffff', borderBottom: '6px solid #ffffff' }}
                  >
                    {/* 左侧时间矩形 */}
                    <div className="flex items-center justify-center text-gray-800 font-number w-full sm:w-auto" style={{ height: '30px', minWidth: '100px', fontWeight: 400, backgroundColor: '#f3f4f6', fontSize: 'clamp(12px, 3vw, 16px)' }}>{activity.time}</div>
                    {/* 右侧活动内容矩形（与左侧拼接，整体撑满左右） */}
                    <div className="flex-1 flex items-center justify-center text-gray-800 px-2" style={{ height: 'auto', minHeight: '30px', fontFamily: 'RalewayCustom', fontWeight: 400, backgroundColor: '#f3f4f6', fontSize: 'clamp(12px, 3vw, 16px)' }}>{activity.activity}</div>
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
