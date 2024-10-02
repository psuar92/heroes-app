import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

    const { id } = useParams();

    const hero = useMemo( () => getHeroById(id), [id] )

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!hero) {
        return <> <Navigate to={"/marvel"} /> </>
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`/assets/heroes/${id}.jpg`} 
                    alt={hero.superhero} 
                    className="img-thumbnail animate__animated animate__fadeInLeft animate__faster"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alterEgo}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {hero.firstAppearance}</li>
                </ul>

                <h5 className="mt-3"> Characters </h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Go back
                </button>
            </div>
        </div>
    );
}