
import React from "react";
import { Component } from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    //process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
					<ErrorImageText>My Dog Ate This Page</ErrorImageText>
				</ErrorImageOverlay>
			)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;