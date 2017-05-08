var React = require('react');
var ReactDOM = require('react-dom');
// Access components from the react-router library (which we installed via npm install react-router)
// ES5 syntax
// var Route = require('react-router').Route;
// var Router = require('react-router').Router;

// ES6 "Destructuring" syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Weather}/>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
