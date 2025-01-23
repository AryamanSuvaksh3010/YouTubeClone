import React from 'react'
import { NavLink  } from 'react-router-dom';

import homeIcon from '../assets/bell.svg';
import shortsIcon from '../assets/bell.svg';
import subscriptionsIcon from '../assets/bell.svg';
import redLiveIcon from '../assets/bell.svg';

import libraryIcon from '../assets/bell.svg';
import historyIcon from '../assets/bell.svg';
import yourVideosIcon from '../assets/bell.svg';
import watchLaterIcon from '../assets/bell.svg';
import likedVideosIcon from '../assets/bell.svg';
import showMoreIcon from '../assets/bell.svg';

import trendingIcon from '../assets/bell.svg';
import shoppingIcon from '../assets/bell.svg';
import musicIcon from '../assets/bell.svg';
import moviesIcon from '../assets/bell.svg';
import liveIcon from '../assets/bell.svg';
import gamingIcon from '../assets/bell.svg';
import newsIcon from '../assets/bell.svg';
import sportsIcon from '../assets/bell.svg';
import learningIcon from '../assets/bell.svg';
import fashionAndBeautyIcon from '../assets/bell.svg';

import ytPremiumIcon from '../assets/bell.svg';
import ytStudioIcon from '../assets/bell.svg';
import ytMusicIcon from '../assets/bell.svg';
import ytKidsIcon from '../assets/bell.svg';

import settingsIcon from '../assets/bell.svg';
import reportHistoryIcon from '../assets/bell.svg';
import helpIcon from '../assets/bell.svg';
import sendFeedbackIcon from '../assets/bell.svg';
import { useSelector } from 'react-redux';
import './buttonListStyle.css'

const Sidebar = () => {

  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

  // early return pattern
  if(!isMenuOpen)
    return null;


  return (
    <div className='p-5 max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain fixed top-[110px] z-50 bg-white text-left w-[280px] no-scrollbar'>
    <ul>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'>
        <NavLink  to='/'> 
        <img className='inline-block align-bottom mr-3' src={homeIcon} alt="Home" /> Home</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={shortsIcon} alt="Shorts" /> Shorts</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={subscriptionsIcon} alt="Subscriptions" /> Subscriptions</NavLink ></li>
    </ul>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    <ul>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={libraryIcon} alt="Library" /> Library</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={historyIcon} alt="History" /> History</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={yourVideosIcon} alt="YourVideos" /> Your Videos</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={watchLaterIcon} alt="WatchLater" /> Watch Later</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={likedVideosIcon} alt="LikedVideos" /> Liked Videos</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> Show More</NavLink ></li>
    </ul>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    <h1 className='font-medium pt-5'>Subscriptions</h1>
    <ul>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Scary Fun <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="ScaryFun" /> </NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Crime Tak <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="CrimeTak" /> </NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Show More... <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> </NavLink ></li>
    </ul>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    <h1 className='font-medium pt-5'>Explore</h1>
    <ul>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={trendingIcon} alt="Trending" /> Trending</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={shoppingIcon} alt="Shopping" /> Shopping</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={musicIcon} alt="Music" /> Music</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={moviesIcon} alt="Movies" /> Movies</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={liveIcon} alt="Live" /> Live</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={gamingIcon} alt="Gaming" /> Gaming</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={newsIcon} alt="News" /> News</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={sportsIcon} alt="Sports" /> Sports</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={learningIcon} alt="Learning" /> Learning</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={fashionAndBeautyIcon} alt="FashionBeauty" /> Fashion & Beauty</NavLink ></li>
    </ul>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    <h1 className='font-medium pt-5'>More From Youtube</h1>
    <ul>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={ytPremiumIcon} alt="YoutubePremium" /> Youtube Premium</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={ytStudioIcon} alt="YoutubeStudio" /> Youtube Studio</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={ytMusicIcon} alt="YoutubeMusic" /> Youtube Music</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={ytKidsIcon} alt="YoutubeKids" /> Youtube Kids</NavLink ></li>
    </ul>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    <ul>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={settingsIcon} alt="Settings" /> Settings</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={reportHistoryIcon} alt="ReportHistory" /> Report History</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={helpIcon} alt="Help" /> Help</NavLink ></li>
      <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={sendFeedbackIcon} alt="Send Feedback" /> Send Feedback</NavLink ></li>
    </ul>
  </div>
  )
}

export default Sidebar