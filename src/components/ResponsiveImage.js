import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';

const ResponsiveImage = memo(({ 
  src, 
  alt, 
  contain = false, 
  cover = true,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  loading = 'lazy',
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Create intersection observer for lazy loading
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.01
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.(imgRef.current);
  };

  const handleError = () => {
    setHasError(true);
    onError?.(imgRef.current);
  };

  const imageSrc = isInView ? src : placeholder;

  return (
    <ImageContainer ref={imgRef}>
      <StyledImage
        src={imageSrc}
        alt={alt}
        contain={contain}
        cover={cover}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        isLoaded={isLoaded}
        hasError={hasError}
        {...props}
      />
      {!isLoaded && !hasError && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
      {hasError && (
        <ErrorOverlay>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorText>Failed to load image</ErrorText>
        </ErrorOverlay>
      )}
    </ImageContainer>
  );
});

ResponsiveImage.displayName = 'ResponsiveImage';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.3s ease, filter 0.3s ease;
  opacity: ${props => props.isLoaded ? 1 : 0.3};
  filter: ${props => props.isLoaded ? 'none' : 'blur(2px)'};
  
  ${props => props.contain && `
    object-fit: contain;
  `}
  
  ${props => props.cover && `
    object-fit: cover;
  `}

  // High contrast mode support
  @media (prefers-contrast: high) {
    border: 1px solid currentColor;
  }

  // Reduced motion support
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    filter: none;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
`;

const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-top: 2px solid var(--green);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ErrorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(244, 67, 54, 0.1);
  color: var(--red);
  text-align: center;
  padding: 1rem;
`;

const ErrorIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ErrorText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

export default ResponsiveImage;
