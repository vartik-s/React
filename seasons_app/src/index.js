import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  state = { lat: null, error: "" };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  render() {
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>;
    }
    if (!this.state.error && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="accept kar be" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
