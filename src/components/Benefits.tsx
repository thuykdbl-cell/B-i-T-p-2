import { useState } from 'react';
import { BenefitItem } from '../types';
import {
  TrendingUp,
  ShoppingCart,
  Users,
  MapPin,
  BarChart3,
  UserCheck,
  Route,
  PiggyBank,
} from 'lucide-react';

export default function Benefits() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'growth' | 'management' | 'cost'>('all');

  const benefits: BenefitItem[] = [
    {
      id: 'b1',
      title: 'Tăng doanh thu',
      description: 'Tự động hóa bán hàng giúp nhân viên chốt đơn nhanh hơn và chính xác hơn.',
      iconName: 'TrendingUp',
      category: 'growth',
    },
    {
      id: 'b2',
      title: 'Đơn hàng Real-time',
      description: 'Ghi nhận đơn hàng ngay tại điểm bán, đồng bộ tức thì về kho bãi và kế toán.',
      iconName: 'ShoppingCart',
      category: 'growth',
    },
    {
      id: 'b3',
      title: 'Quản lý khách hàng',
      description: 'Lưu trữ lịch sử giao dịch, thói quen mua sắm để chăm sóc chuyên nghiệp hơn.',
      iconName: 'Users',
      category: 'management',
    },
    {
      id: 'b4',
      title: 'Giám sát GPS',
      description: 'Theo dõi lộ trình di chuyển và thời gian làm việc của nhân viên thị trường.',
      iconName: 'management', // Wait, MapPin
      category: 'management',
    },
    {
      id: 'b5',
      title: 'Báo cáo tức thì',
      description: 'Hệ thống báo cáo BI thông minh, giúp nhà quản lý ra quyết định kịp thời.',
      iconName: 'BarChart3',
      category: 'cost',
    },
    {
      id: 'b6',
      title: 'Chấm công di động',
      description: 'Check-in/out tại điểm bán bằng hình ảnh và tọa độ GPS thực tế.',
      iconName: 'UserCheck',
      category: 'management',
    },
    {
      id: 'b7',
      title: 'Quản lý tuyến',
      description: 'Tối ưu hóa hành trình thăm viếng khách hàng hằng ngày cho nhân viên.',
      iconName: 'Route',
      category: 'management',
    },
    {
      id: 'b8',
      title: 'Tiết kiệm chi phí',
      description: 'Giảm thiểu sai sót thủ công và chi phí in ấn, liên lạc truyền thống.',
      iconName: 'PiggyBank',
      category: 'cost',
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-primary" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-8 h-8 text-primary" />;
      case 'Users':
        return <Users className="w-8 h-8 text-primary" />;
      case 'BarChart3':
        return <BarChart3 className="w-8 h-8 text-primary" />;
      case 'UserCheck':
        return <UserCheck className="w-8 h-8 text-primary" />;
      case 'Route':
        return <Route className="w-8 h-8 text-primary" />;
      case 'PiggyBank':
        return <PiggyBank className="w-8 h-8 text-primary" />;
      default:
        return <MapPin className="w-8 h-8 text-primary" />;
    }
  };

  const filteredBenefits = activeFilter === 'all' 
    ? benefits 
    : benefits.filter(b => b.category === activeFilter);

  const filters = [
    { label: 'Tất cả lợi ích', value: 'all' },
    { label: 'Doanh thu & Đơn hàng', value: 'growth' },
    { label: 'Vận hành & Giám sát', value: 'management' },
    { label: 'Tối ưu chi phí & BI', value: 'cost' },
  ];

  return (
    <section id="benefits" className="py-20 bg-white relative scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8FAFC]/30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-sans text-3xl md:text-4.5xl font-extrabold text-on-surface tracking-tight mb-4">
            Lợi ích vượt trội
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant">
            Giải pháp tối ưu hóa toàn diện mọi quy trình kinh doanh của doanh nghiệp bán lẻ và phân phối.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-250 cursor-pointer ${
                activeFilter === f.value
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-100 hover:bg-gray-200 text-on-surface-variant'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBenefits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#E8F5FD] rounded-full flex items-center justify-center mb-5 border border-[#CDE5F7] transition-transform duration-300 hover:rotate-6">
                {renderIcon(item.iconName)}
              </div>
              <h3 className="font-sans text-lg font-bold text-gray-900 mb-2.5">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
