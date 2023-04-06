import { ChangeEvent } from "react";
import styled from "styled-components";

interface IInputFormProps {
  type: "text" | "email" | "password";
  id?: "Email" | "Password" | "Name";
  onChange: (event:ChangeEvent<HTMLInputElement>)=>void;
  value: string;
}

interface IInputLabelProps{
    placeholder: "Email" | "Password" | "Name"
}

function CommonInputForm(
    {type, id, onChange, value} : IInputFormProps,
    {placeholder} : IInputLabelProps,
) {
  return(
    <StyledWrapper>
        <StyledInputForm type={type} id={id} onChange={onChange} value={value} />
        <label htmlFor={id}>
            <span>{id}</span>
        </label>
    </StyledWrapper>
  )
}

export default CommonInputForm;


const StyledWrapper = styled.div`
    width: 20.625rem;
    height: 2.25rem;
    margin: 0 auto;
`

const StyledInputForm = styled.input`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 0 0 0 1rem;
    
    font-size: ${({theme}) => theme.fontSize.fontSize2};
    color: ${({theme}) => theme.color.fontColorLight};

    border: .0625rem solid ${({theme}) => theme.color.lineCOlorLight};
    border-radius: ${({theme}) => theme.borderRadius.input};
    background-color: ${({theme}) => theme.color.white};
    ::placeholder{
        font-weight: ${({theme}) => theme.fontWeight.normal};
        color: ${({theme})=> theme.color.fontColorGrey}
    }
    ::placeholder-shown:not(:focus)+ *{
        font-size: ${({theme})=> theme.fontSize.fontSize1};
        opacity: 1;
        color: ${({theme})=>theme.color.fontColorLight};
    }
    :focus{
        outline: none;
    }

    + label{
        display: block;
        position: absolute;
        text-align: left;
        font-weight: bold;
        font-size: 0.7rem;
        padding: 1rem 0;
        color: gray;
        margin-top: 0%.7rem;
        transition: all .25s;
        transform: translateY(-240%)
    }

    :focus + label{
        color: white;
        transform: translateY(-245%);
        font-size: 0.7rem;
    }
`