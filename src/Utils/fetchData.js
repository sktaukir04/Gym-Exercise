export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

   export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '34a3a824damsh066abcb6f15b43fp12eecejsne75f0449328d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData=async(url,options)=>{
    const response = await fetch(url,options);
    const data=await response.json();

    return data;
}