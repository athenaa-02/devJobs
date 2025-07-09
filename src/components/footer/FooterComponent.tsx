import Apply from '../buttons/ApplyNow/Apply'
import './Footer.css'

function FooterComponent(props:any){
    return(
        <>
        <footer>
            <aside>
                <h6>{props.position}</h6>
                <span>{props.company}</span>
            </aside>
            <Apply></Apply>
        </footer>
        </>
    )
}

export default FooterComponent