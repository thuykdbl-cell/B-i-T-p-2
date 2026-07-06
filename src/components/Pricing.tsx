import { useState } from 'react';
import { PricingPlan } from '../types';
import { CheckCircle, Info } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      priceMonthly: 299000,
      priceLabel: '299k',
      periodLabel: '/tháng',
      features: [
        'Tối đa 5 nhân sự hoạt động',
        'Quản lý danh sách khách hàng cơ bản',
        'Tính năng tạo đơn hàng & theo dõi trạng thái',
        'Báo cáo doanh số cơ bản',
        'Hỗ trợ qua email giờ hành chính',
      ],
      buttonText: 'Chọn gói Starter',
    },
    {
      id: 'business',
      name: 'Business',
      priceMonthly: 699000,
      priceLabel: '699k',
      periodLabel: '/tháng',
      popular: true,
      badge: 'Phổ biến nhất',
      features: [
        'Tối đa 20 nhân sự hoạt động',
        'Hệ quản trị CRM chuyên sâu',
        'Giám sát hành trình di chuyển GPS nâng cao',
        'Báo cáo phân tích doanh thu & hiệu suất thông minh (BI)',
        'Đồng bộ dữ liệu offline thông minh',
        'Hỗ trợ kỹ thuật 24/7/365',
      ],
      buttonText: 'Chọn gói Business',
    },
    {
      id: 'professional',
      name: 'Professional',
      priceMonthly: 'contact',
      priceLabel: 'Liên hệ',
      periodLabel: '',
      features: [
        'Không giới hạn số lượng nhân sự',
        'Full toàn bộ tính năng cao cấp',
        'Tích hợp sâu API với ERP/Phần mềm kế toán hiện tại',
        'Đội ngũ chăm sóc khách hàng chuyên biệt',
        'Đào tạo & hướng dẫn tận nơi miễn phí',
      ],
      buttonText: 'Liên hệ VNPT',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      priceMonthly: 'custom',
      priceLabel: 'Tùy biến',
      periodLabel: '',
      features: [
        'May đo phần mềm theo yêu cầu chuyên biệt',
        'Xây dựng hạ tầng trên Server riêng của doanh nghiệp',
        'Hệ thống bảo mật đa tầng tối cao',
        'Cam kết chất lượng dịch vụ (SLA) bằng văn bản',
        'Hỗ trợ on-site khẩn cấp trong vòng 2h',
      ],
      buttonText: 'Nhận báo giá ngay',
    },
  ];

  const formatPrice = (price: number | 'contact' | 'custom') => {
    if (price === 'contact') return 'Liên hệ';
    if (price === 'custom') return 'Tùy biến';
    
    let displayPrice = price;
    if (isAnnual) {
      // Apply 20% discount and multiply by 12, then divide back to show average monthly price
      displayPrice = Math.round((price * 0.8));
    }
    
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
      .format(displayPrice)
      .replace(/\s?₫/, 'đ')
      + '/tháng';
  };

  return (
    <section id="pricing" className="py-20 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-sans text-3xl md:text-4.5xl font-extrabold text-on-surface tracking-tight mb-4">
            Gói dịch vụ linh hoạt
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant">
            Phù hợp với mọi quy mô từ hộ kinh doanh cá thể, cửa hàng bán lẻ cho đến các tập đoàn phân phối đa quốc gia.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-3.5 mb-16">
          <span className={`text-sm font-semibold ${!isAnnual ? 'text-primary' : 'text-on-surface-variant'}`}>
            Thanh toán theo tháng
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors duration-300 relative focus:outline-none cursor-pointer"
          >
            <div
              className={`w-6 h-6 bg-primary rounded-full shadow-md transform transition-transform duration-300 ${
                isAnnual ? 'translate-x-6 bg-vnpt-blue' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${isAnnual ? 'text-primary' : 'text-on-surface-variant'}`}>
              Thanh toán theo năm
            </span>
            <span className="bg-vnpt-orange/15 text-vnpt-orange text-[10px] font-extrabold px-2.5 py-1 rounded-full animate-bounce">
              Tiết kiệm 20%
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan) => {
            const isContactOrCustom = plan.priceMonthly === 'contact' || plan.priceMonthly === 'custom';
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'border-primary border-2 shadow-xl md:-translate-y-4 md:scale-105 z-10 bg-gradient-to-b from-white to-sky-50/10'
                    : 'border-gray-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-vnpt-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className={`font-sans text-xl font-bold mb-4 ${plan.popular ? 'text-primary' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="font-sans text-3xl font-black tracking-tight text-primary">
                      {isContactOrCustom ? plan.priceLabel : formatPrice(plan.priceMonthly)}
                    </span>
                    {!isContactOrCustom && isAnnual && (
                      <span className="text-xs text-emerald-500 font-bold block mt-1">
                        (Đã giảm 20%)
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3.5 mb-8 border-t border-gray-100 pt-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="w-5 h-5 text-vnpt-blue shrink-0 mt-0.5" />
                        <span className="text-gray-600 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer text-center ${
                      plan.popular
                        ? 'bg-primary hover:bg-[#004e75] text-white shadow-md hover:shadow-lg hover:shadow-primary/10'
                        : 'border border-primary text-primary hover:bg-primary/5 bg-transparent'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                  {isAnnual && !isContactOrCustom && (
                    <p className="text-[10px] text-gray-400 text-center mt-2 flex items-center justify-center gap-1">
                      <Info className="w-3.5 h-3.5" />
                      Hóa đơn xuất hàng năm
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
