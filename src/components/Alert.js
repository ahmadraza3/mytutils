import React from 'react'

export default function Alert(props) {
const setTime=()=>{
    setTimeout(() => {
        
        document.getElementsByClassName('btn-close').click();
    }, 1500);

}
    // Function to convert the first letter in uppercase and rest with lower case 

    // const capitalize=(word)=>{
    //     const lower=word.tolowerCase();
    //     return lower.charAt(0).toUpperCase() +lower.slice(1);
    // }

    return (
        <>
            <div className="alert alert-success alert-dismissible fade show  text-green" role="alert">
                <strong>{props.alert.type}</strong>  {props.alert.msg}
                <button type="button" className="btn-close" onClick={setTime} data-bs-dismiss="alert" aria-label="Close">{console.log(props.alert.type)}</button>
            </div>

        </>
    )
}
