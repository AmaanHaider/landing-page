import NavBar from './NavBar';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Invited from './pages/Invited';
import Login from './pages/Login';
import WhatsApp from './pages/WhatsApp';
import PrivacyPolicy from './pages/PrivacyPolicy';

import { ConfigProvider, Layout } from 'antd';

const { Content } = Layout;

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
							fontFamily: ['DM Serif Display', 'Questrial', 'Segoe UI', 'Roboto', 'Oxygen',
							'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'].join(','),
							colorPrimary: '#000',
						}
					}
				}>
				<BrowserRouter>
					<Layout style={{ minHeight: '100vh' }}>
						<Layout style={{ padding: 0, background: "#fff" }}>
							<NavBar />
							<Content style={{ flex: '1 0 auto' }}>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/about" element={<About />} />
									<Route path="/invited/:inviteId" element={<Invited />} />
									<Route path="/login" element={<Login />} />
									<Route path="/whatsapp" element={<WhatsApp />} />
									<Route path="/privacy-policy" element={<PrivacyPolicy />} />
								</Routes>
							</Content>
							<footer className="footer-container">
								<img src='/footer_garden.svg' className='footer-garden' alt='footer-garden' />
								<p className='footer-text'>
									<a className='inline-link-light' href="/privacy-policy">Privacy Policy</a> |
									<a className='inline-link-light' href="/about">About</a>
								</p>
								<p className='footer-text'>
									Designed with ❤️ by <a className='inline-link-light' href="https://debankon.com/">Debankon</a>.<br />Developed with 🥵 by Saba and Debanjum.
								</p>
							</footer>
						</Layout>
					</Layout>
				</BrowserRouter>

			</ConfigProvider>
		</div>
  )	;
}

export default App;
