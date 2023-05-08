import { Avatar } from "antd";
import { useContext, useState } from "react";
import Nav from "src/Components/Nav";
import BottomNav from "src/Components/Nav/BottomNav";
import { UserContext } from "src/provider/authProvider";
import styled from "styled-components";

function Profile() {
  const { user } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  return (
    <>
      <Nav />
      {/* Container */}
      <StyledContainer>
        {/* Profile, name, update 1), Joining Team 2) */}
        <StyledMyInformDiv>
          <StyledProfileDiv>
            {/* profile image */}
            <div>
              {user ? (
                <div>{user.photoURL}</div>
              ) : (
                <div>
                  <Avatar
                    src={profileImage}
                    style={{ margin: "0.125rem" }}
                    size={80}
                  />
                </div>
              )}
              {user?.photoURL}
            </div>
            {/* Name, Working, Profile Update === 해당 유저에게만 */}
            <StyledTextProfileDiv>
              <StyledNameDiv>
                <StyledNameP>최재훈</StyledNameP>
                <StyledJobP>FE 개발자</StyledJobP>
              </StyledNameDiv>
              <StyledUpdateDiv>
                <StyledUpdateP>프로필 수정</StyledUpdateP>
              </StyledUpdateDiv>
            </StyledTextProfileDiv>
          </StyledProfileDiv>
          {/* line Hr */}
          <StyledFirstHrDiv></StyledFirstHrDiv>
          {/* Joinging Team */}
          <StyledJoiningTeamDiv>
            <StyledTeamP>활동하고 있는 팀</StyledTeamP>
            <StyledJoinInTeamP>소속된 팀이 없습니다.</StyledJoinInTeamP>
          </StyledJoiningTeamDiv>
        </StyledMyInformDiv>

        {/* profile Card */}
        <StyledProfileCard>
          <div>이름</div>
          <div>
            {" "}
            {user ? (
              <div>{user.photoURL}</div>
            ) : (
              <div>
                <Avatar
                  src={profileImage}
                  style={{ margin: "0.125rem" }}
                  size={40}
                />
              </div>
            )}
          </div>
          <div>이메일</div>
          <p>jaehun990909@naver.com</p>
          <div>학과</div>
          <p>IT 융합자율학부</p>
          <div>학번</div>
          <p>201814112</p>
        </StyledProfileCard>
      </StyledContainer>

      {/* my tool, myself introduce */}
      <div></div>
      <div>
        {/* Text & my introduce box */}
        <div></div>
      </div>
      <BottomNav />
    </>
  );
}

export default Profile;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90rem;
`;

const StyledMyInformDiv = styled.div`
  width: 61.25rem;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.color.black};
`;

const StyledProfileDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-left: 6.25rem;
  margin-top: 6.25rem;

  color: ${({ theme }) => theme.color.black};
`;

const StyledTextProfileDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const StyledNameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.25rem;
`;

const StyledNameP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fontSize32};
`;

const StyledJobP = styled.p`
  margin-left: 0.625rem;
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
`;

const StyledUpdateDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
`;

const StyledUpdateP = styled.p`
  color: ${({ theme }) => theme.color.fontColorGrey};
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
  transition: all 0.5s;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.fontColorDark};
  }
`;

const StyledFirstHrDiv = styled.div`
  width: 85%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.lineCOlorLight};

  margin-left: 6.25rem;
  margin-top: 6.25rem;
`;

const StyledJoiningTeamDiv = styled.div`
  margin-left: 6.25rem;
  margin-top: 2.25rem;

  color: ${({ theme }) => theme.color.black};
`;

const StyledTeamP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fontSize24};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
`;

const StyledJoinInTeamP = styled.p`
  margin-top: 1.625rem;
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
`;

const StyledProfileCard = styled.div`
  width: 21rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 6.25rem;

  border: none;
  border-radius: 25px;

  background-color: ${({ theme }) => theme.color.bgColorDeep};
  color: ${({theme}) => theme.color.black};
`;
