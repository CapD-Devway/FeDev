import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import CommonBtn from "src/Components/CommonBtn";
import CommonInputForm from "src/Components/CommonInputForm";
import DevToolCheckBox from "src/Components/DevToolCheckBox";
import Nav from "src/Components/Nav";
import BottomNav from "src/Components/Nav/BottomNav";
import { Avatar } from "antd";
import styled from "styled-components";

function Profile() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [classNum, setClassNum] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [devTool, SetDevTool] = useState<string>("");
  const [selfIntroduce, SetSelfIntroduce] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef<HTMLInputElement>(null);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeDepartment = (e: ChangeEvent<HTMLInputElement>) => {
    setDepartment(e.target.value);
  };
  const onChangeClassNum = (e: ChangeEvent<HTMLInputElement>) => {
    setClassNum(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeJob = (e: ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
  };
  const onChangeDevtool = (e: ChangeEvent<HTMLInputElement>) => {
    SetDevTool(e.target.value);
  };
  const onChangeSelfIntrouce = (e: ChangeEvent<HTMLInputElement>) => {
    SetSelfIntroduce(e.target.value);
  };
  // const onChangeProfileImage = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setProfileImage(e.target.files[0]);
  //   }
  // };

  const onChangeProfileImages = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          setProfileImage(URL.createObjectURL(convertedFile));
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      setProfileImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
  };

  // const onChangeProfileImages = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFile(e.target.files[0]);
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setProfileImage(reader.result);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setProfileImage(
  //       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  //     );
  //   }
  // };

  // if (e.target.files[0]) {
  //   setFile(e.target.files[0])
  // } else {
  //   setProfileImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  //   return;
  // }// 화면에 프로필 사진 표시
  // const reader = new FileReader();
  // reader.onload = () => {
  //   if (reader.readyState === 2) {
  //     setProfileImage(reader.result)
  //   }
  // }
  // reader.readAsDataURL(e.target.files[0]);
  function onSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("department", department);
    formData.append("classNum", classNum);
    formData.append("email", email);
    formData.append("job", job);
    formData.append("devTool", devTool);
    formData.append("selfIntroduce", selfIntroduce);
    if (profileImage) {
      // 프로필 이미지 파일이 존재하면 FormData에 추가
      formData.append("profileImage", profileImage);
    }
    //TODO: 서버로 폼 데이터 전송 api 연결 axios 통신.
  }

  return (
    <>
      <Nav />
      <StyledProfileBorder>
        <StyledProfileH2>프로필 수정</StyledProfileH2>
        {/* <StyledForm onSubmit={onSubmit}> */}
        <div>
          <StyledInputDiv>
            <StyledInputLabel>프로필 이미지</StyledInputLabel>
            <Avatar
              src={profileImage}
              style={{ margin: "0.325rem" }}
              size={50}
              onClick={() => {
                if (fileInput.current) {
                  fileInput.current.click();
                }
              }}
            />
            <StyledInput
              type="file"
              style={{ display: "none" }}
              id="profileImage"
              accept="'image/jpg,image/png,image/jpeg"
              onChange={onChangeProfileImages}
              ref={fileInput}
            />
            <button onClick={() => fileInput.current?.click()}>Upload</button>
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>이름</StyledInputLabel>
            <StyledInput type="text" id="name" onChange={onChangeName} />
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>학과</StyledInputLabel>
            <StyledInput
              type="text"
              id="department"
              onChange={onChangeDepartment}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>학번</StyledInputLabel>
            <StyledInput
              type="text"
              id="classNum"
              onChange={onChangeClassNum}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>이메일</StyledInputLabel>
            <StyledInput type="email" id="email" onChange={onChangeEmail} />
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>직무 선택</StyledInputLabel>
            <DevToolCheckBox />
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>개발도구</StyledInputLabel>
            <StyledInput type="text" id="devTool" onChange={onChangeDevtool} />
            <StyledPlaceDiv>
              자신이 주로 사용하는 도구를 써주세요.
            </StyledPlaceDiv>
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>자기소개</StyledInputLabel>
            <StyledInput
              type="text"
              id="selfIntroduce"
              onChange={onChangeSelfIntrouce}
            />
            <StyledPlaceDiv>
              자신을 나타내는 문장을 표현해 주세요.
            </StyledPlaceDiv>
          </StyledInputDiv>
          <StyledButtonContainer>
            <StyledButton type="submit">변경하기</StyledButton>
            <StyledButton
              type="button"
              onClick={() => {
                router.back();
              }}
            >
              돌아가기
            </StyledButton>
          </StyledButtonContainer>
        </div>
        {/* </StyledForm> */}
      </StyledProfileBorder>
      <BottomNav />
    </>
  );
}

export default Profile;

const StyledProfileBorder = styled.div`
  margin: 0 auto;
  margin-top: 3.125rem;
  width: 44.75rem;
  height: 62rem;
  border: 0.125rem solid ${({ theme }) => theme.color.brandColorLight};
  border-radius: ${({ theme }) => theme.borderRadius.container};
  padding: 4rem 3rem;
  box-shadow: rgba(172, 243, 162, 0.3) 0px 2px 8px 0px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
`;

const StyledProfileH2 = styled.h2`
  color: ${({ theme }) => theme.color.fontColorDark};
`;

const StyledInputLabel = styled.label`
  color: ${({ theme }) => theme.color.fontColorDark};
`;

const StyledInputDiv = styled.div`
  margin-top: 3rem;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.lineColorMiddle};
  margin-left: 1.875rem;
  transition: all 0.5s;
  :focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.brandColorMedium};
  }
`;

const StyledPlaceDiv = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.fontColorGrey};
  font-size: ${({ theme }) => theme.fontSize.fontSize12};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 20rem;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
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
