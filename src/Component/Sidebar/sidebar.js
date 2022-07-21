import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBarChart, faFolderOpen, faMessage, faCalendarCheck, faCogs, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css'
const Sidebar = () => {
    return (
        <>
            <div className='sideBar'>
                <h2>.studio</h2>
                <div className='list'>
                    <div>
                        <ul>
                            <li><a href='#'><FontAwesomeIcon icon={faHome} className="font"></FontAwesomeIcon> OverView</a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faBarChart} className="font"></FontAwesomeIcon> Stats</a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faFolderOpen} className="font"></FontAwesomeIcon> Project</a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faMessage} className="font"></FontAwesomeIcon> Chat</a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faCalendarCheck} className="font"></FontAwesomeIcon> Calender</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href='#'><FontAwesomeIcon icon={faCogs} className="font"></FontAwesomeIcon > Settings</a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faLongArrowAltRight} className="font"></FontAwesomeIcon> Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Sidebar;