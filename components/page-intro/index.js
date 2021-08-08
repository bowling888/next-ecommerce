import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2></h2>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2></h2>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-3.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2></h2>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-search"></i>
              <div className="data-item__content">
                <h4>บริการ</h4>
                <p>เราเป็นตัวกลางในการติดต่อซื้อ/ขาย/เช่าทรัพย์สิน พร้อมทั้งมีบริการหาทรัพย์ตามที่ผู้ซื้อ/ผู้เช่าต้องการ</p>
              </div>
            </li>
            
            <li>
              <i className="icon-avatar"></i>
              <div className="data-item__content">
                <h4>ทีมงาน</h4>
                <p>เรามีทีมงานมืออาชีพ ในการติดต่อ/ประสานงาน พร้อมทั้งสัญญามาตรฐาน</p>
              </div>
            </li>
            
            <li>
              <i className="icon-happy"></i>
              <div className="data-item__content">
                <h4>Co Agent</h4>
                <p>เรารับ Co Agent เพื่อให้ทรัพย์สินของลูกค้าปิดได้รวดเร็ว</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>ค่าตอบแทน</h4>
                <p>ค่าตอบแทนของเราเป็นราคามาตรฐาน หรือตามตกลง</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro