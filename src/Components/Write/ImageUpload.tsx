import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

interface IImageUploadProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function ImageUpload({ onChange, required }: IImageUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");

  const saveFileImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <StyledWrapper>
      <StyledPreviewWrapper>
        {previewImage && (
          <StyledPreview src={previewImage} alt="preview image" />
        )}
      </StyledPreviewWrapper>
      <StyledInput
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        ref={inputRef}
        multiple
        onChange={(e) => {
          saveFileImage(e), onChange?.(e);
        }}
        required={required}
      />
    </StyledWrapper>
  );
}

export default ImageUpload;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-top: 0.625rem;
`;

const StyledPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;

  border: 1px solid ${({ theme }) => theme.color.lineColorMiddle};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  overflow: hidden;
  cursor: pointer;
`;

const StyledPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.input};
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left: 0.6rem;
`;
