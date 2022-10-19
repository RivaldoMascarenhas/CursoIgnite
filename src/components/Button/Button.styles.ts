import styled, {css} from 'styled-components';

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps{
    variant: ButtonVariant ;
}

const buttonVariant = {
    primary : 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'

}
export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 40px;
margin: 1rem;
border: none;
border-radius: 8px;
color:white;
cursor: pointer;
flex-direction: row;
background-color: ${props=> props.theme.primary}




/* ${props=> 
{
    return css`background-color: ${buttonVariant[props.variant]}`
}
} */
`