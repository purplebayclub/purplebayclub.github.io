import { useEffect, useRef, useState } from 'react';
import { Quote, Star, TrendingUp, Award } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '李明',
    role: '团长',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liming',
    quote: '从一个人跑步到带领200多人的团队，紫竹跑团让我找到了跑步的真正意义——分享与陪伴。',
    stats: { runs: '500+', distance: '8,000km' },
    badges: ['全马PB 3:15', '资深跑者'],
  },
  {
    id: 2,
    name: '王芳',
    role: '副团长',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wangfang',
    quote: '加入跑团三个月，从跑不动1公里到完成人生第一个半马，这里有一群最棒的伙伴！',
    stats: { runs: '120+', distance: '1,500km' },
    badges: ['半马完赛', '进步之星'],
  },
  {
    id: 3,
    name: '张伟',
    role: '配速员',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhangwei',
    quote: '作为600配速员，能帮助新手完成他们的第一个5公里，是我最大的成就感来源。',
    stats: { runs: '300+', distance: '4,200km' },
    badges: ['官方配速员', '热心肠'],
  },
  {
    id: 4,
    name: '陈雪',
    role: '活动组织',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chenxue',
    quote: '每次组织活动看到大家开心的笑容，就觉得所有的付出都值得。紫竹跑团是一个温暖的大家庭。',
    stats: { runs: '200+', distance: '2,800km' },
    badges: ['活动策划', '团队核心'],
  },
];

const achievements = [
  { icon: TrendingUp, label: '累计跑量', value: '100,000+', unit: '公里' },
  { icon: Award, label: '完赛马拉松', value: '500+', unit: '人次' },
  { icon: Star, label: '年度活动', value: '50+', unit: '场' },
];

export default function Members() {
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
    <section id="members" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Award className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 text-sm font-medium">成员风采</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            听听他们
            <span className="text-gradient"> 怎么说</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每一位成员都是紫竹跑团故事的一部分，他们的成长与蜕变激励着更多人加入
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {achievements.map((item) => (
            <div key={item.label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 mb-4">
                <item.icon className="w-7 h-7 text-purple-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-700 mb-1">
                {item.value}
              </div>
              <div className="text-gray-600 text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((member, index) => (
            <div
              key={member.id}
              className={`relative bg-gray-50 rounded-3xl p-8 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Quote className="w-6 h-6 text-purple-400" />
              </div>

              {/* Content */}
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full bg-purple-100"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 text-sm">{member.role}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{member.quote}"
              </blockquote>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4 border-t border-gray-200">
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    {member.stats.runs}
                  </div>
                  <div className="text-xs text-gray-500">累计跑步</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    {member.stats.distance}
                  </div>
                  <div className="text-xs text-gray-500">总距离</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
