import React from "react";

export default function Display({ nums, setNums }) {

    return (
        <input type="text" className="display" value={nums} onChange={ ()=> setNums( nums ) } />
    );
};
