import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
					<Navbar></Navbar>
					<Routes>
						<Route path='/' element={<HomePage />}/>
						<Route path='/features' element={<FeaturesPage />}/>
						<Route path='/about' element={<AboutPage />}/>
					</Routes>
				</BrowserRouter>
		</div>
	);
}

export default App;
