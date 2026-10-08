import { useEffect, useState } from 'react';

export default function Card({ children, name, isShiny = false }) {
    const [url, setUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png");

    useEffect(() => {
        let ignore = false;
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    const version = isShiny ? "shiny" : "default";
                    const spriteUrl = json["sprites"]["other"]["official-artwork"][`front_${version}`];
                    setUrl(spriteUrl);
                }
            });
        return () => {
            ignore = true;
        };
    }, [name, isShiny]);

    return (
        <figure>
            <img src={url} alt="" />
            <figcaption>{children}</figcaption>
        </figure>
    );
}