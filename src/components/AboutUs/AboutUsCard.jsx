import './AboutUsCard.css'
import cafeImg from '../../assets/code&coffee.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const AboutUsCard = () => {
  return (
    <div className="about-us__container">
        <div className="about-us__text">
            <div className="about-us__text-header">
                <h1>Welcome to Code & Coffee</h1>
            </div>
            <div className="about-us__text-content">
                <p>Get involved with Code & Coffee! Sponsor an event to promote your business, volunteer at regular events, or join as a panelist in one of our symposioms. You can also lead a tech workshop, give a Lightning Talk, contribute as a web developer on GitHub, or present your project at one of our Demo Days. There are many ways to participate and make an impact!</p>
            </div>
            <div className="about-us__text-btn">
                <button className = "about-us__btn">
                    <div className="about-us__btn-txt">Learn More</div>
                    <div className="about-us__btn-icon"><ArrowRightAltIcon /></div>
                </button>
            </div>
        </div>
        <div className="about-us__img">
            <img src={cafeImg} alt="" />
        </div>
    </div>
  )
}

export default AboutUsCard