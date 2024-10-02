import { Link } from "react-router-dom";

const CharactersByHero = ({alterEgo, characters}) => {
    if(alterEgo === characters) return (<></>);

    return (<p>{characters}</p>);
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alterEgo,
    firstAppearance,
    characters,
}) => {

    const heroImgUrl = `/assets/heroes/${id}.jpg`;

    // const characterByHero = (<p>{characters}</p>);

    return (
        <>
            <div className="col animate__animated animate__fadeIn">
                <div className="card">

                    <div className="row no-gutters">
                        
                        <div className="col-4 ">
                            <img src={heroImgUrl} className="card-img" alt={superhero} />
                        </div>
                        
                        <div className="col-8">

                            <div className="card-body">

                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alterEgo}</p>

                                <CharactersByHero characters={characters} alterEgo={alterEgo} />

                                <p className="card-text">
                                    <small className="text-muted">{firstAppearance}</small>
                                </p>

                                <Link to={`/hero/${id}`}>
                                    See more...
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}