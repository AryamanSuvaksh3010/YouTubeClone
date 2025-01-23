import React from 'react'
import Comment from './Comment.js'
import CommentsList from './CommentsList.js'

const CommentsContainer = () => {
    const commentsData=[
        {
            name:"Aryaman",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo",
            replies:[
                {
                    name:"Aryaman",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
            replies:[
            ]
                }
            ]
        },
        {
            name:"Aryaman",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",
            replies:[
                {
                    name:"Aryaman",
            text:"Lorem ipsum dolor sit amet  ",
            replies:[
                {
                    name:"Aryaman",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  ",
            replies:[   
                {
                    name:"Aryaman",
            text:"😁😁 ",
            replies:[   
                {
                    name:"Aryaman",
            text:"Lorem ipsum dolor 😅😅",
            replies:[   
                
            ]
                },
                {
                    name:"Aryaman",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
            replies:[   
                
            ]
                }
            ]
                }
            ]
                }
            ]
                }
            ]
        },
        {
            name:"Aryaman",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing  ",
            replies:[
                {
                    name:"Aryaman",
            text:"❤️ ",
            replies:[
            ]
                }
            ]
        },
        
    ]


  return (
    <div className='m-5 p-2'>
    <h1 className='text-xl font-bold mb-6'>Comments</h1>
    {/* <Comment data={commetsData[0]}/>  */}
    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer