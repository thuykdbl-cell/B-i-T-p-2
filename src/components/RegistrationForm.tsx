import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { InscriptionFormData } from '../types';
import { Phone, Mail, CheckCircle2, Loader2, Sparkles, AlertCircle } from 'lucide-react';

interface RegistrationFormProps {
  selectedPlanId: string;
}

export default function RegistrationForm({ selectedPlanId }: RegistrationFormProps) {
  const [formData, setFormData] = useState<InscriptionFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    selectedPlan: 'business',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InscriptionFormData | null>(null);
  const [refCode, setRefCode] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof InscriptionFormData, string>>>({});

  // Synchronize chosen plan from parent state
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, selectedPlan: selectedPlanId }));
    }
  }, [selectedPlanId]);

  const validateForm = () => {
    const tempErrors: Partial<Record<keyof InscriptionFormData, string>> = {};
    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Vui lòng nhập họ và tên của bạn';
    }
    
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (!formData.phoneNumber.trim()) {
      tempErrors.phoneNumber = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s+/g, ''))) {
      tempErrors.phoneNumber = 'Số điện thoại không đúng định dạng (VD: 0888000999)';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Địa chỉ email không hợp lệ';
      }
    }

    if (!formData.companyName.trim()) {
      tempErrors.companyName = 'Vui lòng nhập tên doanh nghiệp hoặc cửa hàng';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InscriptionFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API registration call
    setTimeout(() => {
      // Generate a realistic ticket confirmation reference code
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      setRefCode(`VNPT-REG-${randomNum}-MS`);
      setSubmittedData(formData);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      companyName: '',
      selectedPlan: 'business',
      notes: '',
    });
  };

  const planLabels: Record<string, string> = {
    starter: 'Gói Starter (299k/tháng)',
    business: 'Gói Business (699k/tháng) - Khuyên dùng',
    professional: 'Gói Professional (Liên hệ)',
    enterprise: 'Gói Enterprise (Tùy biến)',
  };

  return (
    <section id="register" className="py-20 bg-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row gap-12 border border-white/40 bg-white/40 relative overflow-hidden">
          
          {/* Background glowing shape */}
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-vnpt-blue/5 blur-[100px] rounded-full" />

          {/* Left info column */}
          <div className="flex-1 space-y-6 relative z-10 text-left">
            <h2 className="font-sans text-3xl md:text-4.5xl font-extrabold text-on-surface leading-tight">
              Bắt đầu số hóa doanh nghiệp ngay hôm nay
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
              Để lại thông tin liên hệ, chuyên viên cao cấp của VNPT sẽ liên hệ tư vấn lộ trình triển khai chi tiết và gửi báo giá ưu đãi tối ưu nhất cho đặc thù ngành hàng của bạn.
            </p>

            <div className="space-y-6 pt-6 border-t border-gray-200/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <Phone className="w-5.5 h-5.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Hotline Tư vấn 24/7</p>
                  <a href="tel:0888000999" className="font-sans text-xl font-black text-primary hover:underline">
                    0888 000 999
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <Mail className="w-5.5 h-5.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Tiếp Nhận</p>
                  <a href="mailto:contact@vnpt.vn" className="font-sans text-xl font-black text-primary hover:underline">
                    contact@vnpt.vn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="flex-1 relative z-10">
            {submittedData ? (
              /* Success Screen */
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-150/80 flex flex-col items-center text-center animate-in zoom-in-95 duration-250">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <h3 className="font-sans text-2xl font-black text-gray-900 mb-2">Đăng ký thành công!</h3>
                <p className="text-sm text-emerald-600 font-bold mb-6 flex items-center gap-1 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
                  <Sparkles className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  Mã số xác nhận: {refCode}
                </p>

                <div className="w-full text-left bg-slate-50 rounded-2xl p-6 border border-gray-100 space-y-3.5 mb-8 text-sm">
                  <div className="border-b border-gray-200/50 pb-2 flex justify-between">
                    <span className="text-gray-400 font-medium">Khách hàng:</span>
                    <span className="text-gray-900 font-bold">{submittedData.fullName}</span>
                  </div>
                  <div className="border-b border-gray-200/50 pb-2 flex justify-between">
                    <span className="text-gray-400 font-medium">Số điện thoại:</span>
                    <span className="text-gray-900 font-bold">{submittedData.phoneNumber}</span>
                  </div>
                  {submittedData.email && (
                    <div className="border-b border-gray-200/50 pb-2 flex justify-between">
                      <span className="text-gray-400 font-medium">Email:</span>
                      <span className="text-gray-900 font-bold">{submittedData.email}</span>
                    </div>
                  )}
                  <div className="border-b border-gray-200/50 pb-2 flex justify-between">
                    <span className="text-gray-400 font-medium">Doanh nghiệp:</span>
                    <span className="text-gray-900 font-bold">{submittedData.companyName}</span>
                  </div>
                  <div className="pb-1 flex justify-between">
                    <span className="text-gray-400 font-medium">Gói tư vấn:</span>
                    <span className="text-primary font-bold">{planLabels[submittedData.selectedPlan] || submittedData.selectedPlan}</span>
                  </div>
                </div>

                <p className="text-xs text-on-surface-variant max-w-sm mb-6 leading-relaxed">
                  Chuyên viên hỗ trợ chuyển đổi số của VNPT sẽ liên hệ trực tiếp với anh/chị qua số điện thoại <span className="font-bold text-gray-900">{submittedData.phoneNumber}</span> trong vòng 15 phút tới. Xin cảm ơn!
                </p>

                <button
                  onClick={handleReset}
                  className="w-full bg-primary hover:bg-[#004e75] text-white font-sans text-sm font-bold py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
                >
                  Tạo yêu cầu tư vấn mới
                </button>
              </div>
            ) : (
              /* Regular Lead Capture Form */
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-150/80 text-left">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Họ và tên */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên của bạn"
                      className={`w-full bg-[#F8FAFC] p-3.5 rounded-xl border ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'
                      } text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Số điện thoại & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Nhập số điện thoại"
                        className={`w-full bg-[#F8FAFC] p-3.5 rounded-xl border ${
                          errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'
                        } text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Địa chỉ Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Nhập địa chỉ email"
                        className={`w-full bg-[#F8FAFC] p-3.5 rounded-xl border ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'
                        } text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tên công ty / Cửa hàng */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Tên công ty / Cửa hàng <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Nhập tên doanh nghiệp / hộ kinh doanh"
                      className={`w-full bg-[#F8FAFC] p-3.5 rounded-xl border ${
                        errors.companyName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'
                      } text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* Dropdown Gói dịch vụ */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Gói dịch vụ cần tư vấn
                    </label>
                    <select
                      name="selectedPlan"
                      value={formData.selectedPlan}
                      onChange={handleChange}
                      className="w-full bg-[#F8FAFC] p-3.5 rounded-xl border border-gray-200 focus:ring-primary text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="starter">Gói Starter (Từ 299k/tháng)</option>
                      <option value="business">Gói Business (Từ 699k/tháng) - Phổ biến</option>
                      <option value="professional">Gói Professional (Liên hệ doanh nghiệp)</option>
                      <option value="enterprise">Gói Enterprise (May đo chuyên sâu)</option>
                    </select>
                  </div>

                  {/* Nhu cầu cần tư vấn */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Mô tả nhu cầu cụ thể
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Mô tả sơ qua về nhu cầu, quy mô đội ngũ thị trường, ngành hàng kinh doanh của doanh nghiệp..."
                      rows={3}
                      className="w-full bg-[#F8FAFC] p-3.5 rounded-xl border border-gray-200 focus:ring-primary text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-[#004e75] disabled:bg-primary/50 text-white font-sans text-base font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Đang gửi yêu cầu...
                      </>
                    ) : (
                      'Nhận tư vấn miễn phí ngay'
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
