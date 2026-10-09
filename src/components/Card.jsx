import { useEffect, useState } from 'react';

export default function Card({ children, name, handleOnClick }) {
    const [url, setUrl] = useState("#");

    useEffect(() => {
        let ignore = false;
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    const spriteUrl = json["sprites"]["other"]["official-artwork"]["front_default"];
                    setUrl(spriteUrl);
                }
            });
        return () => {
            ignore = true;
        };
    }, [name]);

    return (
        <figure onClick={() => handleOnClick(name)}>
            <img src={url} alt="" />
            <figcaption>{children}</figcaption>
        </figure>
    );
}