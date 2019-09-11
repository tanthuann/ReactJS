import React from "react";

import AwesomeImage from "./components/AwesomeImage.js";
//import HoverOpacity from "./components/HoverOpacity.js";
import withHoverOpacity from "./components/withHoverOpacity.js";
import withGrayScale from "./components/withGrayScale.js";

function App() {
  const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage, 0.8);
  const GrayScaleAwesomeImage = withGrayScale(AwesomeImage, 50);
  return (
    <div>
      {/* <HoverOpacity>
        <AwesomeImage src="https://images.unsplash.com/photo-1556740720-776b84291f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
      </HoverOpacity> */}
      <HoverOpacityAwesomeImage src="https://images.unsplash.com/photo-1556740720-776b84291f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
      <GrayScaleAwesomeImage src="https://images.unsplash.com/photo-1556740720-776b84291f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
    </div>
  );
}

export default App;
