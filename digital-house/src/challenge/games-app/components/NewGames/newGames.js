import windows from "../../../../assets/images-games/Windows Client.png";
import mac from "../../../../assets/images-games/Mac Client.png";

export const newGames = [
    {
        id: 1,
        name: 'Hollow Knight',
        plataforms: [windows, mac],
        categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
        price: '20,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
    },
    {
        id: 2,
        name: "Don't Starve",
        plataforms: [windows, mac],
        categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
        price: '30,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
    },
    {
        id: 3,
        name: 'Cult of the Lamb',
        plataforms: [windows, mac],
        categories: ['Horror', 'Cute', 'Roguelike'],
        price: '45,00',
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
    }
]