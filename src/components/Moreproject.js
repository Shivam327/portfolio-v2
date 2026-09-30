import React from "react";
import styled from "styled-components";
import { getProjectById } from "../data/projects";

const Moreproject = ({ name, id }) => {
  const data = getProjectById(id);
  if (!data) return null;
  const visitLabel = data.hasLink ? "Let's Visit" : "Coming Soon";

  return (
    <Wrapper
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000"
      image={data.image}
      $hasLink={data.hasLink}
    >
      <Info>
        <h2>{data.type}</h2>
        <h1>{name || data.name}</h1>
      </Info>
      <Circle $muted={!data.hasLink}>
        <h2>{visitLabel}</h2>
      </Circle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease-in-out;

  &:hover {
    background: ${(props) =>
      props.$hasLink ? `url(${props.image})` : "transparent"};
    background-size: cover;
    background-position: center;
  }
`;

const Info = styled.div`
  & > h1 {
    font-size: max(3rem, 18px);
    font-weight: 400;
    line-height: 1.3;
  }

  & > h2 {
    color: var(--text-secondary);
    font-size: max(1.5rem, 12px);
    font-weight: 400;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  height: max(9rem, 72px);
  width: max(9rem, 72px);
  border-radius: 50%;
  background-color: ${(props) =>
    props.$muted ? "var(--text-secondary)" : "var(--text-primary)"};
  flex-shrink: 0;

  & > h2 {
    color: var(--bg-secondary);
    font-size: max(1rem, 11px);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-align: center;
    padding: 0.5rem;

    &:hover {
      transform: rotate(-30deg);
      color: var(--yellow-text);
    }
  }
`;

export default Moreproject;
