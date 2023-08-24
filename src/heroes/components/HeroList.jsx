import { useMemo } from "react"
import { HeroCard } from "./"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import './heroList.css'


export const HeroList = ({ publisher }) => {

    const heroes = useMemo ( () => getHeroesByPublisher( publisher ), [ publisher ] )

    return (
        <div className="row rows-cols-1 row-cols-sm-3 g-1 hero-phone">
            {
                heroes.map( (hero) => (
                    <HeroCard key={hero.id} {...hero} />
                ) )
            }
        </div>
    )
}
