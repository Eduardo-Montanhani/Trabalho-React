import styled from 'styled-components'

export const FormContainer = styled.form`

* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

    body{
        background-color: #fafafa;
    }

    div {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    }

    h1 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    span {
        font-size: 15px;

    }

    input {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;
        margin:2px;

        &::placeholder {
            color: var(--text-body);
        }
    }

    select{
        margin-top: 10px;
        height: 30px;
    }

    textarea {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
        margin-top:  1rem;
    }

    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: #243a69;
        color: #fff;
        border-radius: 8px;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;

        &:hover {
            filter: brightness(0.9);
        }

    }

`
