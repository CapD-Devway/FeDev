import { ChangeEvent } from "react";
import TextArea from "../TextArea";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

function FormDetail({ value, onChange }: IProps) {
  return (
    <>
      <TextArea
        maxCount={3000}
        value={value}
        count={true}
        placeholder="상세 내용 입력해주세요"
        onChange={onChange}
      />
    </>
  );
}

export default FormDetail;
