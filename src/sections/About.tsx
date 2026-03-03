import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Trophy, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: '健康第一',
    description: '倡导科学跑步，关注每位成员的健康与安全',
  },
  {
    icon: Trophy,
    title: '挑战自我',
    description: '从5公里到马拉松，陪你突破每一个里程碑',
  },
  {
    icon: Sparkles,
    title: '快乐奔跑',
    description: '跑步不只是运动，更是生活方式和社交圈',
  },
  {
    icon: Target,
    title: '专业指导',
    description: '资深跑者分享经验，科学训练计划定制',
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/team-photo.jpg"
                alt="紫竹跑团成员"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-purple flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-700">50+</div>
                  <div className="text-gray-600 text-sm">场年度活动</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">关于我们</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              一群热爱跑步的
              <span className="text-gradient"> 紫竹人</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              紫竹跑团成立于2020年，由一群在紫竹园区工作的跑步爱好者发起。
              我们从最初的几个人发展到如今的200多名活跃成员，每周固定组织晨跑、夜跑和周末长距离训练。
              无论你是刚开始跑步的新手，还是追求PB的资深跑者，这里都有适合你的节奏。
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group p-5 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 group-hover:bg-purple-200 flex items-center justify-center mb-4 transition-colors">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
