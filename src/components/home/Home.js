import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { foods, natures, automobiles } from '../../api/data';
import { Loader} from '../loader/Loader';
import './Home.css';

export function Home() {
    const [image, setimage] = useState([]);
    const [isLoading, setisLoading]=useState(true);
    useEffect(() => {
      setimage(foods);
      setTimeout(() => setisLoading(false), 2000);
    }, []);

    function getFood(){
        setimage(foods);
    }
    function getAutomobile(){
      setimage(automobiles);
    }
    function getNature(){
        setimage(natures);
    }

  return (
    <div className='home-class'>
        <div className='home-top'>
                <button className='food' onClick={getFood}>Food</button>
                <button className='automobile' onClick={getAutomobile}>Automobile</button>
                <button className='nature' onClick={getNature}>Nature</button>
        </div>
        <div className='home-middle'>
        {isLoading ? <Loader/> :
            <div className='card'>
                {
                    image.map((img)=>{
                  return <img className='content' src={img}/>
              })
                }
              </div>
        }
        </div>
        <div className='home-bottom'></div>
    </div>

  )
}
