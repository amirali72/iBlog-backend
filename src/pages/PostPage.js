import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import Shimmer from '../Shimmer';

const PostPage = () => {

    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`)
        .then(response=>{
            response.json().then(postInfo=>{
                setPostInfo(postInfo);
            })
        })
    })


  return (!postInfo) ? <Shimmer/> : (
    <div className="article1 max-width m-auto">
       <div className="center">
           <h2> {postInfo.summary} </h2>
           <p className='info'>
                <span className='author'> by @{postInfo.author.username} | </span>
                <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            </p>
           <img src={`http://localhost:4000/${postInfo.cover}`} alt="error"/>
        </div>

        <div className="article-content">
        <p className="content2" dangerouslySetInnerHTML={{__html:postInfo.content}} />
        </div>
    </div>

  )
}

export default PostPage
