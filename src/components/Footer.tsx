import { CloudCheck, MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-6 text-left">
          <div onClick={handleScrollToTop} className="flex items-center gap-2.5 cursor-pointer group w-fit">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <CloudCheck className="text-white w-6 h-6" />
            </div>
            <span className="font-sans text-xl font-extrabold tracking-tight text-white">
              VNPT <span className="text-vnpt-blue">Mobile Sales</span>
            </span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Giải pháp số hóa toàn diện đội ngũ bán hàng thị trường (DMS), chăm sóc khách hàng và kiểm soát đơn hàng tức thời từ Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT).
          </p>

          <div className="flex gap-4">
            <a href="https://vnpt.com.vn" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 text-left space-y-4">
          <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Hệ thống liên kết</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors cursor-pointer">
                Trang chủ
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('benefits')} className="hover:text-white transition-colors cursor-pointer">
                Lợi ích giải pháp
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors cursor-pointer">
                Tính năng chi tiết
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer">
                Bảng giá dịch vụ
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer">
                Câu hỏi thường gặp (FAQ)
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-4 text-left space-y-4">
          <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Thông tin liên hệ</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-slate-400 leading-relaxed">
                Tòa nhà VNPT, số 57 Huỳnh Thúc Kháng, phường Láng Hạ, quận Đống Đa, thành phố Hà Nội, Việt Nam.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:18001166" className="text-slate-300 hover:text-white font-semibold">
                1800 1166 (Tổng đài dịch vụ)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:cskh@vnpt.vn" className="text-slate-300 hover:text-white">
                cskh@vnpt.vn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>Bản quyền thuộc về Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT) © {currentYear}.</span>
        </div>
        <div className="flex gap-6">
          <span className="hover:text-slate-300 transition-colors">Điều khoản dịch vụ</span>
          <span className="hover:text-slate-300 transition-colors">Chính sách bảo mật</span>
        </div>
      </div>
    </footer>
  );
}
