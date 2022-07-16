import React from 'react';

function Child({ data, onChildClick }) {
    return (
        <div className="child">
            <button onClick={onChildClick}>{data}</button>
        </div>
    );
}

export default function Parent() {

    function clickAlert() {
        alert("I am called from Child")
    }
    return (
        <div className="App">
            <Child data="Child 1" onChildClick={clickAlert} />
        </div>
    );
}