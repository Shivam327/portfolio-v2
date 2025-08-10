import React from 'react';
import styled from 'styled-components';
import { COLORS, SPACING } from '../constants';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorContent>
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
            <ErrorActions>
              <button onClick={() => window.location.reload()}>
                Refresh Page
              </button>
              <button onClick={() => this.setState({ hasError: false })}>
                Try Again
              </button>
            </ErrorActions>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <ErrorDetails>
                <details>
                  <summary>Error Details (Development)</summary>
                  <pre>{this.state.error.toString()}</pre>
                </details>
              </ErrorDetails>
            )}
          </ErrorContent>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${SPACING.XL};
  background-color: ${COLORS.DARK};
  color: ${COLORS.WHITE};
  text-align: center;
`;

const ErrorContent = styled.div`
  max-width: 600px;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: ${SPACING.MD};
    color: ${COLORS.SECONDARY};
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: ${SPACING.LG};
    line-height: 1.6;
  }
`;

const ErrorActions = styled.div`
  display: flex;
  gap: ${SPACING.MD};
  justify-content: center;
  margin-bottom: ${SPACING.LG};
  
  button {
    padding: ${SPACING.SM} ${SPACING.LG};
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: ${COLORS.SECONDARY};
      transform: translateY(-2px);
    }
    
    &:last-child {
      background-color: ${COLORS.ACCENT};
    }
  }
`;

const ErrorDetails = styled.div`
  margin-top: ${SPACING.LG};
  text-align: left;
  
  details {
    summary {
      cursor: pointer;
      color: ${COLORS.SECONDARY};
      margin-bottom: ${SPACING.SM};
    }
    
    pre {
      background-color: rgba(255, 255, 255, 0.1);
      padding: ${SPACING.SM};
      border-radius: 4px;
      overflow-x: auto;
      font-size: 0.9rem;
    }
  }
`;

export default ErrorBoundary;
