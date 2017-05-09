var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

// New feature of React 1.4:  Stateless functional components for presentation components (no state)
// var About = function(props) {
//   return (
//     <h3>About component</h3>
//   );
// };

// Using arrow fcn syntax instead
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>
        Here are some of the tools I used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </p>
    </div>
  );
};

module.exports = About;
