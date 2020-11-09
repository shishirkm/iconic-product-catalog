import React from "react";
import SC from "./styles/productListCardStyles";
import PropTypes from "prop-types";
import formatPrice from "../../helpers/formatPrice";
import { redirectTo } from "../../helpers/window";

const ProductListCard = ({ product }) => {

  const goToProductDetails = () => {
    redirectTo(product.link);
  }

  return (
    <SC.Card onClick={goToProductDetails} className="product-list-card">
      <SC.Image 
        className="image" 
        src={product._embedded.images[0].thumbnail} 
        alt={product.name}
      />
      <SC.Brand className="brand">{product._embedded.brand.name}</SC.Brand>
      <SC.Name className="name">{product.name}</SC.Name>
      <SC.Price className="price">{formatPrice(product.price)}</SC.Price>
      <SC.Messaging className="messaging">{product?.messaging?.marketing[0]?.short}</SC.Messaging>
    </SC.Card>
  );
};

ProductListCard.propTypes = {
  product: PropTypes.object,
};

export default ProductListCard;
