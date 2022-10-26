import './style.scss';


export function TerceiraAula() {
    const title = 'Teste'
    const compoenets = [
        { name: "Component Card", description: 'test', image: 'https://pbs.twimg.com/profile_images/1087693548823216128/BFuTxMgh_400x400.jpg' },
        { name: "Component Cebola", description: 'testinho', image: 'https://pbs.twimg.com/profile_images/1087693548823216128/BFuTxMgh_400x400.jpg'}
    ]

    return (
        <div>
            <h1>Lista de componenetes encontrados em um sistema</h1>
            <ul>
                {
                    compoenets.forEach(component => {
                        <li>
                            <img src={ component.image} />
                            <h1>{ component.name }</h1>
                            <p>{ component.description }</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}