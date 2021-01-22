import React from 'react';
import '../styles/components/productCards.css';

const ProductCard = (props) => {
	const { productId, product } = props;
	return (
		<div id={productId} className="product-card card" value={productId}>
			<img
				src={product.image}
				alt={product.name}
				className="product-img card-img-top"
			/>
			<div className="product-card-body card-body">
				<h5 className="product-title card-title">{product.name}</h5>
			</div>
		</div>
	);
};

export default ProductCard;
