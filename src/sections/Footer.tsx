import { Heart, Instagram, MessageCircle } from 'lucide-react';

const footerLinks = {
  关于我们: ['跑团介绍', '组织架构', '发展历程', '合作伙伴'],
  活动信息: ['常规活动', '特别活动', '活动日历', '报名须知'],
  跑步资源: ['跑步知识', '训练计划', '装备推荐', '伤病预防'],
  联系我们: ['加入跑团', '商务合作', '意见建议', '常见问题'],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">紫</span>
              </div>
              <span className="text-xl font-bold">紫竹跑团</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              用脚步丈量城市，用汗水诠释热爱。
              欢迎每一位热爱跑步的你加入！
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} 紫竹跑团. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by 紫竹跑团
          </p>
        </div>
      </div>
    </footer>
  );
}
