import { NewGameItem } from "./NewGameItem";
import { newGames } from "./newGames";
import "./styles.scss";

export function NewGames() {
  return (
    <>
      <h2>New Games</h2>
      <ul>
        {
        newGames.map((component) => {
          return <NewGameItem 
            key={component.id} 
            name={component.name}
            plataforms={component.plataforms} 
            categories={component.categories}  
            price={component.price}  
            picture={component=picture}/>;
            })
        }
      </ul>
    </>
  );
}
