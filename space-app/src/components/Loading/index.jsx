import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 30vw;
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <img src="/img/loading.gif" alt="Loading" />
    </LoadingContainer>
  );
};

export default Loading;
