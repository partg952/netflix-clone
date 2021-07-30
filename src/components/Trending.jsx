import React,{useState} from 'react'
import './Trending.css';
import axios from 'axios';
function Trending() {
    const [data,setData] = useState([])
    console.log(data)
    function CheckLength(string){
        var re = ''
        if(string.length > 150){
            re = string.substr(150,string.length);
            return string.replace(re,'...')
        }
           else{
               return string;
           }
    }
    function chooseColor(rating){
        let color = ''
        if(rating <= 3){
            color = 'red'
        }
        else if(rating <= 7){
            color = 'yellow'
        }
        else{
            color = 'rgb(12, 221, 12)'
        }
        return color
    }
    React.useEffect(()=>{
        axios(`https://api.themoviedb.org/3/trending/all/day?api_key=e1fa13c7e6a35b25826f92b2aea94264`)
        .then(res=>{
            console.log(res.data);
            setData(res.data.results)
        })
    },[])
    return (
        <div className='trending'>
        <h1>Trending</h1>
        <div id="trending">
            {
                data.map((items)=>(
                    <div id="trending__child">
                        <img src={'https://image.tmdb.org/t/p/w500'+items.poster_path} alt="" id='poster' />
                        <h6 id='overview'>{CheckLength(items.overview)}</h6>
                        <div id="rating">
                            <p style={{color:chooseColor(items.vote_average)}}>{items.vote_average}</p>
                        </div>
                    </div>
                    
                ))
            }
        </div>
        </div>
    )
}

export default Trending;
