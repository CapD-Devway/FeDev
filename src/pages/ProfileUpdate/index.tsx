// import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useContext, useRef, useState } from "react";
import { User } from "firebase/auth";
import Nav from "src/Components/Nav";
import BottomNav from "src/Components/Nav/BottomNav";
import { Avatar } from "antd";
import styled from "styled-components";
import { UserContext } from "src/provider/authProvider";

function Profile() {
  const { user } = useContext(UserContext);
  const checkBoxList = [
    "FE 개발자",
    "BE 개발자",
    "IOS",
    "웹 개발자",
    "안드로이드 개발자",
    "웹 디자이너",
    "UI/UX 디자이너",
    "Web Publisher",
  ];
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [classNum, setClassNum] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [toolCheckedList, setToolCheckedList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  // const [job, setJob] = useState<string>("");
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

  // 체크박스의 값을 인자로 받아, 해당 값이 체크된 경우 toolCheckedList 배열에 추가, 해제된 경우 배열에서 제거
  const onChangeItemHandler = useCallback(
    (value: string, isChecked: boolean) => {
      if (isChecked) {
        setToolCheckedList((prev) => [...prev, value]);
        return;
      }
      if (!isChecked && toolCheckedList.includes(value)) {
        setToolCheckedList(toolCheckedList.filter((item) => item !== value));
        return;
      }
    },
    [toolCheckedList]
  );
  // 체크박스의 체크여부가 변경될 때마다 호출
  // 현재 체크박스의 isChecked 상태 업데이트, Handler 함수 호출 해당 체크박스의 값을 배열에 추가하거나 제거
  const checkHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setIsChecked(!isChecked);
      onChangeItemHandler(value, e.target.checked);
    },
    [onChangeItemHandler, isChecked]
  );

  const onChangeDevtool = (e: ChangeEvent<HTMLInputElement>) => {
    SetDevTool(e.target.value);
  };
  const onChangeSelfIntrouce = (e: ChangeEvent<HTMLInputElement>) => {
    SetSelfIntroduce(e.target.value);
  };

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

  function onSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("department", department);
    formData.append("classNum", classNum);
    // new Blob([item])은 item 문자열을 Blob으로 변환하는 것
    // FormData.append 메서드의 첫 번째 인자는 key, 두 번째 인자는 value로 설정
    toolCheckedList.forEach((item) => {
      formData.append("toolCheckedList", new Blob([item]));
    });
    formData.append("email", email);
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
            <StyledProfileDiv>
              <Avatar
                src={profileImage}
                style={{ margin: "0.325rem" }}
                size={100}
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
              <StyledUserNameButton onClick={() => fileInput.current?.click()}>
                프로필 이미지 변경
              </StyledUserNameButton>
            </StyledProfileDiv>
            {/* <StyledInputLabel>프로필 이미지</StyledInputLabel> */}
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>이름</StyledInputLabel>
            <StyledInput type="text" id="name" onChange={onChangeName} />
            {user ? (
              <StyledUserNameDiv>
                <p>{user.email}</p>
              </StyledUserNameDiv>
            ) : (
              <StyledUserNameDiv>
                <p>로그인 해주세요</p>
              </StyledUserNameDiv>
            )}
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
            {/* <DevToolCheckBox /> */}
            {/* 추가부분 */}
            <StyledCheckContainer>
              {/* map 함수 사용 --> checkBoxList 배열의 각 요소 순회 및 체크박스와 라벨 렌더링 */}
              {checkBoxList.map((item, idx) => (
                <StyledCheckedCard
                  key={idx}
                  className={`${isChecked ? "checked" : ""} checkboxCard`}
                >
                  <input
                    type="checkbox"
                    id={item}
                    checked={toolCheckedList.includes(item)}
                    onChange={(e) => checkHandler(e, item)}
                  />
                  <label htmlFor={item}>{item}</label>
                </StyledCheckedCard>
              ))}
            </StyledCheckContainer>
            {/* 추가부분 */}
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledInputLabel>개발도구</StyledInputLabel>
            <StyledInput type="text" id="devTool" onChange={onChangeDevtool} />
            <StyledPlaceDiv>
              자신이 주로 사용하는 도구를 써주세요. ex: Spring, React, Blender
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
  height: 70rem;
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

// 추가부분
const StyledCheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1.25rem;
`;

const StyledCheckedCard = styled.div`
  width: fit-content;
  padding: 0.575rem 0.75rem;
  cursor: pointer;

  input[type="checkbox"] {
    display: none;
  }

  input,
  label {
    border: 1px solid ${({ theme }) => theme.color.lineColorMiddle};
    border-radius: 10px;
    padding: 0.575rem 0.75rem;

    cursor: pointer;

    color: ${({ theme }) => theme.color.lineColorMiddle};
    font-size: ${({ theme }) => theme.fontSize.fontSize12};
  }

  input:checked ~ label {
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.borderRadius.input};

    outline: 1px solid ${({ theme }) => theme.color.brandColorMedium};
    color: ${({ theme }) => theme.color.brandColorMedium};
    transform: scale(1.2);

    transition: all 0.5s;
  }
`;

// 그냥 잠깐 스타일 확인용
const StyledUserNameDiv = styled.div`
  color: black;
`;
const StyledUserNameButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.fontSize14};
  color: ${({ theme }) => theme.color.fontColorLight};
  transition: all 0.5s;
  :hover {
    color: ${({ theme }) => theme.color.fontColorGrey};
  }
`;

const StyledProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
