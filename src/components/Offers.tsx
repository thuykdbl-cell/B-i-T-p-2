import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface OffersProps {
  onContactClick: () => void;
}

export default function Offers({ onContactClick }: OffersProps) {
  const benefits = [
    'Miễn phí tư vấn & khảo sát trực tiếp',
    'Miễn phí toàn bộ chi phí khởi tạo, cài đặt ban đầu',
    'Đào tạo chuyển giao công nghệ sử dụng 1:1',
    'Hỗ trợ di chuyển dữ liệu cũ lên hệ thống mới',
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-primary via-vnpt-dark to-[#004e75] rounded-[2.5rem] p-8 md:p-14 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden shadow-2xl">
          {/* Decorative glowing blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-vnpt-blue/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-vnpt-orange/15 blur-[100px] rounded-full" />

          <div className="flex-1 space-y-6 relative z-10 text-white text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-vnpt-orange fill-vnpt-orange" />
              <span>Cơ hội vàng duy nhất tháng này</span>
            </div>
            
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Ưu đãi độc quyền hôm nay!
            </h2>
            
            <p className="text-white/80 max-w-xl text-sm md:text-base leading-relaxed">
              Nhằm hỗ trợ doanh nghiệp tối đa hóa hiệu năng và phục hồi kinh tế, VNPT mang đến bộ quà tặng dịch vụ hỗ trợ toàn diện trị giá lên tới <span className="text-vnpt-orange font-bold">10.000.000đ</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-white/95">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto text-center lg:text-right">
            <button
              onClick={onContactClick}
              className="bg-vnpt-orange hover:bg-orange-600 text-white font-sans text-lg font-extrabold px-8 py-5 rounded-2xl shadow-xl shadow-vnpt-orange/30 hover:shadow-vnpt-orange/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 w-full lg:w-auto inline-flex items-center justify-center gap-2 cursor-pointer group"
            >
              Nhận ưu đãi ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/60 text-xs mt-3.5 italic text-center lg:text-right">
              * Ưu đãi áp dụng có điều kiện cho doanh nghiệp mới đăng ký
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
