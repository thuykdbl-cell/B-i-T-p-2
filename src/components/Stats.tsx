import { useState, useEffect } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({
    companies: 0,
    orders: 0,
    satisfaction: 0,
    support: 0,
  });

  useEffect(() => {
    // Animate statistics counting up
    const targets = {
      companies: 375,
      orders: 37, // k+
      satisfaction: 99, // %
      support: 24, // /7
    };

    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        companies: Math.min(Math.round((targets.companies / steps) * currentStep), targets.companies),
        orders: Math.min(Math.round((targets.orders / steps) * currentStep), targets.orders),
        satisfaction: Math.min(Math.round((targets.satisfaction / steps) * currentStep), targets.satisfaction),
        support: Math.min(Math.round((targets.support / steps) * currentStep), targets.support),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-[#F2F8FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="font-sans text-4xl md:text-5xl font-black text-primary mb-2">
              {counts.companies}+
            </div>
            <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">Doanh nghiệp tin dùng</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="font-sans text-4xl md:text-5xl font-black text-primary mb-2">
              {counts.orders}k+
            </div>
            <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">Đơn hàng mỗi ngày</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="font-sans text-4xl md:text-5xl font-black text-primary mb-2">
              {counts.satisfaction}%
            </div>
            <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">Khách hàng hài lòng</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="font-sans text-4xl md:text-5xl font-black text-primary mb-2">
              {counts.support}/7
            </div>
            <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">Hỗ trợ kỹ thuật</p>
          </div>
        </div>
      </div>
    </section>
  );
}
