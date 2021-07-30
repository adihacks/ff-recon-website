import React,{useState} from 'react'
import Header from './Header'
import "./Body.css"
import FeatureContainer from './FeatureContainer'
import box from './Feature'
import styled, { ThemeProvider } from "styled-components";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";
import CustomizedSwitches from './Header';
import Result from './Result'
import Input from './Input'



function Body() {
    const [name,setName] = useState("");
    const [theme, setTheme] = useState("dark");

      const themeState = ({theme}) => {
         setTheme(theme); 
      }

      const sendName = ({FName}) => {
            setName(FName);
      }
      
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="Body">
            <CustomizedSwitches themeState={themeState} />

            <div className="Input__Field">
                <Input />
            </div>

            <div className="Feature__Containers">
                {box.map((item) =>(
                    <FeatureContainer
                    id={item.id}
                    title={item.title}
                    name={item.name}
                    sendName={sendName}
                    />
                ))}                
            </div>
            <div className="Result__Containers">
                <Result
                name={name}
                />
            </div>

        </div>
        </ThemeProvider>

        
        
    )
}

export default Body
