import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// fetch the products		
	}, []);
	
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/"  exact component={Home} />
		    <Route path="/products" component={Products} />
                </Switch>
            </BrowserRouter>
        );		
}

export default App;

