
function ImageComponent(props){
    return(
       <>
       <img src={props.path} alt="myPicture" style={{width:150+'px'}}/>
      </>
    );
}
export default ImageComponent 