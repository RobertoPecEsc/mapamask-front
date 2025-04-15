import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import mapamaskLogo from '../assets/img/mapamask-logo.png';


export const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-full">
                    <nav className="py-4">
                        <div className={`flex justify-between items-center p-4 ${styles.navbar}`}>
                            <Link to="/comercios" className={`flex items-center ${styles.navLink}`}>
                                <img
                                    src={mapamaskLogo}
                                    alt="Logo Mapamask"
                                    width="60"
                                    className={`inline-block mr-2 ${styles.logoCs}`}
                                />
                                <span className={styles.span}>Bitcoin21</span>
                            </Link>
                            <div className="hidden md:flex space-x-6"> 
                                <ul className="flex items-center space-x-6">
                                    <li>
                                        <Link
                                            to="/calculadora"
                                            className="font-montserrat"
                                        >
                                            Calculadora
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/registro"
                                            className="font-montserrat"
                                        >
                                            Registro
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
