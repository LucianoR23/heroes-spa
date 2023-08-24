import { Link } from "react-router-dom"
import './heroCard.css'


export const HeroCard = ({ id, superhero, publisher, alterEgo, firstAppearance, characters }) => {

    const heroImg = `./heroes/${ id }.jpg`

    return (
        <Link to={`/hero/${id}`} className="my-card">
            <img src={heroImg} className="img img-responsive" alt={superhero}/>
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alterEgo}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>First appearance: <br />{firstAppearance}</p>
                            {
                                (alterEgo !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
