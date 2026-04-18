"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Địa chỉ",
    value: "TDP Trung Quân, phường Tiên Phong, TP Phổ Yên, Tỉnh Thái Nguyên",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Điện thoại",
    value: "+84 938 396 888",
    href: "tel:+84938396888",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    value: "thotv@blgroup.com.vn",
    href: "mailto:thotv@blgroup.com.vn",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Giờ làm việc",
    value: "Thứ 2 – Thứ 7: 7:30 – 17:00",
  },
];

export default function LienHePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative dark-section text-white section-padding !pt-20">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-custom relative z-10 max-w-3xl">
          <ScrollAnimation>
            <span className="text-[var(--color-warm)] font-semibold text-sm uppercase tracking-wider">
              Liên hệ
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Hãy liên hệ để được tư vấn giải pháp sản xuất may mặc phù hợp nhất
              cho doanh nghiệp của bạn.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-[var(--color-bg-alt)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollAnimation direction="left">
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  Thông tin liên hệ
                </h2>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4 items-start group">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] shrink-0 group-hover:bg-[var(--color-accent)]/20 transition-colors duration-200">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[var(--color-text-muted)] mb-0.5 uppercase tracking-wider">
                          {info.title}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium text-[var(--color-primary)]">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+84938396888"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-xl hover:bg-[var(--color-accent-light)] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Gọi ngay
                  </a>
                  <a
                    href="mailto:thotv@blgroup.com.vn"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--color-border)] text-[var(--color-text)] text-sm font-semibold rounded-xl hover:bg-[var(--color-bg)] hover:border-[var(--color-accent)] transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Gửi email
                  </a>
                </div>

                {/* Map */}
                <div className="mt-8 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29735.54!2d105.85!3d21.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31352e5c3e5e5e5d%3A0x1234567890abcdef!2zUGjhu5UgWcOqbiwgVGjDoWkgTmd1ecOqbg!5e0!3m2!1svi!2svn!4v1710000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vị trí BLG trên bản đồ"
                    className="grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
              </ScrollAnimation>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollAnimation direction="right">
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                    Gửi yêu cầu
                  </h2>
                  <p className="text-[var(--color-text-light)] mb-8">
                    Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong vòng 24h.
                  </p>

                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5 animate-[slide-up_0.4s_ease]">
                        <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                        Gửi thành công!
                      </h3>
                      <p className="text-[var(--color-text-light)]">
                        Chúng tôi sẽ liên hệ lại sớm nhất có thể.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">
                            Họ và tên <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Nguyễn Văn A"
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="form-label">
                            Số điện thoại <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="0123 456 789"
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            placeholder="email@company.com"
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="form-label">Công ty</label>
                          <input
                            type="text"
                            placeholder="Tên công ty"
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Sản phẩm quan tâm</label>
                        <select className="form-input bg-white">
                          <option value="">-- Chọn sản phẩm --</option>
                          <option value="khau-trang">Khẩu trang y tế</option>
                          <option value="ao-khoac">Áo khoác</option>
                          <option value="ao-phao">Áo phao</option>
                          <option value="dong-phuc">Đồng phục</option>
                          <option value="the-thao">Quần áo thể thao</option>
                          <option value="khac">Sản phẩm khác</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">
                          Nội dung <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Mô tả yêu cầu sản xuất, số lượng, thời gian, chất liệu mong muốn..."
                          className="form-input resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold rounded-xl shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Gửi yêu cầu
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>

                      <p className="text-xs text-center text-[var(--color-text-muted)]">
                        Thông tin của bạn được bảo mật tuyệt đối. BLG cam kết không chia sẻ cho bên thứ ba.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
