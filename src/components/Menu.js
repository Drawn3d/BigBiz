import React from 'react'
import Modal from 'react-modal';
import "../App.scss"
import { FaFacebookF, FaInstagram, FaLinkedin, FaComments } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const Menu = () => {
    const history = useHistory();
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    const menuIcon = modalIsOpen ? "| | |" : "|||"
    return (
        <div>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li className="header-nav-item">
                        <img src="/image/svg/logo.svg" alt="Logo" onClick={() => history.push("/")} className="header-nav-item-svg" />
                    </li>
                    <li className="header-nav-item menu" onClick={modalIsOpen ? closeModal : openModal} >
                        {menuIcon}
                    </li>
                </ul>
            </nav>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="customStyles"
            >

                <div>
                    <div className="modalTitle">
                        <h3 className="realtitle">Services & Accompagnements</h3>
                        <h3 className="realtitle green" onClick={() => history.push("/Expertise")}>Faites Grandir vos projets</h3>
                    </div>
                    <div className="modalTitle">
                        <h3 className="realtitle">Passions & Chatons</h3>
                        <h3 className="realtitle green" onClick={() => history.push("/Lequipe")}>Rencontrez notre équipe</h3>
                    </div>
                    <div className="modalTitle">
                        <h3 className="realtitle">Wouah</h3>
                        <h3 className="realtitle green" onClick={() => history.push("/Portefolio")}>Découvrez nos travaux</h3>
                    </div>
                    <div className="reseaux">
                        <a href="https://www.facebook.com/bigbizyou" className="reseaux-setup">
                            <FaFacebookF
                            />
                        </a>
                        <a href="https://www.instagram.com/bigbizyou/" className="reseaux-setup">
                            <FaInstagram

                            />
                        </a>
                        <a href="https://www.linkedin.com/company/bigbizyou-agency/" className="reseaux-setup">
                            <FaLinkedin
                            />
                        </a>
                    </div>
                    <div className="contact">
                        <p>Nous contacter <FaComments /></p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
