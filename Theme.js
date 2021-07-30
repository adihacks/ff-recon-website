import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  // button: "#fff",
  button: "#FDF6F0",
  submitButtonHover:'#3f50b5',
};

export const darkTheme = {
  body: "#121113",
  fontColor: "#fff",
  button: '#232123',
  submitButton: '#FFA400',
  submitButtonHover:'#24d876',

};

export const GlobalStyles = createGlobalStyle`

body {

  background-color: ${(props) => props.theme.body};

}
#parent{
  color: ${(props) => props.theme.fontColor};
}

.Feature__title{
  color: ${(props) => props.theme.fontColor};
}
.Feature__Button {
  background-color: ${(props) => props.theme.button};
}
.Feature__Button:hover {
  background-color: ${(props) => props.theme.submitButtonHover} !important;
}
.Feature__Button:focus {
  background-color: ${(props) => props.theme.submitButtonHover};
}


.Result{
  background-color: ${(props) => props.theme.button};
}
#outlined-basic{
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.fontColor};
}

.Mui-focused fieldset {
  border-color: ${(props) => props.theme.submitButton} !important;
}

.MuiFormLabel-root.Mui-focused{
  color: ${(props) => props.theme.submitButton} !important;
}

.MuiInputLabel-outlined{
  color: ${(props) => props.theme.fontColor};
}
.submit__button{
  background-color: ${(props) => props.theme.submitButton};
}
// .submit__button:hover{
//   background-color: ${(props) => props.theme.submitButtonHover} !important;
// }
.result__inner{
  color: ${(props) => props.theme.fontColor};
}
`;