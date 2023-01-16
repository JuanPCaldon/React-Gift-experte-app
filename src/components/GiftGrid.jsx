


import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import {Giftitem} from "./Giftitem";


export const GiftGrid =({category}) =>{

 
 
   const {images , isloading} = useFetchGifs(category);

    return (

        <>

             
         <h3>  {category}   </h3>
         {  
            isloading && <h2 >   cargando ....  </h2>
                

         }

             
             <div className="card-grid"> 
                {
                     images.map(image => (

                        <Giftitem 
                             key={image.id}
                             {...image}
                        
                        
                        />

                       



                     ))


                }
                
                
               
               
             
             </div>

        </>




    )

}