import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      return this.setSpan();
    });
  }

  setSpan() {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        style={{
          gridRowEnd: "span " + this.state.spans,
          marginBottom: "10 px",
        }}
      >
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
