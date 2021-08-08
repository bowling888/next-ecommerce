import ProductsCarousel from './carousel';
import useSwr from 'swr';
import { server } from '../../utils/server'; 

const ProductsFeatured = () => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data } = useSwr('/api/products', fetcher);


  const fetcher = (server) => fetch(server).then((res) => res.json());
  const { data } = useSwr(server+'/api/Property/getProductList', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>ทรัพย์สินทั้งหมด</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured