import React, { useCallback, useState } from "react";
import styled from "styled-components";

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

function DevToolCheckBox() {
  // 체크된 체크박스의 값을 저장하는 배열
  const [toolCheckedList, setToolCheckedList] = useState<string[]>([]);
  // 현재 체크박스의 체크 여부 저장
  const [isChecked, setIsChecked] = useState(false);

  // 체크박스의 값을 인자로 받아, 해당 값이 체크된 경우 toolCheckedList 배열에 추가, 해제된 경우 배열에서 제거
  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setToolCheckedList((prev) => [...prev, value]);
      return;
    }
    if (!isChecked && toolCheckedList.includes(value)) {
      setToolCheckedList(toolCheckedList.filter((item) => item !== value));
      return;
    }
    return;
  };

  // 체크박스의 체크여부가 변경될 때마다 호출
  // 현재 체크박스의 isChecked 상태 업데이트, Handler 함수 호출 해당 체크박스의 값을 배열에 추가하거나 제거
  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  };

  // 폼 제출용 함수
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log("checkedList:", toolCheckedList);
    },
    [toolCheckedList]
  );
  return (
    <>
      {/* <form onSubmit={onSubmit}> */}
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
      {/* <button type="submit">submit</button> */}
      {/* </form> */}
    </>
  );
}

export default DevToolCheckBox;

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
  /* border: 1px solid gray;
  border-radius: 10px; */
  padding: 0.575rem 0.75rem;
  cursor: pointer;

  /* &.checked {
    border: 1px solid transparent;
    outline: 2px solid red;
  } */

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

// const StyledCheckedLabel = styled.label`
//   width: fit-content;
//   color: ${({ theme }) => theme.color.lineColorMiddle};
//   border: 1px solid ${({ theme }) => theme.color.lineColorMiddle};
//   border-radius: ${({ theme }) => theme.borderRadius.container};
//   padding: 0.575rem 0.75rem;
//   font-size: 12px;
// `;
