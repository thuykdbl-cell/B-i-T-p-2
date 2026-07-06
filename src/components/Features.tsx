import { useState } from 'react';
import { FeatureItem } from '../types';
import {
  Network,
  Package,
  CreditCard,
  Bell,
  RefreshCw,
  LayoutDashboard,
  Smartphone,
  Laptop,
  CheckCircle,
  X,
} from 'lucide-react';

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'f1',
      title: 'Hệ quản trị CRM chuyên sâu',
      description:
        'Quản lý danh sách khách hàng, phân nhóm đối tượng tự động theo doanh số, vị trí, lịch sử chăm sóc và cảnh báo khách hàng có nguy cơ rời bỏ.',
      iconName: 'Network',
      span: 'md:col-span-2 lg:col-span-2',
      badge: 'Bảo mật SSL',
      details: [
        'Tự động phân hạng khách hàng (VIP, Thân thiết, Tiềm năng) theo phễu chuyển đổi.',
        'Lưu vết toàn bộ lịch sử cuộc gọi, tin nhắn, ghi chú thăm viếng của nhân viên.',
        'Gợi ý thời điểm vàng chăm sóc lại dựa trên lịch sử mua hàng định kỳ.',
        'Cảnh báo thông minh khi khách hàng không phát sinh đơn trong 30-60 ngày.',
      ],
    },
    {
      id: 'f2',
      title: 'Kho & Sản phẩm',
      description:
        'Kiểm soát hàng tồn kho thực tế theo thời gian thực, quản lý danh mục sản phẩm đa tầng, lô hàng, hạn sử dụng và cảnh báo hết hàng tự động.',
      iconName: 'Package',
      span: 'md:col-span-1 lg:col-span-1',
      badge: 'Real-time',
      details: [
        'Cập nhật số lượng tồn kho ngay lập tức khi phát sinh đơn hàng tại điểm bán.',
        'Hỗ trợ quản lý nhiều kho hàng, luân chuyển kho nội bộ nhanh chóng.',
        'Quản lý chi tiết hạn sử dụng, cảnh báo xuất trước hàng cận date (FIFO).',
        'Bộ lọc tìm kiếm sản phẩm thông minh bằng mã vạch (Barcode/QR code).',
      ],
    },
    {
      id: 'f3',
      title: 'Công nợ & Thanh toán',
      description:
        'Theo dõi công nợ chi tiết của từng đối tác khách hàng, hỗ trợ tính năng thu hộ tiền mặt và đối soát công nợ tự động ngay trên di động.',
      iconName: 'CreditCard',
      span: 'md:col-span-1 lg:col-span-1',
      badge: 'Độ chính xác 100%',
      details: [
        'Tự động đối chiếu hóa đơn và hạn thanh toán, gửi nhắc nợ qua SMS/Zalo.',
        'Nhân viên thị trường trực tiếp thu tiền, cập nhật trạng thái thu hộ tức thì.',
        'Hỗ trợ thanh toán không dùng tiền mặt qua QR Code động cực kỳ tiện lợi.',
        'Báo cáo dòng tiền thu hồi theo ngày, tuần, tháng cho kế toán trưởng.',
      ],
    },
    {
      id: 'f4',
      title: 'Thông báo Push thông minh',
      description:
        'Gửi thông báo tự động về chương trình khuyến mãi mới, chỉ tiêu doanh số tuần/tháng, hay các tin tức nội bộ khẩn cấp tới toàn bộ đội ngũ.',
      iconName: 'Bell',
      span: 'md:col-span-1 lg:col-span-1',
      badge: 'Tốc độ < 1s',
      details: [
        'Gửi ưu đãi cá nhân hóa đến đúng nhóm khách hàng mục tiêu.',
        'Nhắc nhở nhân viên thị trường hoàn thành chỉ tiêu doanh số ngày ngay trên thanh thông báo.',
        'Hỗ trợ định dạng thông báo đa phương tiện (Hình ảnh, CTA, Video sản phẩm).',
        'Thống kê tỷ lệ đọc và tương tác với thông báo thời gian thực.',
      ],
    },
    {
      id: 'f5',
      title: 'Đồng bộ đa nền tảng',
      description:
        'Hoạt động mượt mà, đồng nhất trên cả Android và iOS. Mọi luồng dữ liệu đều được mã hóa tối cao và đồng bộ liên tục với hệ thống ERP trung tâm.',
      iconName: 'RefreshCw',
      span: 'md:col-span-2 lg:col-span-2',
      badge: 'Offline Mode',
      details: [
        'Hỗ trợ tạo đơn hàng ngay cả khi mất kết nối mạng, tự động đồng bộ khi có Internet.',
        'Tương thích hoàn hảo với mọi kích thước màn hình từ điện thoại đến máy tính bảng.',
        'Kết nối mượt mà với các hệ thống ERP lớn như SAP, Oracle, Microsoft Dynamics.',
        'Tối ưu hóa dung lượng pin và băng thông mạng 3G/4G cho nhân viên di chuyển ngoài đường.',
      ],
    },
    {
      id: 'f6',
      title: 'Dashboard BI Trực quan',
      description:
        'Trực quan hóa mọi dữ liệu kinh doanh, doanh số bán hàng, hiệu suất của từng nhân viên qua các biểu đồ phân tích sống động và báo cáo đa chiều.',
      iconName: 'LayoutDashboard',
      span: 'md:col-span-1 lg:col-span-1',
      badge: 'Thông minh',
      details: [
        'Biểu đồ nhiệt biểu diễn phân bố doanh số và khách hàng trên bản đồ thực tế.',
        'Xếp hạng tự động nhân viên kinh doanh xuất sắc theo ngày/tuần/tháng.',
        'Báo cáo dự phóng doanh số dựa trên dữ liệu lịch sử và xu hướng thị trường.',
        'Xuất file báo cáo đa định dạng (PDF, Excel, Powerpoint) chỉ với 1 chạm.',
      ],
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Network':
        return <Network className="w-8 h-8 text-primary" />;
      case 'Package':
        return <Package className="w-8 h-8 text-primary" />;
      case 'CreditCard':
        return <CreditCard className="w-8 h-8 text-primary" />;
      case 'Bell':
        return <Bell className="w-8 h-8 text-primary" />;
      case 'RefreshCw':
        return <RefreshCw className="w-8 h-8 text-primary" />;
      default:
        return <LayoutDashboard className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl md:text-4.5xl font-extrabold text-on-surface tracking-tight mb-4">
            Tính năng mạnh mẽ
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant">
            Công cụ tối tân, toàn diện để số hóa và nâng cao năng lực vận hành cho các doanh nghiệp phân phối và bán lẻ.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              onClick={() => setSelectedFeature(feat)}
              className={`${feat.span || ''} bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 transition-transform duration-300 group-hover:scale-110">
                    {getIcon(feat.iconName)}
                  </div>
                  {feat.badge && (
                    <span className="bg-primary/5 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full border border-primary/10">
                      {feat.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-sans text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-gray-100">
                {feat.id === 'f1' && (
                  <div className="flex gap-2">
                    <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">Phân nhóm KH</span>
                    <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">Tương tác</span>
                  </div>
                )}
                {feat.id === 'f5' && (
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-600 bg-slate-100 px-2 py-1 rounded">
                      <Smartphone className="w-3 h-3" /> Android & iOS
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-600 bg-slate-100 px-2 py-1 rounded">
                      <Laptop className="w-3 h-3" /> Web Admin
                    </span>
                  </div>
                )}
                <span className="text-xs font-bold text-primary group-hover:translate-x-1.5 transition-transform flex items-center gap-1 ml-auto">
                  Xem chi tiết &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Details Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-250">
            {/* Modal Header */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-primary to-vnpt-dark text-white flex justify-between items-center relative">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  {getIcon(selectedFeature.iconName)}
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold">{selectedFeature.title}</h3>
                  <p className="text-xs text-white/80 mt-0.5">Mô-đun quản trị VNPT Mobile Sales</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedFeature(null)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">Tổng quan giải pháp</h4>
                <p className="text-base text-gray-700 leading-relaxed">{selectedFeature.description}</p>
              </div>

              {selectedFeature.details && selectedFeature.details.length > 0 && (
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">Tính năng cốt lõi bổ sung</h4>
                  <ul className="space-y-3.5">
                    {selectedFeature.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => setSelectedFeature(null)}
                className="px-5 py-2.5 bg-white hover:bg-gray-100 border border-gray-200 text-sm font-semibold text-gray-700 rounded-xl transition-all cursor-pointer"
              >
                Đóng lại
              </button>
              <button
                onClick={() => {
                  setSelectedFeature(null);
                  const el = document.getElementById('register');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-primary hover:bg-vnpt-dark text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-primary/10 cursor-pointer"
              >
                Đăng ký tư vấn mô-đun này
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
