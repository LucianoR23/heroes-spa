import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"


export const HeroPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    
    const hero = useMemo( () => getHeroById( id ), [ id ] )

    const returnValue = ( publisher ) => {
        if( publisher === 'DC Comics'){
            return 'dc'
        }else {
            return 'marvel'
        }
    }

    const onReturn = () => {
        navigate( `/${returnValue(hero.publisher)}` )
    }

    if( !hero ){
        return <Navigate to='/marvel' />
    }
    const heroImg = `https://lucianor23.github.io/heroes-spa/heroes/${ id }.jpg`

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ heroImg } alt={ hero.superhero } className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { hero.alterEgo }</li>
                    <li className="list-group-item"> <b>Publisher:</b> { hero.publisher }</li>
                    <li className="list-group-item"> <b>First appearance:</b> { hero.firstAppearance }</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{ hero.characters }</p>
                <button onClick={ onReturn } className="btn btn-outline-primary">Return</button>
            </div>
        </div>
    )
}
