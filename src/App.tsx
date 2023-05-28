import React from 'react';
import NavBar from './NavBar';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';

import { ConfigProvider } from 'antd';

import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<ConfigProvider
				theme={
					{
						token: {
							fontFamily: ['Segoe UI', 'Roboto', 'Oxygen',
							'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'].join(','),
							colorPrimary: '#1890ff',
						}
					}
				}>

				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</BrowserRouter>
				<footer className="App-footer">
					<p>
						Made with <span className="heart">❤</span> by <a href="https://github.com/debanjum/">Debanjum</a> and <a href="https://github.com/sabaimran">Saba</a>
					</p>

				</footer>
			</ConfigProvider>
		</div>
  )	;
}

export default App;
