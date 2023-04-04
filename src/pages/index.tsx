import styled from "styled-components";

function Home() {
  return (
    <>
      <StyledH1>hhi</StyledH1>
    </>
  );
}

export default Home;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.color.black};
`;
