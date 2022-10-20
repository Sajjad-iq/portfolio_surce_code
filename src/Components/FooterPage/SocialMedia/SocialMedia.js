import Linkedin from "../../../assets/linkedin-svgrepo-com.svg"
import insata from "../../../assets/instagram-svgrepo-com.svg"
import github from "../../../assets/github-svgrepo-com.svg"

export default function SocialMedia() {
    return (
        <div className='SocialMedia'>
            <a className='SocialMedia-btn' href=" https://github.com/Sajjad-iq/" target="_blank"><img className="SocialMedia-icon" src={github} alt="icon" /></a>
            <a className='SocialMedia-btn' href=" https://www.linkedin.com/in/sajjad-kademm-a68294209/" target="_blank"><img className="SocialMedia-icon" src={Linkedin} alt="icon" /></a>
            <a className='SocialMedia-btn' href=" https://www.instagram.com/sajja3kademm/" target="_blank"><img className="SocialMedia-icon" src={insata} alt="icon" /></a>
        </div>
    )
}
