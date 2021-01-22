import React from 'react';
import { useHistory } from 'react-router';
import InteractiveHero from '../components/InteractiveHero';
import PageSection from '../components/layout/PageSection';
import ProductCard from '../components/ProductCards';
import '../styles/pages/homePage.css';

const HomePage = (props) => {
	const { products } = props;
	let history = useHistory();

	const goToProductsPage = () => {
		return history.push('/products');
	};

	return (
		<div id="home-page" className="home-page container-fluid">
			<PageSection className="interactive-section">
				<InteractiveHero />
			</PageSection>
			<PageSection className="creation-section">
				<h3 className="creation-section-title row">
					Our Creations
					<button
						id="btnSeeAll"
						name="btnSeeAll"
						type="button"
						className="see-all"
						onClick={goToProductsPage}
					>
						See All
					</button>
				</h3>
				<div className="products-cards row">
					{products.length > 0 &&
						products.map((p, i) => {
							return <ProductCard key={i} productId={i + 1} product={p} />;
						})}
				</div>
			</PageSection>
		</div>
	);
};

export default HomePage;
