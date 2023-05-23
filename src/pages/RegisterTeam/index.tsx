import { useRouter } from "next/router";
import { ChangeEvent, useContext, useRef, useState } from "react";
import CommonBtn from "src/Components/CommonBtn";
import Nav from "src/Components/Nav";
import BottomNav from "src/Components/Nav/BottomNav";
import FormDetail from "src/Components/Write/Form/FormDetail";
import ImageUpload from "src/Components/Write/ImageUpload";
import TextArea from "src/Components/Write/TextArea";
import { UserContext } from "src/provider/authProvider";
import styled from "styled-components";

function RegisterTeam() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const [teamName, setTeamName] = useState<string>("");
  const [workingJob, setWorkingJob] = useState<string>("");
  const [makeDate, setMakeDate] = useState<string>("");
  const [descriptionTeam, setDescriptionTeam] = useState<string>("");
  const [detailDescription, setDetailDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [thumbnail, setThumbNail] = useState<string>("");

  const fileInput = useRef<HTMLInputElement>(null);

  const onChangeTeamName = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const onChangeWorkingJob = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkingJob(e.target.value);
  };

  const onChangeMakeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setMakeDate(e.target.value);
  };

  const onChangeDescriptionTeam = (e: ChangeEvent<HTMLInputElement>) => {
    setDescriptionTeam(e.target.value);
  };

  const onChangeDetailDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDetailDescription(e.target.value);
  };

  const onChangeThumbNail = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          const blob = new Blob([reader.result as ArrayBuffer], {
            type: file.type,
          });
          const convertedFile = new File([blob], file.name, {
            type: file.type,
          });
          setThumbNail(URL.createObjectURL(convertedFile));
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      setThumbNail(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
  };

  //TODO onsubmit 함수 작성
  function onSubmit() {
    const formData = new FormData();
    formData.append("teamName", teamName);
    formData.append("workingJob", workingJob);
    formData.append("makeDate", makeDate);
    formData.append("descriptionTeam", descriptionTeam);
    formData.append("detailDescription", detailDescription);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }
    //TODO : 서버로 폼 데이터 전송 api 연결 axios 통신
  }
  return (
    <>
      <Nav />
      <StyledRegisterContainer>
        <StyledRegisterH2>팀 등록하기</StyledRegisterH2>
        <StyledRegisterHr />
        <StyledRegisterP>팀 프로필</StyledRegisterP>
        {/* 팀 이름 + 구하는 직무 인풋 디브 */}
        <StyledInputContainer>
          <div>
            <div>
              <label>
                팀 이름<StyledStarSpan>*</StyledStarSpan>
              </label>
            </div>
            <StyledRegisterInput
              type="text"
              id="teamName"
              onChange={onChangeTeamName}
            />
          </div>
          <div>
            <div>
              <label>
                구하는 직무<StyledStarSpan>*</StyledStarSpan>
              </label>
            </div>
            <StyledRegisterInput
              type="text"
              id="workingJob"
              onChange={onChangeWorkingJob}
            />
          </div>
        </StyledInputContainer>
        {/* 팀 생성일 + 한줄 소개 인풋 디브 */}
        <StyledInputContainer>
          <div>
            <div>
              <label>
                팀 생성일<StyledStarSpan>*</StyledStarSpan>
              </label>
            </div>
            <StyledRegisterInput
              type="date"
              id="makeDate"
              onChange={onChangeMakeDate}
            />
          </div>
          <div>
            <div>
              <label>
                한줄 소개<StyledStarSpan>*</StyledStarSpan>
              </label>
            </div>
            <StyledRegisterInput
              type="text"
              id="descriptionTeam"
              onChange={onChangeDescriptionTeam}
            />
          </div>
        </StyledInputContainer>
        {/* 상세 소개 디브 */}
        <StyledInputContainerTwo>
          <div>
            <label>
              상세 소개<StyledStarSpan>*</StyledStarSpan>
            </label>
          </div>
          <TextArea
            maxCount={3000}
            value={detailDescription}
            count={true}
            onChange={onChangeDetailDescription}
            placeholder="상세 내용 입력해주세요."
          />
        </StyledInputContainerTwo>
        {/* 썸네일 설정 디브 */}
        <StyledThumbContainer>
          <label>
            썸네일 설정<StyledStarSpan>*</StyledStarSpan>
          </label>
          <ImageUpload onChange={onChangeThumbNail} required={false} />
        </StyledThumbContainer>
        {/* 취소, 제출 버튼 */}
        <StyledButtonContainer>
          <StyledButtonDiv
            type="button"
            onClick={() => {
              router.back();
            }}
          >
            취소
          </StyledButtonDiv>
          <StyledButtonDiv type="submit">제출</StyledButtonDiv>
        </StyledButtonContainer>
      </StyledRegisterContainer>
      <BottomNav />
    </>
  );
}

export default RegisterTeam;

const StyledRegisterContainer = styled.div`
  margin: 0 auto;
  width: 75rem;
  height: 120vh;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.color.borderColorLight};
  border-radius: ${({ theme }) => theme.borderRadius.registerContainer};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const StyledRegisterHr = styled.hr`
  width: 100%;
  margin-top: 3.125rem;
  border: 1px solid ${({ theme }) => theme.color.lineCOlorLight};
`;

const StyledRegisterH2 = styled.h2`
  color: ${({ theme }) => theme.color.fontColorDark};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledRegisterP = styled.p`
  color: ${({ theme }) => theme.color.fontColorDark};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.fontSize16};
  margin-top: 0.625rem;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  gap: 6.5rem;
`;

const StyledThumbContainer = styled.div`
  width: 46rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2.5rem;
`;

const StyledStarSpan = styled.span`
  color: ${({ theme }) => theme.color.errorColor};
`;

const StyledRegisterInput = styled.input`
  width: 20rem;
  margin-top: 0.625rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.borderColorLight};
  border-radius: ${({ theme }) => theme.borderRadius.container};
`;

const StyledInputContainerTwo = styled.div`
  width: 47rem;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const StyledButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5rem;
  height: 2.5rem;
  margin: 0 auto;
  margin-top: 3.25rem;

  border: 1px solid ${({ theme }) => theme.color.lineCOlorLight};
  border-radius: ${({ theme }) => theme.borderRadius.button};

  color: ${({ theme }) => theme.color.fontColorDark};
  font-size: ${({ theme }) => theme.fontSize.fontSize12};

  background-color: ${({ theme }) => theme.color.brandColorLight};
  transition: 0.5s;
  :hover {
    background-color: ${({ theme }) => theme.color.brandColorMedium};
    border-color: ${({ theme }) => theme.color.lineColorMiddle};
    color: ${({ theme }) => theme.color.white};
  }
`;
