import React from "react";

export default function Buttons({nums, setNums, cls}) {

    // érvényes matematikai kifejezés esetén elvégzi a műveletet, amennyiben nem hibaüzenetet ad és kiüríti a display tartalmát
    const Calculate = () => {
        try {
            setNums( eval(nums) );
        }
        catch(e) {
            alert( 'Érvénytelen matematikai művelet!' );
            setNums( cls );
        }
    }

    return (
        <div className="buttons">
            <button onClick={()=> setNums( nums + 7 )}>7</button>
            <button onClick={()=> setNums( nums + 8 )}>8</button>
            <button onClick={()=> setNums( nums + 9 )}>9</button>
            <button onClick={()=> setNums( nums + '/' )}>/</button>
            <button onClick={()=> setNums( nums + 4 )}>4</button>
            <button onClick={()=> setNums( nums + 5 )}>5</button>
            <button onClick={()=> setNums( nums + 6 )}>6</button>
            <button onClick={()=> setNums( nums + '*' )}>*</button>
            <button onClick={()=> setNums( nums + 1 )}>1</button>
            <button onClick={()=> setNums( nums + 2 )}>2</button>
            <button onClick={()=> setNums( nums + 3 )}>3</button>
            <button onClick={()=> setNums( nums + '-' )}>-</button>
            <button onClick={()=> setNums( cls )}>CLS</button>
            <button onClick={()=> setNums( nums + 0 )}>0</button>
            <button onClick={ Calculate }>=</button>
            <button onClick={()=> setNums( nums + '+' )}>+</button>
        </div>
    );
};