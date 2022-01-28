import React, {useState} from 'react'

function About() {

    const[myStyle, setMyStyle]= useState({
        color:'black',
        backgroundColor: 'white'
    })
    const[btnText, setBtnText]= useState("Enable dark mode")
    const toggleStyle = () =>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark Mode")
    }
    }
    return (
        <div>
            <h2 style={myStyle}>About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                </div>

<div className='container' mt-3 style={myStyle}>
    <button type="button" onClick={toggleStyle} className="btn btn-primary" >{btnText}</button>
    </div>
        </div>
    )
}

export default About
