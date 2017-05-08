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
      <h3>About</h3>
      <p>Welcome to the About page</p>
    </div>
  );
};

module.exports = About;
