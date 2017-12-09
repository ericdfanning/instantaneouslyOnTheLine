import React from 'react';
import App from './components/App.jsx';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// By getting the <div> element in index.html by the id 'app', 
  // React can render it's elements to the DOM
render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app')) 