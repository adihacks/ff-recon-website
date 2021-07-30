import React,{useState, useEffect} from 'react';
import { Card } from '../Component/card/Card';
 


export const TodoPage = ()=>{

    const [todo,setTools] = useState([])

useEffect(()=> {
    fetch('/api').then(response => {
        if(response.ok){
            return response.json()
        }
    }).then(data => console.log(data))
},[])

return(
    <>
      <Card/>
    </>
)

}