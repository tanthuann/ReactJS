import React, { Component } from "react";

export default function(WrappedComponent, grayscale = 100) {
  return class extends Component {
    render() {
      return (
        <div
          style={{
            filter: `grayscale(${grayscale}%)`
          }}
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
