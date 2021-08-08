import useSwr from 'swr';
import ProductItem from './../../product-item';
import ProductsLoading from './loading';
// import { server } from '../../utils/server'; 

const ProductsContent = () => {

  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error } = useSwr('/api/products', fetcher);

  
 const url = 'https://bfinegroup.com/api-backend';
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr(url+'/api/Property/getProductList', fetcher);

console.log(url);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map(item => (
            <ProductItem 
              discount={item.discount} 
              key={item.id}
              id={item.id} 
              price={item.price}
              currentPrice={item.currentPrice}
              productImage={item.images[0]} 
              name={item.name}
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent