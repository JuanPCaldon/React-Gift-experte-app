

import React, { useState } from "react";
import { AddCategory,GiftGrid} from "./components";


export const GiftExpertApp=() =>{
    

/*     const ApiKey= m4QJSEzJBoSe6FfaIT1ErA14yGllTazZ;

 */

  const [categories,setcategories]= useState(['']);
  
   const onAddCategory =(NewCategory) => {

      if(categories.includes( NewCategory)) return;
            
        setcategories([NewCategory, ...categories]);
      



   }
    
 

    return(


        <>  

           {/* titulo */}
             <h1> GiftExpertApp </h1>



            {/* inputs */} 

            <AddCategory

            onNewCategory={onAddCategory}
            
        
            />
           





          

                { categories.map(category => {
                  return(

                    <GiftGrid
                        key={category} 
                        category ={category}
                    
                    />
                 
                   

                  )



                })

            }
                 
            
           
        
        
        
        
        </>




    )

}