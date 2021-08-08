import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
// import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>ขาย-เช่า</h3>
              <a href="#" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>ขายดาวน์</h3>
              <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>ผู้ซื้อหาทรัพย์</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>ทำไมคุณถึงต้องเลือกเรา ?</h4>
          </header>

          <ul className="shop-data-items">
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
      </section>

      <ProductsFeatured />
      <Footer />
    </Layout>
  )
}


export default IndexPage