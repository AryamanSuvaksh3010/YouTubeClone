
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from "../utils/appSlice.js";
import bellIcon from '../assets/bell.svg';
import createIcon from '../assets/bell.svg';
import { YOUTUBE_SEARCH_API } from '../utils/constants.js';
import { useNavigate } from 'react-router-dom';

const Head = () => {

  const [searchQuery , setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([])
  const [showSuggestions,setShowSuggestions] =useState(false)
  //const [clickOnSuggestion,setClickOnSuggestion]=useState(false);
  const searchCache = useSelector((store)=>store.search)
// Debouncing 

  useEffect(()=>{
   
    // make an api call after evry key press but if the difference in 2 key strokes is < 200ms then 
    // decline the api calls
    console.log("Search Query is :" + searchQuery)
const timer = setTimeout(()=> {
  if(searchCache[searchQuery])
    setSuggestions(searchCache[searchQuery])
  else
  getSearchSuggestions()
}
  ,200);

return ()=>{
  clearTimeout(timer);
};

  },[searchQuery])

  /**
   * 
   * key - i
   * render the component
   * useEffet()
   * start timer => make api call after 200ms
   * 
   * key - ip
   * destryo the old component (useEffect return method run)
   * re-render the component 
   * useEffect()
   * start timer => make api call after 200ms
   * 
   * 
   * setTimeout(200) - make api call after 200ms
   */

  const getSearchSuggestions = async (query) => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`, {
        mode: 'cors'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleBlur = () => {
    // Use a timeout to delay hiding suggestions
    setTimeout(() => {
      
      setShowSuggestions(false);
    }, 300); // Delay to allow the click event to register
  };
  
  const navigate =useNavigate()
  const getSearchVideos = (s)=>{
    navigate('/results?search_query=' + encodeURI(s));
  // window.location.href = '/results?search_query=' + encodeURI(s);
  }
  return (
    <div className='grid grid-flow-col p-5 shadow-lg fixed top-0 w-full bg-white z-50'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' alt='menu' />
        <img
          className='h-8 mx-3'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png' alt='logo' />
      </div>
      <div className='col-span-10 px-40'>
        <div>
        <input
          className='p-2 w-4/5 border border-gray-400  rounded-s-full '
          type="text" placeholder='Search'
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={handleBlur}
          spellCheck={false}
          onKeyDown={(e)=>{
            if(e.key=="Enter"){
            getSearchVideos(searchQuery)
            setShowSuggestions(false)
            }
          }}
          />
          {searchQuery && <button onClick={() => setSearchQuery("")} className='absolute hover:bg-gray-200 hover:rounded-full font-bold w-9 h-9 left-[64%] top-[25px]'>X</button>}
        <button
          className='border border-gray-400 p-2 rounded-e-full bg-red-700 text-white font-bold hover:bg-red-800'
          onClick={()=>{getSearchVideos(searchQuery)
            setShowSuggestions(false)
          }
          }
          >
          Search
        </button>
        </div>
        {showSuggestions && <div className='fixed bg-white py-3 px-5 w-[44.5%] rounded-lg shadow-xl text-base font-bold'>
          <ul>
            {suggestions.map((s,index)=> <li key={index} className='py-1 hover:bg-gray-100 cursor-pointer'
            value={s}
            onClick={()=>{setSearchQuery(s)
              getSearchVideos(s)
            }
            }
            > <img  className='mr-5 h-4 ml-3 inline-block' alt='search-icon' src='https://cdn-icons-png.flaticon.com/512/482/482631.png' /> {s}</li>)}
          </ul>
        </div>}
        
      </div>
      <div className='col-span-1 flex gap-5'>
        <img
          className='h-8'
          src={bellIcon} alt='bell icon' />
        <img
          className='h-8'
          src={createIcon} alt='create icon' />
        <img
          className='h-8'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s' alt='user icon' />
      </div>
    </div>
  );
};

export default Head;