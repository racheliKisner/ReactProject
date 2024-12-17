import ImageComponent from '../components/ImageComponent';
import {useState} from 'react'

import a from '../images/e.jpg'
import b from '../images/d.jpg'
import c from '../images/e.jpg'
import d from '../images/b.JPG'
import e from '../images/c.JPG'
function Gallery()
{
    const[imgs,setImgs]=useState([a,b,c,d,e])
   const[index,setI]=useState(0)
  
//    function chekp()
//    {
//     // if(index==4)
//     //     return false;
//     return true;
//    }
//    function chekm()
//    {
//     // if(index==0)
//     //     return false;
//     return true;
//    }

    return(
        <>
           <button  onClick={()=>setI(index+1)}>לתמונה הבאה</button>
           <ImageComponent props={imgs[index]}></ImageComponent>
           <button  onClick={()=>setI(index-1)}>לתמונה הקודמת</button>
        </>

    );
}
export default Gallery;