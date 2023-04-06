import styled from "styled-components";

interface ILoginContainer{
    name ?: string;
    
}

function LoginContainer(){
    return(
        <StyledLoginContainer>
        </StyledLoginContainer>
    )
}

export default LoginContainer;

const StyledLoginContainer = styled.div`
width: 38.75rem;
height: 26.25rem;
border: .125rem solid ${({theme}) => theme.color.brandColorLight};
`