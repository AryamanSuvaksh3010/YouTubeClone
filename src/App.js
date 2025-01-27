import { Provider } from 'react-redux';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body.js';
import Head from './components/Head.js';
import store from './utils/store.js';
import MainContainer from './components/MainContainer.js';
import WatchPage from './components/WatchPage.js';
import SearchResultContainer from './components/SearchResultContainer.js';


// export const appRouter=createBrowserRouter([{
//   path:'/',
//   element:<Body/>,
//   children:[
//     {
//     path:'/',
//     element:<MainContainer/>
//   },
//   {
//     path:'watch',
//     element:<WatchPage/>
//   },
//   {
//     path:'results',
//     element:<SearchResultContainer/>
//   }
// ]
// }])

export const appRouter = createBrowserRouter([{
  path: '/',
  element: (
    <>
      <Head />  {/* Head will be rendered for all routes */}
      <Body />
    </>
  ),
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: 'watch',
      element: <WatchPage />
    },
    {
      path: 'results',
      element: <SearchResultContainer />
    }
  ]
}])


function App() {
  return (
    <Provider store={store} >
    <div >
      
      <RouterProvider router={appRouter} />

     {
      /** 
       * Head
       * Body
       *  Sidebar
       *    MenuItems
       *  MainContainer
       *   ButtonList
       *   VideoContainer
       *     VideoCard
       * 
       */
     }
    </div>
    </Provider>
  );
}

// function App() {
//   return (
//     <Provider store={store}>
//       <RouterProvider router={appRouter}>
//         <div>
//           <Head /> {/* Now inside the Router context */}
//           {
//             /** 
//              * Head
//              * Body
//              *  Sidebar
//              *    MenuItems
//              *  MainContainer
//              *   ButtonList
//              *   VideoContainer
//              *     VideoCard
//              */
//           }
//         </div>
//       </RouterProvider>
//     </Provider>
//   );
// }


 export default App;
