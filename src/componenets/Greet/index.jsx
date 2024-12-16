export default function Greet(props){

    return(
        <p>Hello {props.name?props.name:"strenger"}</p>
    )
}