import react from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import ReactPlayer from 'react-player'
import Topcontent from './Topcontent';
import VideoPlayer from './VideoPlayer';


const Content = () => {
   
    useEffect(() => {
        getData();
    
    }, [])
    const[contents,setContents]= useState([]);

    const getData = async() => {
    try{
        const response = await axios.get('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
        .then((response) => {
            const textData = response.data.texts;
            console.log(textData);
            setContents(textData);
         }
    
        )     
    
    }catch (error) {
    console.log(error);
    }}

  return (
    <>
    <Topcontent/>
    <div className='flex flex-col  md:flex-col lg:flex-row container bg-white-300 
    px-20
    '>
      <div className='flex-col basis-1/3 justify-center'>
     {contents.map((data,i) => (
    <li
    className='list-none'
     key={i}>
     <h3 className='text-xl font-bold capitalize
     bg-gradient-to-r from-pink-600 via-purple-500 to-violet-500 inline-block text-transparent bg-clip-text 
     '>  
     {data.heading}</h3>
     <h1 className='text-2xl font-bold text-gray-800 
      leading-4  py-8 capitalize
     '>
        {data.subHeading}</h1>   
    <p className='text-medium text-gray-600 font-normal 
     pb-52  mb-36 
    '>{data.description}</p>
</li>

   
 ))}
 </div>

 <div className='flex basis-2/3  h-screen  justify-center sticky top-32 mb-52 md:mb-0 lg:mb-0'>
    
  <VideoPlayer/>
 </div>
    </div>
    </>
  )
}

export default Content

