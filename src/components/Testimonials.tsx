import { TestimonialItem } from '../types';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: 't1',
      name: 'Nguyễn Văn An',
      role: 'Giám đốc',
      company: 'ABC Food',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4zzaPl4kU_yMlUlPa8Nwi5zoD5rdYb3gtFCOptaUgsRX-hnjlWmPXBpk-pod_eP-mtyZaos9bRHKIrY8DgosU4T4JGXBha-Jka9L36Y8MlB6OI0yOfJz51mi39WKnUjrFOOLiVUSoLDTyjK2KR6nIjdh2HpEaG8LSOImCGIAC7_2U4lsvaerZ1htf79m4nWhOVSHSbFFbz1XJZ2dN045cf5kJ2iy58VKfticTW45XxG0O1O1EOjw',
      rating: 5,
      content:
        'Từ khi áp dụng VNPT Mobile Sales, việc quản lý đội ngũ 50 nhân viên thị trường của chúng tôi trở nên cực kỳ dễ dàng. Doanh thu tăng trưởng rõ rệt.',
    },
    {
      id: 't2',
      name: 'Trần Thị Bích',
      role: 'TP. Kinh doanh',
      company: 'MyCosmetics',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCNTYisEkZ4HavRQGY4Fn3Fa_DGk1om-vHJV07Z8cxFQTTwsvYDXF3CjtHEfPMiJVJ9IWQSaRg-Elzw1tyuxJBvdw_bhuGCiofAoixGBD9Va_1fTV3oegbX6r6ZlrLtCnQHmFpODDFSUIe1hp3Dk4eQczTLCmYgD_L9ebYYAF3-UCS9JQR6DAu8HHAuefyIvEdaFe2C7J_gdHEEWpYqSbqvcQkU5qcBZse704s-ewawBml1VcPCnR0',
      rating: 5,
      content:
        'Hệ thống đồng bộ dữ liệu rất nhanh. Nhân viên check-in tại điểm bán giúp tôi hoàn toàn yên tâm về sự trung thực và hiệu quả công việc.',
    },
    {
      id: 't3',
      name: 'Lê Hoàng Nam',
      role: 'COO',
      company: 'Logistics Việt',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA4IZBaeI6jI8O81zndTZ4KHP_MrgCZBvBDA-Q8Fg3TZG107MYrDebpXi8uCS_9mjU23OUeJHCbAhrUsBHEWn7m8sCTQ1-9jsZAXjZkuv8g0R94Uw60fd-R4RZMY7ZtODm6Mvxr_CtLzemub3Hf-ao42MR8BEvvdMKcamob-rxOGMsxpvkTJ-s9Ah_fTLH19BaQ-9LZdAa44ffyI77WCSejEh_sD6PKTd_9BCXcEFbLZsOztwqP1M8',
      rating: 5,
      content:
        'Hỗ trợ kỹ thuật của VNPT rất nhiệt tình. Quy trình triển khai chuyên nghiệp và bài bản, giúp chúng tôi nhanh chóng làm chủ công nghệ.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl md:text-4.5xl font-extrabold text-on-surface tracking-tight mb-4">
            Khách hàng nói về chúng tôi
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant">
            Sự thành công và tin tưởng của hơn 1000+ doanh nghiệp trên khắp cả nước là cam kết chất lượng của VNPT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-gray-150 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-vnpt-orange gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-vnpt-orange" />
                  ))}
                </div>
                
                <p className="text-sm md:text-base italic text-gray-700 leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                <img
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/10 shadow-sm"
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  src={t.avatarUrl}
                />
                <div>
                  <h4 className="font-sans font-bold text-gray-900 text-base">{t.name}</h4>
                  <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                    {t.role} - <span className="font-bold text-primary">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
