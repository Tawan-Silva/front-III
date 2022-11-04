export function QuintaAulaItem(prop) {
    return (
        <li key={prop.prop.id}>
              <img src={prop.prop.image} />
              <h1>{prop.prop.title}</h1>
              <p>{prop.prop.text}</p>
            </li>
    )
}