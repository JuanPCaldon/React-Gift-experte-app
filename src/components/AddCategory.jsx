

import React, { useState } from "react";

export const AddCategory =({onNewCategory}) =>{
  

    const[inputValue , setinputValue]=useState('')
    

    const onInputChange = (event)=>{

        setinputValue(event.target.value);


    }


    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return ;

       // setcategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue(' ');
        //console.log(inputValue);



    }



        return(

            <form onSubmit={ (event)=>onSubmit(event)} > 
            
            <input 
            type="text"
            placeholder="BuscarGIFS"
            value={inputValue}
            onChange={(event) =>onInputChange(event)}
            
            /> 

            </form>
                 
             
        )
 

}