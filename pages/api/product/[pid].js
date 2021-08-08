// fake data
import products from '../../../utils/data/products';
// import { server } from '../../utils/server'; 

export default (req, res) => {
  const {
    query: { pid },
  } = req


  // const products = await fetch(`${server}/api/Property/getProductList`);
  // const products = await res.json();

  const product = products.find(x => x.id === pid);
  res.status(200).json(product);
}
