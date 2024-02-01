import BrendSection from "./BrendSections/BrendSection"
import Item from "./Item"
import NewsBlog from "./NewsBlog.jsx"
import Recomendation from "./Recomendation.jsx"

export default function Main(){
    return (
        <main>
            <div class="slider">
            </div>
            <Recomendation/>
            <BrendSection/>
            <NewsBlog/>           
        </main>
    )
}