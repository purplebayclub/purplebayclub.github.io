import { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    id: 1,
    title: '晨间活力跑',
    image: '/hero-running.jpg',
    schedule: '每周二、四 7:00',
    location: '紫竹公园东门',
    distance: '5-8公里',
    pace: '6:00-7:00/km',
    participants: 15,
    tags: ['入门友好', '晨跑'],
    color: 'from-orange-400 to-amber-500',
  },
  {
    id: 2,
    title: '夜跑放松跑',
    image: '/night-run.jpg',
    schedule: '每周三、五 19:30',
    location: '紫竹滨江步道',
    distance: '6-10公里',
    pace: '5:30-6:30/km',
    participants: 25,
    tags: ['夜景', '社交'],
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 3,
    title: '周末长距离',
    image: '/trail-run.jpg',
    schedule: '每周六 8:00',
    location: '紫竹郊野公园',
    distance: '15-21公里',
    pace: '5:00-6:00/km',
    participants: 20,
    tags: ['LSD', '耐力训练'],
    color: 'from-green-400 to-emerald-600',
  },
  {
    id: 4,
    title: '月度挑战赛',
    image: '/marathon-finish.jpg',
    schedule: '每月最后一个周日',
    location: '紫竹体育公园',
    distance: '10公里计时赛',
    pace: '个人最佳',
    participants: 50,
    tags: ['比赛', '奖品'],
    color: 'from-rose-400 to-pink-600',
  },
];

export default function Activities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="activities" ref={sectionRef} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 text-sm font-medium">活动安排</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            找到适合你的
            <span className="text-gradient"> 跑步节奏</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            无论你是早起鸟还是夜猫子，无论你是新手还是老手，
            紫竹跑团都有适合你的活动
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-30`} />
                <div className="absolute top-4 left-4 flex gap-2">
                  {activity.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-white/90 text-gray-800 backdrop-blur-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {activity.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">{activity.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">{activity.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">{activity.participants}人参与</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-700">
                        {activity.distance}
                      </div>
                      <div className="text-xs text-gray-500">距离</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-700">
                        {activity.pace}
                      </div>
                      <div className="text-xs text-gray-500">配速</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group/btn"
                  >
                    详情
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            size="lg"
            className="bg-gradient-purple text-white hover:opacity-90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          >
            报名参加
          </Button>
        </div>
      </div>
    </section>
  );
}
