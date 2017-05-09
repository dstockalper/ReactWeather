var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    // the THIS binding gets lost inside the .then funchtion
    // preserve the this by setting it equal to some other var first
    var that = this;

    // debugger; // pauses the application, letting you explore the state at the time in the console

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function() {
    var {isLoading, location, temp, errorMessage} = this.state;

    // conditionally render components
    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
