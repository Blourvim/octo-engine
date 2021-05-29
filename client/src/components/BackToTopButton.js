import React,{useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';



const BackToTopButton = ()=>{
const [scrollDown, setScrollDown] = useState(false);
const [screenPosition, setScreenPosition] = useState(false);

useEffect(()=>{
console.log('yes render')

},[screenPosition])
return(<div>
     {scrollDown && <IconButton/>}
</div>
)

}

export default BackToTopButton;