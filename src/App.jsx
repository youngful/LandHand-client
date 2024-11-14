import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Home, SignIn, SignUp, Post } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHashElement from './components/ScrollToHashElement'
import { useFetchPosts } from './Hooks'

const AppContent = () => {
	const location = useLocation();
	useFetchPosts();
	const hideHeaderFooter = location.pathname === '/signIn' || location.pathname === '/signUp';

	return (
		<>
			{!hideHeaderFooter && <Header />}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signIn' element={<SignIn />} />
				<Route path='/signUp' element={<SignUp />} />
				<Route path='/post/:id' element={<Post />} />
			</Routes>
			{!hideHeaderFooter && <Footer />}
		</>
	);
};

const App = () => {
	return (
		<Router>
      <ScrollToHashElement />
			<AppContent />
		</Router>
	);
};

export default App;
