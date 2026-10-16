import React from "react";

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Canvas render fallback triggered:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex flex-col items-center justify-center text-secondary text-sm p-4">
          <p>3D view unavailable on this device/browser</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default CanvasErrorBoundary;

