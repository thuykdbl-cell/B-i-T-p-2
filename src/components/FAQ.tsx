import { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Phần mềm có hỗ trợ trên iPhone không?',
      answer:
        'Có. VNPT Mobile Sales hoạt động mượt mà và đồng bộ hoàn hảo trên cả hai nền tảng Android (CH Play) và iOS (App Store), tối ưu tốt nhất trên các thiết bị di động thông dụng.',
    },
    {
      id: 'faq-2',
      question: 'Có thể tích hợp với ERP hiện tại của chúng tôi không?',
      answer:
        'Hệ thống được thiết kế với bộ API mở linh hoạt (RESTful API), sẵn sàng liên thông và tích hợp hai chiều với các hệ thống ERP, quản trị nhân sự, hay phần mềm kế toán phổ biến như SAP, Microsoft Dynamics, Bravo, Misa, Fast...',
    },
    {
      id: 'faq-3',
      question: 'Thời gian triển khai mất bao lâu?',
      answer:
        'Với gói dịch vụ tiêu chuẩn, doanh nghiệp của bạn có thể bắt đầu khởi tạo tài khoản và sử dụng ngay trong vòng 24 giờ. Với các dự án lớn cần may đo thiết kế riêng hoặc tích hợp hệ thống phức tạp, thời gian triển khai sẽ dao động từ 1 đến 4 tuần.',
    },
    {
      id: 'faq-4',
      question: 'Chính sách bảo hành và hỗ trợ kỹ thuật thế nào?',
      answer:
        'VNPT cam kết đồng hành cùng doanh nghiệp 24/7/365 thông qua Tổng đài hỗ trợ khẩn cấp, Email và hệ thống gửi Ticket hỗ trợ trực tuyến. Toàn bộ hệ thống phần mềm được bảo hành trọn đời và cập nhật các phiên bản cải tiến hoàn toàn miễn phí trong suốt quá trình sử dụng.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4.5xl font-extrabold text-on-surface tracking-tight mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-base text-on-surface-variant max-w-xl mx-auto">
            Giải đáp nhanh các thắc mắc phổ biến về tính năng, tích hợp hệ thống và chính sách triển khai của VNPT Mobile Sales.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center text-left p-6 font-sans text-base md:text-lg font-bold text-gray-900 hover:text-primary hover:bg-slate-50/50 transition-all cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5.5 h-5.5 text-primary shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <span className="text-gray-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 transition-transform duration-200" />
                    )}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-on-surface-variant text-sm md:text-base leading-relaxed border-t border-gray-50 bg-slate-50/30 animate-in slide-in-from-top-2 duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
