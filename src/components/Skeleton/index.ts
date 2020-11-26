import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    var(--shimmerOne) 0%,
    var(--shimmerTwo) 50%,
    var(--shimmerOne) 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
`;
