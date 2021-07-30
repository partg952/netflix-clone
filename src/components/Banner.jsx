import React from 'react'
import './Banner.css';
import axios from 'axios';
import {useState} from 'react';
export default function Banner() {
    const nav = React.useRef();
    const [data,setData] = useState([])
    window.onscroll = () =>{
        if(window.scrollY > 30){
            nav.current.classList.add('active')
        }
        else{
            nav.current.classList.remove('active')
        }
    }
    React.useEffect(()=>{
        function getData(){
            var rand = Math.floor(Math.random()*(200-100)+100)
            axios(`https://api.themoviedb.org/3/movie/${rand}?api_key=e1fa13c7e6a35b25826f92b2aea94264`)
            .then((res)=>{
                console.log(res.data)
                setData(res.data)
            }).catch(()=>{
                getData();
            })
        }
        getData();
    },[])
    return (
        <div>
             <nav ref={nav}>
                <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
             </nav> 
             <div id="banner-bottom">
                {
                    
                        <div id='movie-banner' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`}}>
                            <div id="text">
                                <span>
                                <h1>{data.title}</h1>
                                <button>Play</button>
                                <button>My List</button>
                                <h5>{data.overview}</h5>
                                </span>
                            </div>
                        </div>
                    

                }
             </div>           
        </div>
    )
}
