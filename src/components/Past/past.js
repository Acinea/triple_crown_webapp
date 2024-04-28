
import CloseIcon from '@mui/icons-material/Close';
import card from '../../resources/sportcard.jpg'
import player from '../../resources/GoodenDwight.png'
import logo from '../../resources/tcp logo.png'
import ian from '../../resources/ian.jpg'
import './past.css'

export function Past(props) {
    return (
        <main id={props.showPast ? 'past-main' : 'hide-past-main'}>
            <div className='close-past-menu-button' onClick={props.togglePast}><CloseIcon/></div>
            <h1 id="past-title">Past Events</h1>
            
            <div id="past-events-container">
                <div className='past-event'>
                    <h2>April 13th, 2024</h2>
                    <h3>Triple Crown Promotion Presents: Sportscards & Collectibles Show.</h3>
                    <img className='past-image' src={card} alt="sports cards" />
                </div>
                <div className='past-event'>
                    <h2>March 2nd, 2024</h2>
                    <h3>Triple Crown Promotion Presents: Sportscards & Memorabilia Show.</h3>
                    <img className='past-image' src={card} alt="sports cards" />
                </div>
                <div className='past-event'>
                    <h2>January 6th, 2024</h2>
                    <h3>Triple Crown Promotion Presents: Sportscards & Memorabilia Show.</h3>
                    <img className='past-image' src={card} alt="sports cards" />
                </div>
                <div className='past-event'>
                    <h2>December 2nd, 2023</h2>
                    <h3>Triple Crown Promotion Presents: Sportscards & Memorabilia Show.</h3>
                    <img className='past-image' src={ian} alt="sports cards" />
                </div>
                <div className='past-event'>
                    <h2>November 11th, 2023</h2>
                    <h3>Triple Crown Promotion Presents: Sportscards & Memorabilia Show. Featuring: Thomas Ian Nicholas</h3>
                    <img className='past-image' src={ian} alt="sports cards" />
                </div>
                <div className='past-event'>
                    <h2>October 7th, 2023</h2>
                    <h3>Triple Crown Promotion Presents: Sportscards & Memorabilia Show</h3>
                    <img className='past-image' src={card} alt="sports cards" />
                </div>
                <div className='past-event'>
                    <h2>September 9th, 2023</h2>
                    <h3>Triple Crown Promotion Presents: Sportscards & Memorabilia Show</h3>
                    <img className='past-image' src={card} alt="sports cards" />
                </div>
                <div className='past-event'>
                    <h2>June 11th, 2023</h2>
                    <h3>Triple Crown Promotion Presents:<br></br> Dwight Gooden</h3>
                    <img className='past-image' src={player} alt="dwight gooden" />
                </div>
            </div>
            <div id='menu-footer-logo-container'>
                <img id='menu-footer-logo' src={logo} alt='company logo' />
            </div>
        </main>
    )
}


