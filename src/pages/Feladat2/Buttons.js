import React from "react";

export default function Buttons(props) {

    const handleChange = (e) => {
        props.setCalc( { ...props.calc, [e.target.name]: e.target.value } )
    }

    // onClick={ props.setCalc( { seven: "", eight: "" } ) }

    return (
        <div className="buttons">
            <input type="button" name="seven" value="7" onClick={handleChange} />
            <input type="button" name="eight" value="8" onClick={handleChange} />
            <input type="button" name="" value="9" />
            <input type="button" name="" value="/" />
            <input type="button" name="" value="4" />
            <input type="button" name="" value="5" />
            <input type="button" name="" value="6" />
            <input type="button" name="" value="*" />
            <input type="button" name="" value="1" />
            <input type="button" name="" value="2" />
            <input type="button" name="" value="3" />
            <input type="button" name="" value="+" />
            <input type="button" name="" value="CLS" />
            <input type="button" name="" value="0" />
            <input type="button" name="" value="=" />
            <input type="button" name="" value="-" />
        </div>
    );
};