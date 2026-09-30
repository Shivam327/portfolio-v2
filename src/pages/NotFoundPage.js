import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import Button from '../components/Button';

const NotFoundPage = () => (
  <PageTemplate
    title="404 | Page Not Found | Shivam Thaker"
    description="The page you are looking for does not exist."
  >
    <Wrapper>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>This route does not exist. Head back home or browse work.</p>
      <Actions>
        <Link to="/">
          <Button text="Go Home" color="var(--green)" />
        </Link>
        <Link to="/work">
          <Button text="View Work" color="var(--yellow)" />
        </Link>
      </Actions>
    </Wrapper>
  </PageTemplate>
);

const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  & > h1 {
    font-size: max(8rem, 48px);
    font-family: "Dela Gothic One", cursive;
    color: var(--green-text);
    line-height: 1;
  }

  & > h2 {
    font-size: max(3rem, 20px);
    margin: 1rem 0;
    color: var(--text-primary);
  }

  & > p {
    font-size: max(1.6rem, 14px);
    color: var(--text-secondary);
    max-width: 40rem;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

export default NotFoundPage;
