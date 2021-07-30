import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '98%',
    },
  },
}));

function Input() {
    const classes = useStyles();
    const [enteredUrl, setenteredUrl] = useState("");

    function send() {

      fetch("/result", {
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:JSON.stringify(enteredUrl)
        }
    )
    .then(response => {
       response.json()
  })
   
    }
    return (
        <div className="input__container">
            <form className={classes.root} style={{width:"90%" , margin:"0px"}} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="URL" variant="outlined" value={enteredUrl} onChange={e => setenteredUrl(e.target.value)}  placeholder="Ex google.com" />
            </form>
            <div className="button__container"> 
                    <Button className="submit__button" variant="contained" color="primary" onClick={send}>
                        Submit
                     </Button>
                </div>
           
            
        </div>
    )
}

export default Input
