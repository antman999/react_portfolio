import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Work from './components/Work'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Landing></Landing>
				</Route>
				<Route path='/work' exact>
					<Work></Work>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;