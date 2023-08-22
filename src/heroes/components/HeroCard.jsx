import { Link } from "react-router-dom"


export const HeroCard = ({ id, superhero, publisher, alterEgo, firstAppearance, characters }) => {

    const heroImg = `/assets/heroes/${ id }.jpg`

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImg } className="card-img" alt={ superhero } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{ alterEgo }</p>
                            {
                                ( alterEgo !== characters ) && (<p>{ characters }</p>)
                            }
                            <p className="card-text">
                                <small className="text-muted">{ firstAppearance }</small>
                            </p>
                            <Link to={`/hero/${ id }`}>
                                Read more...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}