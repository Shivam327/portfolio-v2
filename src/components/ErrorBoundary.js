import React from 'react';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Log error to console for development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // In production, you could send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo, tags: { errorId } });
    
    // Log to console with error ID for user reporting
    console.error(`Error ID: ${errorId}. Please report this to support.`);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorContent>
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorTitle>Something went wrong</ErrorTitle>
            <ErrorMessage>
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </ErrorMessage>
            <ErrorDetails>
              <ErrorId>Error ID: {this.state.errorId}</ErrorId>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <ErrorStack>
                  <strong>Error:</strong> {this.state.error.toString()}
                </ErrorStack>
              )}
            </ErrorDetails>
            <ErrorActions>
              <RetryButton onClick={() => window.location.reload()}>
                Refresh Page
              </RetryButton>
              <HomeButton onClick={() => window.location.href = '/'}>
                Go Home
              </HomeButton>
            </ErrorActions>
          </ErrorContent>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  padding: 2rem;
`;

const ErrorContent = styled.div`
  max-width: 600px;
  text-align: center;
  background-color: var(--bg-secondary);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

const ErrorDetails = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--bg-primary);
  border-radius: 0.5rem;
  text-align: left;
`;

const ErrorId = styled.div`
  font-family: monospace;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const ErrorStack = styled.pre`
  font-family: monospace;
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 200px;
  overflow-y: auto;
`;

const ErrorActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const RetryButton = styled(Button)`
  background-color: var(--green);
  color: white;
  
  &:hover {
    background-color: #2ba876;
  }
`;

const HomeButton = styled(Button)`
  background-color: var(--yellow);
  color: var(--text-primary);
  
  &:hover {
    background-color: #f0d67a;
  }
`;

export default ErrorBoundary;
