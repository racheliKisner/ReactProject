
const Messages=(()=>{

   const [messages, setMessages] = useState([]);
   const scroll = useRef(0);
    
    return(
        <>
        <h1>
           MESSAGE
        </h1>
        <button onClick={ <button type="submit" onClick={()=>setMessages(({start:start,finish:finish,name:name,priority:priority,id:id}),setId(id+1))}>add message</button>
        </>

    );

});
export default Messages; 