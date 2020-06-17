import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
