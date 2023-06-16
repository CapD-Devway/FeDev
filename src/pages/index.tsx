import Image from "next/image";
import Loading from "src/Components/Common/Loading";
import Nav from "src/Components/Nav";
import BottomNav from "src/Components/Nav/BottomNav";
import styled from "styled-components";

function Home() {
  return (
    <>
      <Nav />
      <StyledPageTitle>
        <p>팀원 찾기</p>
      </StyledPageTitle>
      <StyledTeamProfileCard>
        <StyledTeamProfileContentsDiv>
          <StyledProfileImgBox>
            <Image
              src="/images/tokyo.jpg"
              alt="Tokyo Landscape"
              width={56}
              height={56}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />
          </StyledProfileImgBox>
          <StyledTeamProfileTexts>
            <p>최재훈</p>
            <p>IT융합자율학부</p>
          </StyledTeamProfileTexts>
        </StyledTeamProfileContentsDiv>
        <StyledTeamProfileHrDiv></StyledTeamProfileHrDiv>
        <StyledTeamProfileMainTexts>
          <p>이메일</p>
          <p>jaehun990909@gmail.com</p>
        </StyledTeamProfileMainTexts>
        <StyledTeamProfileMainTexts>
          <p>학번</p>
          <p>201814112</p>
        </StyledTeamProfileMainTexts>
        <StyledTeamProfileMainTexts>
          <p>직무</p>
          <p>FE개발자</p>
        </StyledTeamProfileMainTexts>
        <StyledTeamProfileMainTexts>
          <p>한줄 소개</p>
          <p>즐기기</p>
        </StyledTeamProfileMainTexts>
      </StyledTeamProfileCard>
      <div>
        <Loading />
      </div>
      <BottomNav />
    </>
  );
}

export default Home;

const StyledPageTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.875rem;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
`;

const StyledTeamProfileCard = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
  width: 21rem;
  height: 28rem;
  border: 1px solid ${({ theme }) => theme.color.brandColorMedium};
  border-radius: ${({ theme }) => theme.borderRadius.registerContainer};
`;

const StyledTeamProfileContentsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 1.875rem;
  padding-left: 2.5rem;
`;

const StyledProfileImgBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledTeamProfileTexts = styled.div`
  margin-left: 1.25rem;
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
  color: ${({ theme }) => theme.color.black};
`;

const StyledTeamProfileHrDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 0.625rem;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.brandColorMedium};
`;

const StyledTeamProfileMainTexts = styled.div`
  margin-top: 2rem;
  margin-left: 3.5rem;
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
  color: ${({ theme }) => theme.color.black};
`;
