import { useState } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  Building2,
  CreditCard,
  QrCode,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  FileSpreadsheet,
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';

interface RegistrationFlowProps {
  onCopyNotice: (msg: string) => void;
}

export default function RegistrationFlow({ onCopyNotice }: RegistrationFlowProps) {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedContent, setCopiedContent] = useState(false);
  const [showEmbeddedForm, setShowEmbeddedForm] = useState(false);
  
  // Confirmation state
  const [isConfirmedCheckbox, setIsConfirmedCheckbox] = useState(false);
  const [hasSubmittedConfirmation, setHasSubmittedConfirmation] = useState(false);

  // Optional quick helper for name + phone in syntax
  const [teacherName, setTeacherName] = useState('');
  const [teacherPhone, setTeacherPhone] = useState('');

  const GOOGLE_FORM_URL = 'https://forms.gle/kV3Dh231XLyxGd6M8';
  const ZALO_GROUP_URL = 'https://zalo.me/g/rhpd0kjku1sdy0wlmdxe';
  const BANK_NAME = 'MB';
  const ACCOUNT_NUMBER = '33962571826';
  const DISCOUNT_AMOUNT = '499.000Đ';

  // Dynamic or default transfer message
  const generatedContent = teacherName.trim() && teacherPhone.trim()
    ? `${teacherName.trim().toUpperCase()} ${teacherPhone.trim()} WEBSITE`
    : 'HỌ TÊN + SĐT + WEBSITE';

  const qrImageUrl = `https://img.vietqr.io/image/MB-33962571826-compact2.png?amount=499000&addInfo=${encodeURIComponent(
    teacherName.trim() && teacherPhone.trim()
      ? `${teacherName.trim()} ${teacherPhone.trim()} WEBSITE`
      : 'HO TEN SDT WEBSITE'
  )}`;

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      setCopiedAccount(true);
      onCopyNotice('Đã sao chép số tài khoản: 33962571826');
      setTimeout(() => setCopiedAccount(false), 2500);
    } catch {
      onCopyNotice('Sao chép: 33962571826');
    }
  };

  const handleCopyContent = async () => {
    const textToCopy = teacherName.trim() && teacherPhone.trim()
      ? `${teacherName.trim().toUpperCase()} ${teacherPhone.trim()} WEBSITE`
      : 'HO TEN SDT WEBSITE';
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedContent(true);
      onCopyNotice(`Đã sao chép nội dung: ${textToCopy}`);
      setTimeout(() => setCopiedContent(false), 2500);
    } catch {
      onCopyNotice(`Nội dung: ${textToCopy}`);
    }
  };

  const handleConfirmTransfer = () => {
    if (!isConfirmedCheckbox) {
      alert('Vui lòng tích chọn ô xác nhận đã hoàn thành chuyển khoản học phí trước khi bấm.');
      return;
    }
    setHasSubmittedConfirmation(true);
  };

  return (
    <section id="dang-ky" className="py-16 md:py-24 bg-slate-50 relative scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span>Quy trình 4 bước đơn giản</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ĐĂNG KÝ KHÓA HỌC
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Vui lòng điền thông tin đăng ký trước khi thực hiện chuyển khoản.
          </p>
        </div>

        {/* Step Flow Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-center shadow-xs">
            <span className="text-xs font-bold text-blue-600 block">BƯỚC 1</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Điền Form</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-center shadow-xs">
            <span className="text-xs font-bold text-blue-600 block">BƯỚC 2</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Chuyển khoản</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-center shadow-xs">
            <span className="text-xs font-bold text-blue-600 block">BƯỚC 3</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Xác nhận</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-emerald-300 bg-emerald-50/50 text-center shadow-xs">
            <span className="text-xs font-bold text-emerald-700 block">BƯỚC 4</span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-900">Vào nhóm Zalo</span>
          </div>
        </div>

        {/* ================= STEP 1: FORM REGISTRATION ================= */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 sm:p-9 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              1
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Bước 1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                ĐIỀN FORM ĐĂNG KÝ
              </h3>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base mb-6">
            Vui lòng điền thông tin đăng ký trước khi thực hiện chuyển khoản. Thông tin của Thầy/Cô được bảo mật và dùng để xác nhận quyền truy cập tài liệu và nhóm học.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              id="google-form-open-btn"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base sm:text-lg shadow-md shadow-blue-500/20 hover:shadow-lg transition-all text-center cursor-pointer"
            >
              <FileSpreadsheet className="w-5 h-5" />
              <span>ĐIỀN FORM ĐĂNG KÝ</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              id="toggle-embed-form-btn"
              type="button"
              onClick={() => setShowEmbeddedForm(!showEmbeddedForm)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {showEmbeddedForm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showEmbeddedForm ? 'Thu gọn biểu mẫu' : 'Xem form trực tiếp tại đây'}</span>
            </button>
          </div>

          {/* Embedded Google Form Option */}
          {showEmbeddedForm && (
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="p-3 bg-blue-50 rounded-xl text-xs text-blue-800 font-medium mb-3 flex items-center justify-between">
                <span>Biểu mẫu Google Form chính thức</span>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-blue-600 hover:text-blue-800"
                >
                  Mở thẻ mới nếu không hiển thị đầy đủ
                </a>
              </div>
              <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdO7i2d1hP_Qz-XgP7_Y68a_fBq2rO2_fV7A_Example/viewform?embedded=true"
                  title="Google Form Đăng Ký Khóa Học"
                  className="w-full h-full border-0"
                  onError={() => console.log('iframe fallback')}
                >
                  Đang tải biểu mẫu đăng ký...
                </iframe>
              </div>
            </div>
          )}

        </div>

        {/* ================= STEP 2: BANK TRANSFER ================= */}
        <div id="thanh-toan" className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 sm:p-9 mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              2
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Bước 2</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                BƯỚC 2 – CHUYỂN KHOẢN HỌC PHÍ
              </h3>
            </div>
          </div>

          {/* Large Transfer Details Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-blue-100 p-5 sm:p-7">
            
            {/* Left: Text Information & Copy Buttons */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Bank row */}
              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Ngân hàng</span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">{BANK_NAME} (Ngân hàng Quân Đội)</span>
                  </div>
                </div>
              </div>

              {/* Account number row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Số tài khoản</span>
                    <span className="text-xl sm:text-2xl font-black text-blue-700 font-mono tracking-wider">
                      {ACCOUNT_NUMBER}
                    </span>
                  </div>
                </div>

                <button
                  id="copy-account-number-btn"
                  type="button"
                  onClick={handleCopyAccount}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs sm:text-sm transition-colors border border-blue-200 cursor-pointer"
                >
                  {copiedAccount ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedAccount ? 'ĐÃ SAO CHÉP!' : 'SAO CHÉP SỐ TÀI KHOẢN'}</span>
                </button>
              </div>

              {/* Discount Amount row */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Số tiền ưu đãi</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-orange-600">
                    {DISCOUNT_AMOUNT}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                  Đã áp dụng giảm 500K
                </span>
              </div>

              {/* Transfer Syntax row */}
              <div className="p-4 bg-white rounded-xl border-2 border-dashed border-amber-300 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">Nội dung chuyển khoản:</span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-sm">Bắt buộc đúng cú pháp</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 text-amber-400 font-mono font-bold text-sm sm:text-base tracking-wide text-center select-all">
                  {generatedContent}
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Ví dụ minh họa: <span className="font-bold text-slate-700">NGUYEN VAN A 0912345678 WEBSITE</span>
                </div>

                {/* Quick Helper inputs for teacher */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-xs text-slate-600 block">
                    Thầy/Cô có thể nhập nhanh Tên & SĐT để tạo cú pháp chính xác:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Họ và tên Thầy/Cô"
                      value={teacherName}
                      onChange={(e) => setTeacherName(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-500 bg-slate-50"
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      value={teacherPhone}
                      onChange={(e) => setTeacherPhone(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-500 bg-slate-50"
                    />
                  </div>
                </div>

                <button
                  id="copy-transfer-note-btn"
                  type="button"
                  onClick={handleCopyContent}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                >
                  {copiedContent ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedContent ? 'ĐÃ SAO CHÉP CÚ PHÁP!' : 'SAO CHÉP NỘI DUNG CHUYỂN KHOẢN'}</span>
                </button>
              </div>

              {/* Warning note */}
              <div className="flex items-start gap-2 text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200/80">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="font-medium">
                  Vui lòng nhập đúng nội dung chuyển khoản để thuận tiện cho việc xác nhận đăng ký.
                </p>
              </div>

            </div>

            {/* Right: VietQR Code Preview */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/80 text-center shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                <QrCode className="w-4 h-4 text-blue-600" />
                <span>Quét mã VietQR bằng App Ngân hàng</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-xs max-w-[220px]">
                <img
                  src={qrImageUrl}
                  alt="Mã QR chuyển khoản học phí MB 33962571826"
                  className="w-full h-auto rounded-lg object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-medium">
                Mở app ngân hàng bất kỳ (MB, Vietcombank, Techcombank, VPBank,...) quét mã để tự động điền STK và số tiền 499.000Đ.
              </p>
            </div>

          </div>
        </div>

        {/* ================= STEP 3: CONFIRMATION & ZALO UNLOCK ================= */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 sm:p-9">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              3
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Bước 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                XÁC NHẬN ĐÃ CHUYỂN KHOẢN
              </h3>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
            
            {/* Checkbox item */}
            <label className="flex items-start gap-3 cursor-pointer select-none group">
              <input
                id="transfer-confirm-checkbox"
                type="checkbox"
                checked={isConfirmedCheckbox}
                onChange={(e) => setIsConfirmedCheckbox(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                Tôi xác nhận mình đã hoàn thành chuyển khoản học phí.
              </span>
            </label>

            {/* Confirm button */}
            {!hasSubmittedConfirmation ? (
              <button
                id="confirm-transfer-btn"
                type="button"
                onClick={handleConfirmTransfer}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg transition-all cursor-pointer ${
                  isConfirmedCheckbox
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20'
                    : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
                }`}
              >
                <ShieldCheck className="w-5 h-5" />
                <span>TÔI ĐÃ CHUYỂN KHOẢN</span>
              </button>
            ) : (
              /* Success & Zalo Unlock Area */
              <div className="pt-2 space-y-5 animate-fadeIn">
                
                {/* Notice message */}
                <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950">
                  <div className="flex items-center gap-2 font-bold text-lg text-emerald-900 mb-1">
                    <Check className="w-6 h-6 text-emerald-600" />
                    <span>Xác nhận thành công!</span>
                  </div>
                  <p className="text-base font-semibold leading-relaxed">
                    Cảm ơn Thầy/Cô đã đăng ký khóa học. Vui lòng tham gia nhóm Zalo để nhận thông báo và hướng dẫn tiếp theo.
                  </p>
                </div>

                {/* Zalo Button */}
                <div className="pt-2">
                  <a
                    id="join-zalo-group-btn"
                    href={ZALO_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg sm:text-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 transition-all cursor-pointer transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>THAM GIA NHÓM ZALO KHÓA HỌC</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

              </div>
            )}

            {/* Crucial legal/disclaimer note */}
            <p className="text-xs text-slate-500 italic pt-1">
              * Việc bấm xác nhận không thay thế bước kiểm tra giao dịch của người tổ chức khóa học.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
