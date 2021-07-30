
import React,{useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import './Header.css'


const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 63,
    height: 30,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(35px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#FFA400",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 30,
    height: 30
  },
  track: {
    borderRadius: 30 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    // backgroundColor: theme.palette.grey[50],
    backgroundColor: "#232123" ,
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

export default function CustomizedSwitches({themeState}) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  });

  const [theme, setTheme] = useState("light");

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if(theme === "light"){
      setTheme("dark");
      // console.log(theme);
  }
  else{
      setTheme("light");
      // console.log(theme);
  }
  themeState({theme});
  };

      
  return (
    <div className="header">
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            checkedIcon={<NightsStayOutlinedIcon className="icon"/>}
            icon={<WbSunnyOutlinedIcon className="icon"  style={{marginTop:"1px"}}/>}
            name="checkedB"
          />
        }
      />
    </FormGroup>
    </div>
  );
}

