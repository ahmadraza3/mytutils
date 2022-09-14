import React, { useState } from 'react'

export default function About() {
    // useState for change text of Dark mode 
    const [darkModeText, setDarkModeText] = useState("Enable Dark Mode");
    // useState of change backgroundColor and color of the div in order change dark mode 
    const [myStyle, setMyStyle] = useState({
        color: '#22382d',
        backgroundColor: 'white'
    });
    // callback function for dark mode enabled
    let toggleStyle = () => {
        if (myStyle.color === '#22382d' && myStyle.backgroundColor ==='white') {
            setMyStyle({
                color: 'white',
                backgroundColor: '#22382d',
                border:'0.5px solid gray'
                
            })
            setDarkModeText("Enable Light Mode");
            document.body.style.backgroundColor = "#212529";

        }
         else{
            setMyStyle({
                color: '#22382d',
                backgroundColor: 'white'
            })
            setDarkModeText("Enable Dark Mode");
            document.body.style.backgroundColor = "white";

        }
            
        

    }
    return (
        <>

            <div className="container  my-5 pb-4" style={myStyle}>
        {/* <body style="background-color: red"/> */}

                <h1>About Us</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle} >
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNames that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item " style={myStyle}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNames that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-toolbar btn-dark mt-3" onClick={toggleStyle} style={myStyle}>{darkModeText}</button>
            </div>
        </>
    );
}
