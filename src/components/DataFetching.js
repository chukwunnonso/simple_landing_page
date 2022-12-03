//import './App.css';
import React, {useState, useEffect} from 'react';

const DataFetching = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=chukwunonso')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
            setLoading(false)
        })
    },[])
    console.log("Posts state", posts)
    return(
    <div className="App bg-slate-200 h-screen">
        <div className='flex flex-col justify-center items-center'>
            <div className='w-full xl:w-3/5 2xl:w-1/2  text-lg p-5'>
                
                
                <div>
                    {/* If we are loading, show loading placeholder
                    {loading && <h1>Getting posts...</h1>} */}

                    {/* If we have loaded the posts display them */}
                    {!loading &&
                    posts.map((post,id) => {
                        return (
                            <div className="" key={id}>
                        
                                <img className='w-full ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBXyQAvl5RGbY1Za7JOMOJK0MtITAvxheNg&usqp=CAU'></img>
                                
                                <div className="">                                
                                    <div className=" mt-5 text-4xl">{post.title}</div>
                                    <p className="">
                                    {post.published_at.slice(0, 10)}
                                    </p>
                                    <p className='text-black fonnt-bold'>{post.user.name}</p>
                                    <p className="text-grey-darker text-lg mt-2 mb-5">{post.description}</p>
                                    <button><a className="text-white font-bold py-2 px-4 rounded-full mt-4
                                    bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-violet-300"
                                    target="blank" href={post.canonical_url}>Read Blog</a></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}
export default DataFetching;


























//https://dev.to/api/articles?username=chukwunonso
//https://jsonplaceholder.typicode.com/posts
//https://dev.to/chukwunonso/asynchronous-javascript-using-callbacks-1nam






/*


import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])
  return (
    <div>

        <input type="text" value={id}  onChange={e => setId(e.target.value)} />
    
        <button type='button' onClick={handleClick}>Read Blog</button>    
        
        <div>{post.title}</div>
        
        
    </div>
  )
}

export default DataFetching

 */