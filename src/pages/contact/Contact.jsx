import './contact.css'
import michu from '../../images/Michu.jpg';
import kondziu from '../../images/Kondziu.png';


export default function Contact() {
    return (
        <div className="contact">
            <div className='wrapper'>
                <div className='leftSide'>
                    <img className='photo' src={michu} alt="" />
                    <p className="name">Michał Jemiołek</p>
                    <p className="text">Email:</p>
                    <a className='contactLink' href="mailto:connect@michal.jemiolek@gmail.com">michal.jemiolek@gmail.com</a>
                    <p className="text">
                        <a target="_blank" href="https://www.linkedin.com/in/micha%C5%82-jemio%C5%82ek-834622213/" >
                            <button data-hover="click me!"><div>LinkedIn</div></button>
                        </a>
                    </p>
                </div>
                <div className="rightSide">
                    <img className='photo' src={kondziu} alt="" />
                    <p className="name">Konrad Zagozda</p>
                    <p className="text">Email:</p>
                    <a className='contactLink' href="mailto:connect@michal.jemiolek@gmail.com">nieMamMaila@gmail.com</a>
                    <p className="text">
                        <a target="_blank" href="https://www.linkedin.com/in/zagozda/" >
                            <button data-hover="click me!"><div>LinkedIn</div></button>
                        </a>
                    </p>
                </div>
            </div>
            <div className="mobile">
                <div className='mobileUp'>
                    <img className='photo' src={michu} alt="" />
                    <p className="name">Michał Jemiołek</p>
                    <p className="text">Email:</p>
                    <a className='contactLink' href="mailto:connect@michal.jemiolek@gmail.com">michal.jemiolek@gmail.com</a>
                    <p className="text">
                        <a target="_blank" href="https://www.linkedin.com/in/micha%C5%82-jemio%C5%82ek-834622213/" >
                            <button data-hover="click me!"><div>LinkedIn</div></button>
                        </a>
                    </p>
                </div>
                <div className="mobileDown">
                    <img className='photo' src={kondziu} alt="" />
                    <p className="name">Konrad Zagozda</p>
                    <p className="text">Email:</p>
                    <a className='contactLink' href="mailto:connect@michal.jemiolek@gmail.com">nieMamMaila@gmail.com</a>
                    <p className="text">
                        <a target="_blank" href="https://www.linkedin.com/in/zagozda/" >
                            <button data-hover="click me!"><div>LinkedIn</div></button>
                        </a>
                    </p>
                </div>
            </div>
        </div >
    )
}
