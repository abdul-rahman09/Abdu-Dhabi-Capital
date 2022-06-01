import React from "react";
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from "components/ErrorBoundary/types";
/**
 * ErrorBoundary Component catches the error which produces in its child nodes.
 * For Dev it console the errors and for PROD it should send the error report to
 * sentry or any other error logger.
 */
class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error: any) {
    return { error: true };
  }

  componentDidCatch(error: any, errorInfo: any) {}

  render() {
    if (this.state.error) {
      return <h1 className="font-italic text-center">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
