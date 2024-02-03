import './CSS/Product.css';
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';


const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
    </div>
  )
}

export default Product