import Loading from "src/Components/Common/Loading";
import Nav from "src/Components/Nav";
import BottomNav from "src/Components/Nav/BottomNav";
import styled from "styled-components";

function TeamMate() {
  //TODO useGetTeamMate 정보 axios get 해오기 부분
  // const { teamMateInform , isLoading } = useGetTeamMate();
  // if(isLoading){
  //   return <Loading />
  // }
  return (
    <>
      <Nav />
      <StyledPageTitle>
        <p>팀 찾기</p>
      </StyledPageTitle>
      <div>
        <Loading />
      </div>
      <BottomNav />
    </>
  );
}

export default TeamMate;

const StyledPageTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.875rem;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
`;
