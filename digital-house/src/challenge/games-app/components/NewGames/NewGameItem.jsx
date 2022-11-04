export function NewGameItem(props) {
    console.log(props)
    return (
        
        <li>
            <img src={props.picture} />
            <h3>{props.name}</h3>
            <img src={props.plataforms} />
            <span>{props.categories}</span>
            <span>{props.price}</span>
        </li>
    )
}