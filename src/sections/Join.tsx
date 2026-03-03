import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

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
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    experience: '',
    goal: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
  };

  return (
    <section id="join" ref={sectionRef} className="py-24 lg:py-32 bg-gradient-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            填写下方表单，我们会尽快与你联系，欢迎加入紫竹跑团大家庭！
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${
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

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">跑团数据</h3>
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

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">加入申请</h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名 *</Label>
                  <Input
                    id="name"
                    placeholder="请输入您的姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">手机号 *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="请输入您的手机号"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="experience">跑步经验</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  >
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="请选择" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">新手（刚开始跑步）</SelectItem>
                      <SelectItem value="casual">偶尔跑（每月几次）</SelectItem>
                      <SelectItem value="regular">经常跑（每周跑步）</SelectItem>
                      <SelectItem value="advanced">资深（有比赛经验）</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">跑步目标</Label>
                  <Select
                    value={formData.goal}
                    onValueChange={(value) => setFormData({ ...formData, goal: value })}
                  >
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="请选择" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="health">保持健康</SelectItem>
                      <SelectItem value="weight">减脂塑形</SelectItem>
                      <SelectItem value="half">完成半马</SelectItem>
                      <SelectItem value="full">完成全马</SelectItem>
                      <SelectItem value="pb">突破成绩</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <Label htmlFor="message">留言（选填）</Label>
                <Textarea
                  id="message"
                  placeholder="有什么想对我们说的吗？"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-purple text-white hover:opacity-90 font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                提交申请
              </Button>

              <p className="text-center text-gray-500 text-sm mt-4">
                提交后我们会在24小时内联系您
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold">申请已提交</DialogTitle>
            <DialogDescription className="text-gray-600">
              感谢您申请加入紫竹跑团！我们会尽快审核您的申请，并通过短信或电话与您联系。
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button
              onClick={() => setShowDialog(false)}
              className="w-full bg-gradient-purple text-white hover:opacity-90"
            >
              知道了
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
