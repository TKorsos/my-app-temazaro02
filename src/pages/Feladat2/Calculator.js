import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export default function Calculator() {

    const initialState = {
        seven: "",
        eight: "",
    }
    const[calc, setCalc] = useState( initialState );

    return (
        <div className="container">
            <div className="calculator">
                <Display calc={calc} />
                <Buttons calc={calc} setCalc={setCalc} cls={initialState} />
            </div>
        </div>
    );
};