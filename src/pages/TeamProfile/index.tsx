import Image from "next/image";
import Nav from "src/Components/Nav";
import BottomNav from "src/Components/Nav/BottomNav";
import styled from "styled-components";

function TeamProfile() {
  //TODO: TeamProfile ThumbNail Image Axios get 해오기 !
  return (
    <>
      <Nav />
      <div>
        <StyledContainer>
          <StyledImageDiv>
            <Image
              src="/images/tokyo.jpg"
              alt="Tokyo Landscape"
              width={1440}
              height={278}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </StyledImageDiv>
        </StyledContainer>
        <StyledTeamTitle>
          <p>옷장 플랫폼:CLOTHES</p>
          <StyeledTeamProfileDiv></StyeledTeamProfileDiv>
        </StyledTeamTitle>
        <StyledMainContents>
          <StyledMainTextPart>
            <div>
              <StyledMainContentsText>상세 소개</StyledMainContentsText>
            </div>
            <div>
              <StyledMainContentsText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, explicabo modi? Iste recusandae asperiores corrupti
                totam non ad quibusdam et, autem ea repellat accusantium eveniet
                aliquid in nihil. Cum, alias?
              </StyledMainContentsText>
            </div>
          </StyledMainTextPart>
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
                <p>옷장 플랫폼 : CLOTHES</p>
                <p>2023-05-31 ing~</p>
              </StyledTeamProfileTexts>
            </StyledTeamProfileContentsDiv>
            <StyledTeamProfileHrDiv></StyledTeamProfileHrDiv>
            <StyledTeamProfileMainTexts>
              <p>소개</p>
              <p>우리만의 옷장 플랫폼 만들기!</p>
            </StyledTeamProfileMainTexts>
            <StyledTeamProfileMainTexts>
              <p>구하는 직무</p>
              <p>FE 개발자 1명, BE 개발자 2명</p>
            </StyledTeamProfileMainTexts>
          </StyledTeamProfileCard>
        </StyledMainContents>
        <div>
          <StyledMainContentsText>팀원 정보</StyledMainContentsText>
          <StyledTeamProfileInfo>
            {/* //TODO 팀 프로필 썸네일 받아오기 */}
            <StyledProfileThumbNail>
              <Image
                src="/images/spy.jpg"
                alt="Anya Photo"
                width={84}
                height={84}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </StyledProfileThumbNail>
            <StyledProfileName>
              <p>zoeyourlife</p>
            </StyledProfileName>
          </StyledTeamProfileInfo>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

export default TeamProfile;

const StyledTeamProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border: 1px solid ${({ theme }) => theme.color.lineColorDark};
  border-radius: 50%;
  margin-top: 1.875rem;
  margin-left: 3.125rem;
  background: white;
  :hover {
    cursor: pointer;
  }
`;

const StyledProfileThumbNail = styled.div`
  width: 5.25rem;
  height: 5.25rem;
  border: 1px solid ${({ theme }) => theme.color.lineColorDark};
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.5s;
  :hover {
    transform: scale(1.8) translateY(5px);
    border: none;
  }
`;

const StyledProfileName = styled.div`
  z-index: 1;
  font-size: ${({ theme }) => theme.fontSize.fontSize12};
  color: ${({ theme }) => theme.color.black};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90rem;
  height: 17.25rem;
  margin-top: 10px;
`;

const StyledImageDiv = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  overflow: hidden;
`;

const StyledTeamTitle = styled.div`
  margin-top: 4rem;
  padding-left: 3rem;
  font-size: ${({ theme }) => theme.fontSize.fontSize24};
  color: ${({ theme }) => theme.color.black};
`;

const StyeledTeamProfileDiv = styled.div`
  width: 70%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.lineCOlorLight};
  margin-top: 1.25rem;
`;

const StyledMainContents = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: row;
`;

const StyledMainTextPart = styled.div`
  width: 65rem;
`;

const StyledMainContentsText = styled.p`
  margin-top: 4rem;
  padding-left: 3rem;
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
  color: ${({ theme }) => theme.color.black};
`;

const StyledTeamProfileCard = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
  width: 21rem;
  height: 25rem;
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
