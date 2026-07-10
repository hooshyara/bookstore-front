import React from 'react';
import styles from "./reluse.module.css";


const Rules= () => {
  const privacyItems = [
    'مدت زمان ماندگاری در صفحات',
    'کتاب‌های خوانده شده',
    'موقعیت جغرافیایی',
    'سبک مورد علاقه',
    'میزان مطالعه در روز، هفته و ماه'
  ];

  return (
    <div className={`${styles.rules} bg-light rtl`} style={{ backgroundColor: '#F7F8FA', minHeight: '100vh' }}>
      <div className="container py-5">
       

        {/* Page Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="display-5 fw-bold" style={{ color: '#2D3748' }}>
              شرایط و قوانین
            </h1>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div 
              className="card shadow-sm border-0 position-relative overflow-hidden"
              style={{ borderRadius: '16px' }}
            >
              <div className="card-body p-4 p-md-5">
                {/* Rules Content */}
                <div className="mb-4">
                  <h4 className="fw-bold" style={{ color: '#2D3748' }}>حقوق مؤلف</h4>
                  <p className="text-secondary lh-lg mb-0">
                    تمامی محتوای ارائه شده در این سرویس، شامل کتاب‌ها، مقالات، و سایر مطالب، 
                    تحت حمایت قوانین حقوق مؤلف قرار دارند. هرگونه کپی‌برداری، توزیع، یا استفاده 
                    تجاری از محتوا بدون کسب مجوز کتبی از صاحبان حقوق، ممنوع بوده و پیگرد قانونی دارد.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="fw-bold" style={{ color: '#2D3748' }}>شرایط استفاده از سرویس</h4>
                  <p className="text-secondary lh-lg mb-0">
                    کاربران موظف به رعایت قوانین و مقررات استفاده از سرویس هستند. استفاده از این 
                    سرویس به معنای پذیرش کامل تمامی شرایط و قوانین ذکر شده است. هرگونه سوءاستفاده 
                    از سرویس، از جمله تلاش برای نفوذ، هک، یا ایجاد اختلال در عملکرد سیستم، ممنوع 
                    بوده و موجب مسدود شدن حساب کاربری خواهد شد.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="fw-bold" style={{ color: '#2D3748' }}>ثبت‌نام و خرید اشتراک</h4>
                  <p className="text-secondary lh-lg mb-0">
                    برای استفاده از خدمات ما، کاربران باید ثبت‌نام کرده و اطلاعات دقیق و صحیح را 
                    ارائه دهند. خرید اشتراک به معنای پذیرش تعرفه‌ها و شرایط پرداخت است. امکان لغو 
                    اشتراک در هر زمان وجود دارد، اما مبلغ پرداخت شده برای دوره جاری قابل بازگشت نیست.
                  </p>
                </div>

                <div>
                  <h4 className="fw-bold" style={{ color: '#2D3748' }}>حریم خصوصی</h4>
                  <p className="text-secondary lh-lg mb-3">
                    حریم خصوصی کاربران برای ما از اهمیت بالایی برخوردار است. اطلاعات شخصی شما 
                    تنها برای بهبود تجربه کاربری و ارائه خدمات بهتر جمع‌آوری می‌شود و تحت هیچ 
                    شرایطی به اشخاص ثالث فروخته یا منتقل نمی‌شود. اطلاعاتی که ما جمع‌آوری می‌کنیم شامل:
                  </p>
                  <ul className="text-secondary lh-lg mb-0" style={{ paddingRight: '1.5rem' }}>
                    {privacyItems.map((item, index) => (
                      <li key={index} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Dot Pattern Decoration */}
                <div 
                  className="position-absolute"
                  style={{
                    bottom: '-20px',
                    left: '-20px',
                    width: '200px',
                    height: '200px',
                    backgroundImage: 'radial-gradient(#E2E8F0 1.5px, transparent 1.5px)',
                    backgroundSize: '20px 20px',
                    opacity: 0.4,
                    pointerEvents: 'none',
                    zIndex: 0
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;