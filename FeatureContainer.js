import React,{useState} from 'react'
import "./FeatureContainer.css"
import Button from '@material-ui/core/Button';
function FeatureContainer({name,title,sendName}) {

    const [FName, setFName] = useState("");

    function send() {
        setFName(name);
        sendName({FName});
    }
    return (
        <div className="Features">
            {/* <Button variant="contained" className="Feature__Button" onClick={handelChange}>
                <p className="Feature__title">{props.title}</p>
            </Button> */}
            {/* <form action={`/${name}`} method="POST"> */}
                <Button variant="contained" className="Feature__Button" type="submit" onClick={send}>
                    <p className="Feature__title">{title}</p>
                    {/* <p>{props.name}</p> */}
                </Button>
            {/* </form> */}

        </div>
    )
}

export default FeatureContainer



