import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles({
    svgIcon:{
        width:'60px',
        marginLeft:'40px',
        marginRight:'40px'
        

    },
    portfilioIcons:{
        display:'flex',
        position:'absolute',
        marginTop:'50px',
        height:"500px"
    }

})



const SvgIcon =(props)=>{
const classes = useStyles()
return(
<div className={classes.portfilioIcons}>

{props.icons.map((item,index)=>{


return(
    <div className={classes.svgIcon}>
    {item}
    </div>
    )


})}

    </div>



)
}


export default SvgIcon