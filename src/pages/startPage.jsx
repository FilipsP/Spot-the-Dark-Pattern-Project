import "../css/start-page.css"
import { Link } from 'react-router-dom';
import { useState} from "react";

function MoreInfo() {
    return(
        <div>
            <div>
                <h2>Privacy Zuckering</h2>
                <p>'Privacy Zuckering' is a practice that tricks the user into sharing more information than they intended to.
                    Users may give up this information unknowingly or through practices that obscure or delay the option to
                    opt out of sharing your private information. California has approved regulations that limit this practice
                    by businesses in the California Consumer Privacy Act.</p>
            </div>
            <div>
                <h2>Bait-and-switch</h2>
                <p>Bait-and-switch patterns advertise a free (or at a greatly reduced price) product or service that is wholly unavailable or stocked in small quantities.
                    After announcing the product's unavailability, the page presents similar products of higher prices or lesser quality.</p>
            </div>
            <div>
                <h2>Confirmshaming</h2>
                <p>Confirmshaming uses shame to drive users to act. For example, when websites word an option to decline an email newsletter
                    in a way that shames visitors into accepting.</p>
            </div>
            <div>
                <h2>Misdirection</h2>
                <p>Common in software installers, misdirection presents the user with a button in the fashion of a typical continuation button.
                    A dark pattern would show a prominent "I accept these terms" button asking the user to accept the terms of a program unrelated
                    to the one they are trying to install. Since the user typically will accept the terms by force of habit,
                    the unrelated program can subsequently be installed. The installer's authors do this because
                    the authors of the unrelated program pay for each installation that they procure. The alternative route in the installer,
                    allowing the user to skip installing the unrelated program, is much less prominently displayed,
                    or seems counter-intuitive (such as declining the terms of service).
                    Some websites that ask for information that is not required also use misdirection.
                    For example, one would fill out a username and password on one page, and after clicking the "next" button,
                    the page asks the user for their email address with another "next" button as the only option.
                    This hides the option to press "next" without entering the information.
                    In some cases, the page shows the method to skip the step as a small, greyed-out link instead of a button,
                    so it does not stand out to the user. Other examples include sites offering a way to invite friends by entering their email address,
                    to upload a profile picture, or to identify interests.
                    Confusing wording may be also used to trick users into formally accepting an option which they believe has the opposite meaning,
                    for example a personal data processing consent button with label "don't not sell my personal information".</p>
            </div>
            <div>
                <h2>Roach motel</h2>
                <p>A roach motel or a trammel net design provides an easy or straightforward path to get in but a difficult path to get out.
                    Examples include businesses that require subscribers to print and mail their opt-out or cancellation request.
                    Recently, the Federal Trade Commission (FTC) has announced they will ramp up enforcement of dark patterns like roach
                    motel that trick consumers into signing up for subscriptions or making it difficult to cancel.
                    The FTC has stated key requirements to related to information transparency and clarity, express informed consent, and simple and easy cancellation.
                    During the 2020 United States presidential election, Donald Trump's campaign employed a similar dark pattern, pushing users towards committing
                    to a recurring monthly donation.</p>
            </div>
        </div>
    )
}

function StartPage() {

    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const styleForLink = {
        fontSize : "25px",
        border: "none",
        background: "none",
        textDecoration : "underline",
        cursor: "help"
    }

    const linkToInfo = () => {
        if (showMoreInfo){
        setShowMoreInfo(false)
        }else{
            setShowMoreInfo(true)
        }

    }

return(<div>
    <div className="container" >
        <h1 className="main-heading">Spot the Dark Pattern</h1>
        <div className="game-description game-description-container">Hello Friend!<br></br>
            <p>You are going to enter a game related to <button style={styleForLink} onClick={linkToInfo}><strong>Dark Patterns</strong></button> - <em>bad</em> things all over the internet that try
                to <em><strong>manipulate</strong></em> you with different <em>mechanics</em>.</p>
            <p>You will be given options on different situations - the choice is yours!
            Please remember - you will only have <strong>3</strong> lives, lose them - game over.</p>
            <p className="game-description">Good luck!</p>
            <p className="game-description">Kr,Development team.</p>

        </div>
        <Link to="/game">
            <button className="start-game-btn">Start game</button>
        </Link>
        {showMoreInfo && <MoreInfo/>}

    </div>
    
</div>)
}

export default StartPage;