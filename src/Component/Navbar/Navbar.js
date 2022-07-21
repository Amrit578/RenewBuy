import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
const Navbar = () => {
    return (
        <>
            <div>
                <div className='nav'>
                    <div className='icon'>
                        <i class="fa fa-search"></i>
                    </div>
                    <input type="text" class="searchTerm" placeholder="Search" />
                    <div className='question'>
                        ?
                    </div>
                </div>
                <div>
                    <form className='form'>
                        <select>
                            <option value="amrit-singh">Amrit Singh</option>
                            <option value="amrit-singh">Srinivas Rao</option>
                            <option value="amrit-singh">Jyoti</option>
                        </select>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Navbar;