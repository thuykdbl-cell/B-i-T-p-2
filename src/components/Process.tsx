import { StepItem } from '../types';

export default function Process() {
  const steps: StepItem[] = [
    {
      number: '01',
      title: 'Tiếp nhận',
      description: 'Lắng nghe nhu cầu, quy mô đội ngũ và khó khăn hiện tại của doanh nghiệp.',
    },
    {
      number: '02',
      title: 'Khảo sát',
      description: 'Chuyên viên VNPT trực tiếp khảo sát quy trình bán hàng và vận hành thực tế.',
    },
    {
      number: '03',
      title: 'Tư vấn',
      description: 'Thiết lập mô hình tối ưu, đề xuất giải pháp & thiết kế lộ trình chuyển đổi số phù hợp.',
    },
    {
      number: '04',
      title: 'Triển khai',
      description: 'Cài đặt phần mềm, phân quyền hệ thống và thiết lập danh mục sản phẩm/tuyến bán hàng.',
    },
    {
      number: '05',
      title: 'Đào tạo',
      description: 'Tổ chức tập huấn hướng dẫn sử dụng chi tiết cho admin và đội ngũ sales thị trường.',
    },
    {
      number: '06',
      title: 'Hỗ trợ trọn đời',
      description: 'Cung cấp hỗ trợ kỹ thuật, xử lý sự cố 24/7 và cập nhật phiên bản phần mềm miễn phí.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl md:text-4.5xl font-extrabold text-on-surface tracking-tight mb-4">
            Quy trình triển khai chuyên nghiệp
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant">
            6 bước đơn giản và chặt chẽ giúp doanh nghiệp của bạn số hóa thành công, hạn chế tối đa rủi ro vận hành.
          </p>
        </div>

        {/* Timeline container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center text-center relative group">
              {/* Connector line on desktop (except last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-0.5 border-t-2 border-dashed border-gray-300 group-hover:border-primary transition-colors duration-300 -z-10" />
              )}

              {/* Step Number Circle */}
              <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center font-sans text-xl font-black text-primary mb-6 shadow-md shadow-primary/5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                {step.number}
              </div>

              {/* Text content */}
              <h4 className="font-sans text-lg font-bold text-gray-900 mb-2 transition-colors duration-200 group-hover:text-primary">
                {step.title}
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
