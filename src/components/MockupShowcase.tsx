export default function MockupShowcase() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans text-3xl md:text-4.5xl font-extrabold text-on-surface tracking-tight mb-4">
          Giao diện hiện đại, trải nghiệm mượt mà
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
          Được thiết kế tối giản, tập trung vào trải nghiệm người dùng, giúp doanh nghiệp dễ dàng làm quen chỉ sau 5 phút làm quen.
        </p>

        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-6 px-4">
          {/* Tablet Mockup */}
          <div className="w-full max-w-sm lg:w-auto glass p-2.5 rounded-[2rem] lg:-rotate-6 lg:translate-x-12 lg:opacity-75 hover:opacity-100 hover:rotate-0 hover:translate-x-0 hover:scale-105 transition-all duration-500 shadow-xl border border-white/40 bg-white/30">
            <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-slate-900">
              <img
                className="w-full h-full object-cover aspect-[4/3]"
                alt="VNPT Mobile Sales - Tablet View"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV-ES8nNDPEgqTT5Ag4ud1IhcVgT84U8FdBLaT8_mecZXO5nWnPfDgIVcDqYHuWijA7hokIIYhxbpJSYm75x_YJLIFVGWXbMkxtlVFJuv_9hxLHZH4uTitptmp9thn0Yz2cTE_vofa-l4TXcZ_aH0xHsSvL32Y1cnjiAJ2WW7lYOnsLslKI3pUc04PcR-rhc72TrahelzdIqIhazd8ho1Ic5rqITvlXlF4RCqyH3NOKcz2maM1GE8"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Màn hình Kho &amp; Sản phẩm (Tablet)</span>
            </div>
          </div>

          {/* Phone Mockup - Centerpiece */}
          <div className="w-full max-w-sm lg:w-auto glass p-3.5 rounded-[3.25rem] z-10 shadow-2xl lg:scale-110 border border-white/60 bg-white/45 hover:scale-115 transition-all duration-300">
            <div className="rounded-[2.5rem] overflow-hidden bg-slate-950 h-[32rem] w-64 md:w-72 mx-auto">
              <img
                className="w-full h-full object-cover"
                alt="VNPT Mobile Sales - Phone View"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG3JgDFllQVh7NZXm4gaHn-V6t42narUW2-R_B28tT3q2B8JnzNg9ZSk-OJw4oHxwa2lIUviqu8fpWGeWKSmOg6lgwZMTSnAa1AMALs9FkU4B1_B-q5f5E5Za5KJMU1WI2eP0gd_u1xoCJ5uvaarKq7M5b77m2A_jxYyx1fwh-9FN23kao8tnZV2Kg7zLW4e8_cwKtIwdnwFCX-0BSc3YuVEy260F-4QpmkjMCXQpHlGyZw-jhUoo"
              />
            </div>
          </div>

          {/* Desktop Mockup */}
          <div className="w-full max-w-md lg:w-auto glass p-2.5 rounded-[1.75rem] lg:rotate-6 lg:-translate-x-12 lg:opacity-75 hover:opacity-100 hover:rotate-0 hover:translate-x-0 hover:scale-105 transition-all duration-500 shadow-xl border border-white/40 bg-white/30">
            <div className="rounded-[1.25rem] overflow-hidden aspect-[16/10] bg-slate-900">
              <img
                className="w-full h-full object-cover"
                alt="VNPT Mobile Sales - Desktop View"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEG-sHO4XFTGuC1QTBW-5QK4NVPx7mZAxzUXDu9pADWHEV4QE5FxclXrQiRHpAhwiYHO49MTKX-wUUiHg-p82ur6Ew35KaVp8Nj4KCWSaAY6x7fwOYLTge7R2XMA9XyQlr5_g7aXfiFNKbXx6Ux6uzkWhZS_Kjj-bKBKWmwYkmkGZTOUjPIVSL0mhd9HI6GCQ1XV752IjDmsat4-4ZgWTlKhZrf6YadUqz_qSqerI14LryqkXXAG8"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cổng quản trị admin (Web Portal)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
