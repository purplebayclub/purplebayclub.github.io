import { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: MessageCircle,
    label: '微信群',
    value: '扫码加入跑团群',
    action: '获取二维码',
  },
  {
    icon: Mail,
    label: '邮箱',
    value: 'hello@zizhurun.com',
    action: '发送邮件',
  },
  {
    icon: Phone,
    label: '联系电话',
    value: '138-0000-0000',
    action: '拨打电话',
  },
  {
    icon: MapPin,
    label: '集合地点',
    value: '紫竹公园东门',
    action: '查看地图',
  },
];

export default function Join() {
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
    <section id="join" ref={sectionRef} className="py-24 lg:py-32 bg-gradient-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Send className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">加入我们</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            准备好开始你的
            <span className="block mt-2">跑步之旅了吗？</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            欢迎加入紫竹跑团大家庭！通过以下方式联系我们：
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">联系方式</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">跑团数据</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-white/60 text-sm">活跃成员</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-3xl font-bold text-white">4</div>
                  <div className="text-white/60 text-sm">周活动</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-3xl font-bold text-white">5年</div>
                  <div className="text-white/60 text-sm">历史沉淀</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-3xl font-bold text-white">0元</div>
                  <div className="text-white/60 text-sm">加入费用</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
