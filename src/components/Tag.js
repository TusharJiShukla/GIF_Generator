import React from "react";
import useGif from '../hooks/useGif'
import Spinner from "./Spinner";
import { useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState('india');
    const {gif, loading, fetchdata} = useGif(tag);
//   async function fetchdata() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const { data } = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     console.log(imageSource);
//     setGif(imageSource);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchdata();
//   }, []);

  function clickHandler() {
    fetchdata();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2  bg-purple-400 border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl font-semibold"> A Random {tag} GIF</h1>
      {loading ? <Spinner /> : <img src={gif} width="450px" />}
      <input
        type="text"
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px] border border-black"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
