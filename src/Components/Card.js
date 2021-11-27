import React from "react";


const Card = ({name, email, id}) => {
    return(
    <div className = 'bg-light-green dib pa3 ma2 shadow-5 grow br3'>
        <img alt='' src={`https://robohash.org/${ id }`} />
        <div className='tc'>
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>
    </div>
    )
}


export default Card;
