import React from "react";


export const Giftitem =({tittle ,url, id}) => {

    

    return (

        <div className="card">
            <img src={url} alt={tittle} />
            <p>{tittle}</p>
            
            
        </div>

    )
        
}