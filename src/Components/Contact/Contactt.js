import styled from "styled-components";


export const ContactSection = styled.div`
    padding: 50px 0;
    text-align: center
`

export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`

export const Span = styled.span`
    font-weight: normal;
`

export const Form = styled.form`
    margin: auto;
    width: 70%;
`

export const FatherInput = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`

export const FormInput = styled.div`
    overflow: hidden
`

export const InputText = styled(FatherInput)`
    float: left
    width: 49%;
`

export const InputMail = styled(FatherInput)`
    float: right
    width: 49%;
`

export const InputExp = styled(FatherInput)`
    width: 100%;
`
export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`
export const InputSub = styled(FatherInput)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`

