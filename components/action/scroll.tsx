import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const ScrollButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const SvgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover #animatedCircle {
    animation: ${pulseAnimation} 1s infinite;
  }
`;

const ScrollButton: React.FC<{ targetId: string }> = ({ targetId }) => {
  return (
    <ScrollButtonWrapper onClick={() => scrollToSection(targetId)}>
      <SvgWrapper>
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="5"/>
          <circle id="animatedCircle" cx="50" cy="50" r="10" fill="black"/>
          <path d="M50 20 L50 70" stroke="black" strokeWidth="5" strokeLinecap="round"/>
          <path d="M40 60 L50 70 L60 60" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </SvgWrapper>
    </ScrollButtonWrapper>
  );
};

export default ScrollButton;
