import { useParams } from 'react-router-dom';

import './ProductDetails.css';

function ProductDetails() {
  let { productId } = useParams();

  return (
    <div className="ProductDetails">
      <p>Product with id={productId}</p>
    </div>
  );
}

export default ProductDetails;
