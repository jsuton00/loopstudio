import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { creations } from './assets/data/creations';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SupportPage from './pages/SupportPage';
import './styles/app.css';

const App = () => {
	const products = creations;

	return (
		<div id="app" className="app container-fluid">
			<Header />
			<Main>
				<Switch>
					<Route exact path="/">
						<HomePage products={products} />
					</Route>
					<Route exact path="/about">
						<AboutPage />
					</Route>
					<Route exact path="/careers">
						<CareersPage />
					</Route>
					<Route exact path="/events">
						<EventsPage />
					</Route>
					<Route exact path="/products">
						<ProductsPage />
					</Route>
					<Route exact path="/support">
						<SupportPage />
					</Route>
				</Switch>
			</Main>
			<Footer />
		</div>
	);
};

export default App;
