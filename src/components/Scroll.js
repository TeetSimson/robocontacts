import React from 'react';

const Scroll = (props) => {
    return(
        <div className="pa4" style={{overflowY: 'scroll', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;