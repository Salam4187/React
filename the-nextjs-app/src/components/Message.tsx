type MesssageProps={
    text: string,
    color: string
}

function Message(props:MesssageProps){
    console.log("Messgae",props)
    return (
        <div >
            <h4 style={{color:props.color}}>Messgae:{props.text}</h4>
            <p>  Generated at: {new Date().toLocaleString()}</p>
        </div>
        
    );
}

export default Message
