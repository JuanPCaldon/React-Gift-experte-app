
import {useEffect, useState} from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs =(category) =>{




 const [images, setimages]= useState([]);
  const [isloading,setisloading ]= useState(true);


  
  const getImages = async() =>{
    const newImages = await getGift(category);
     setimages(newImages);
     setisloading(false);
  }




 useEffect(()=> {   

    getImages(category)
     


 },[])   

   
    return {

        images,
        isloading


    }


        



}