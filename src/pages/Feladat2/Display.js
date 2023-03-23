import React from "react";

export default function Display(props) {

    return (
        <div className="display">
            { props.calc.seven + props.calc.eight }
        </div>
    );
};