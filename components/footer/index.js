import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h3>PropertyMost</h3>
            <br/><br/> 
            <p>PropertyMost.com - เว็บไซต์อสังหาริมทรัพย์ของประเทศไทย สำหรับผู้ที่สนใจในอสังหาริมทรัพย์ ไม่ว่าจะเป็นการซื้อ-ขาย-เช่าเพื่ออยู่อาศัย หรือเพื่อการลงทุน 
หรือเป็นนายหน้าที่กำลังมองหาทรัพย์ให้ลูกค้า ก็สามารถติดต่อร่วมงานกับเราได้ เพื่อให้เกิดประโยชน์ร่วมกันทั้งนายหน้า และผู้ซื้อ, ผู้ขายม ผู้เช่า </p>

          </div>

          <div className="site-footer__links">
            <ul>
              <li></li>
            </ul>
            <ul>
              <li></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="tel:+66859249541">Tel : 085-924-9541</a></li>
              <li><a href="mailto:info@propertymost.com?subject=Contact&body=Message">E-Mail : info@propertymost.com</a></li>
              <li><a href="https://line.me/ti/p/~@511gsago" target="_blank">Line ID : @511gsago</a></li>
            </ul>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>PROPERTYMOST.COM - © 2021. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer