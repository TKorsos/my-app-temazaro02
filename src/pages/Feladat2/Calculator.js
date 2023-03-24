import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export default function Calculator() {

    const[nums, setNums] = useState( '' );
    const cls = '';

    return (
        <div className="container">
            <div className="calculator">
                <Display nums={nums} setNums={setNums} />
                <Buttons nums={nums} setNums={setNums} cls={cls} />
            </div>
        </div>
    );
};