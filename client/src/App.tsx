import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import RedirectPage from './pages/RedirectPage';
import WithoutNavBarLayout from './components/layouts/WithoutNavBarLayout';
import WithNavBarLayout from './components/layouts/WithNavBarLayout';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import MainLandingPage from './pages/MainLandingPage';
import WithPrivateNavBarLayout from './components/layouts/WithPrivateNavBarLayout';
import SettingsPage from './pages/SettingsPage';
import LinkGeneratorPage from './pages/LinkGeneratorPage';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<WithoutNavBarLayout />}>
						<Route path='/:shortcut' element={<RedirectPage />} />
					</Route>
					<Route element={<ProtectedRoute isProtected={true} />}>
						<Route element={<WithPrivateNavBarLayout />}>
							<Route path='/main' element={<MainLandingPage />} />
							<Route path='/settings' element={<SettingsPage />}/>
							<Route path='/newlink' element={<LinkGeneratorPage />}/>
						</Route>
					</Route>
					<Route element={<ProtectedRoute isProtected={false} />}>
						<Route element={<WithNavBarLayout />}>
							<Route path='/' element={<Navigate to="/app" />} />
							<Route path='/app' element={<HomePage />} />
							<Route path='/app/features' element={<FeaturesPage />} />
							<Route path='/app/about' element={<AboutPage />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
