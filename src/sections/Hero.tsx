import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, MapPin, Users, Calendar } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 600);
        heroRef.current.style.opacity = String(opacity);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-running.jpg"
          alt="紫竹跑团"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-purple-800/40 to-purple-900/70" />
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">每周定期活动</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            <span className="block">紫竹跑团</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-white/80 mt-4">
              用脚步丈量城市，用汗水诠释热爱
            </span>
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-4">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-white/70">活跃成员</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">5年</div>
                <div className="text-sm text-white/70">成立时间</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">紫竹园区</div>
                <div className="text-sm text-white/70">活动区域</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
            >
              加入跑团
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-md"
              onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              了解活动
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
