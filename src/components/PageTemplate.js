import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { initializeAOS, scrollToTop } from '../utils/animations';
import BaseLayout from './layouts/BaseLayout';

const PageTemplate = ({ 
  title, 
  description, 
  ogImage = "/images/pose/pose_m18.png",
  children,
  className,
  showLayout = true,
  showCursor = true,
  layoutProps = {}
}) => {
  useEffect(() => {
    scrollToTop();
    initializeAOS();
  }, []);

  const pageContent = (
    <PageContainer className={className}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      {children}
    </PageContainer>
  );

  return showLayout ? (
    <BaseLayout showCursor={showCursor} {...layoutProps}>
      {pageContent}
    </BaseLayout>
  ) : pageContent;
};

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0;
  background-color: var(--white); /* Your original light background #f2efe7 */
  color: var(--dark); /* Your original dark text #191919 */
`;

export default PageTemplate;