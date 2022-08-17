import "../../css/navbar.css"
import "../../css/main-menu.css"

const Navbar = (props) => {
  return(
      <nav className = "navigation-container">
          <div className="navigation-name-container">
              <div className="navigation-name">
                  Dark Patterns by "The Angry Beavers"
              </div>
          </div>
          <div className="dark dark-pattern-grid">
              <div onClick={()=>props.playVideo("privacy-zuckering")} className="dark-pattern-name">
                  Privacy Zuckering
              </div>
              <div onClick={()=>props.playVideo("bait-and-switch")} className="dark-pattern-name">
                  Bait-and-switch
              </div>
              <div onClick={()=>props.playVideo("confirmshaming")} className="dark-pattern-name">
                  Confirmshaming
              </div>
              <div onClick={()=>props.playVideo("misdirection")}  className="dark-pattern-name">
                  Misdirection
              </div>
              <div onClick={()=>props.playVideo("roach-motel")} className="dark-pattern-name">
                  Roach motel
              </div>
          </div>
      </nav>
  )
}
export default Navbar