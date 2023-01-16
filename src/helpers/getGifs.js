

   export const getGift =async(category) =>{
   
    const url = `https://api.giphy.com/v1/gifs/search?api_key=m4QJSEzJBoSe6FfaIT1ErA14yGllTazZ&q=${category}&limit=10`;
       
    const resp = await fetch(url);

    const { data }= await resp.json();

    const gifs = data.map( img =>({
       
            id: img.id,
            tittle: img.tittle,
            url: img.images.downsized_medium.url



    }));

    console.log(gifs)
    return(gifs);

    };
   
  