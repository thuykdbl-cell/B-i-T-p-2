import { ShieldAlert, ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#F0F6FC] via-[#F8FAFC] to-white"
    >
      {/* Background ambient glowing shapes */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-vnpt-blue/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-vnpt-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left column info */}
        <div className="space-y-6 lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1F2FC] text-primary font-sans text-xs font-bold rounded-full border border-[#BDE0FC] animate-pulse">
            <ShieldAlert className="text-primary w-4 h-4 fill-primary-fixed" />
            <span>Giải pháp số 1 cho doanh nghiệp 4.0</span>
          </div>
          
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.15] text-left">
            CHUYỂN ĐỔI SỐ HOẠT ĐỘNG{' '}
            <span className="text-gradient block sm:inline font-black">BÁN HÀNG</span> CÙNG{' '}
            <span className="text-primary">VNPT MOBILE SALES</span>
          </h1>
          
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed text-left">
            Quản lý đội ngũ nhân viên thị trường, khách hàng và đơn hàng mọi lúc mọi nơi ngay trên smartphone. Nâng cao hiệu suất 200%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={onContactClick}
              className="bg-primary hover:bg-[#004e75] text-white font-sans text-base font-bold px-8 py-4 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              Đăng ký tư vấn miễn phí
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:0888000999"
              className="border-2 border-primary/20 hover:border-primary text-primary font-sans text-base font-bold px-8 py-4 rounded-2xl text-center flex items-center justify-center gap-2 hover:bg-primary/5 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Gọi ngay: 0888 000 999</span>
            </a>
          </div>

          {/* Quick Stats banner under hero */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/50 w-full max-w-lg">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-primary">200%</div>
              <div className="text-xs text-on-surface-variant mt-1">Tăng hiệu suất sales</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-vnpt-blue">100%</div>
              <div className="text-xs text-on-surface-variant mt-1">Giao dịch real-time</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-vnpt-orange">0đ</div>
              <div className="text-xs text-on-surface-variant mt-1">Phí khởi tạo ban đầu</div>
            </div>
          </div>
        </div>

        {/* Right column mockup image with premium styling */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            <div className="glass p-4 rounded-[2.5rem] relative z-20 shadow-2xl overflow-hidden border border-white/40 bg-white/40">
              <img
                className="rounded-[1.75rem] w-full h-auto object-cover aspect-[4/3] shadow-inner"
                alt="VNPT Mobile Sales"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEf0uCQz7JIyg1fvvFf6RaOTjS1eCcTgjhBXJptrBkEdt6zXWehqVfng7dwV0bCBOdZ_YCJtlPhXBTtISLIKfxO52Qt3gJS5KutMXbQOKFklokoAPcsvZN06kq9MZPS8TYawT4t4LUKpLCLNt9jeyzLo27CUDgx3kZVXptz4fg9CzuEHWQmdQsWA-IzK6IfZszZgYqZ4LEGyYEtyD926GVhnIsSR0Nr8MO6yjVq2atb8pMDYfRbdE"
              />
            </div>
            
            {/* Floating feature card 1 */}
            <div className="absolute -left-6 top-1/3 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-30 border border-gray-100 flex items-center gap-3 animate-bounce-slow max-w-[200px] hidden sm:flex">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">Đơn hàng mới</div>
                <div className="text-[10px] text-gray-500">Vừa cập nhật 1 giây trước</div>
              </div>
            </div>

            {/* Floating feature card 2 */}
            <div className="absolute -right-6 bottom-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl z-30 border border-gray-100 flex items-center gap-3 max-w-[220px] hidden sm:flex">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">Giám sát nhân viên</div>
                <div className="text-[10px] text-blue-600 font-semibold">Tuyến bán hàng GPS</div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-vnpt-orange/10 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-vnpt-blue/10 blur-[80px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
