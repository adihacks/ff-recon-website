import React,{useState, useEffect} from 'react'
import "./Result.css"
function Result(props) {
    console.log(props.name);
    const [initialData, setInitialData] = useState([]);
    useEffect(() =>{
        fetch(`/${props.name}`)
        .then(response => response.json())
        .then(data => 
            setInitialData(data)
        )
    },[props.name] );
      
    return (
        <div className="Result">
            <div className="result__inner">
                <p>{initialData.result}</p>
            </div>


          {/* <div>{ JSON.stringify(initialData.result)
          }</div> */}
        </div>
     ) 
}

export default Result
