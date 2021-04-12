import React from 'react';
import './App.scss';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import { FaFacebookF, FaInstagram, FaLinkedin, FaRegPlayCircle, FaComments } from "react-icons/fa";
import { useHistory } from "react-router-dom";


const App = () => {
  const history = useHistory();
  const [play, setPlay] = React.useState(false);
  const [button, setButton] = React.useState("playVideo")
  const url = play
    ? "https://www.youtube.com/embed/CXACs6HAprY?showinfo=0&modestbranding=0&loop=0&fs=0&cc_load_policy=0&iv_load_policy=3&enablejsapi=1&origin=https%3A%2F%2Fwww.bigbizyou.com&widgetid=1&loop=1&autoplay=1&playing=true&muted=false"
    : "https://www.youtube.com/embed/K9aOMICq_SE?autoplay=1&controls=0&showinfo=0&muted=true";

  const toggleButton = () => {
    setButton("PlayVideo hidden")
    setPlay(true)
  }
  const toggleButtonOne = () => {
    setButton("playVideo")
    setPlay(false)
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
    setButton("PlayVideo hidden");
  }
  function closeModal() {
    setIsOpen(false);
  }
  const menuIcon = modalIsOpen ? "| | |" : "|||"

  return (
    <div>
      <header className="header">
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
        <div className={button} onClick={() => toggleButton()}>
          <FaRegPlayCircle
            fontSize="8rem"
            onClick={() => setPlay(true)}
          />
        </div>
        <div className="header-image-container">
          <ReactPlayer
            className="header-image"
            url={url}
            width="100%"
            loop={true}
            playing={true}
            muted={true}
            height="100%"
            onPause={() => toggleButtonOne()}
          />
        </div>
      </header>
      <section id="window1">
        <div className="container">
          <h2 className="test"><strong>BigBizyou</strong> vous aide à faire grandir votre marque et vos performances en alliant créativité, données et expérience client</h2>
        </div>
        <span className="carre"></span>
        <span className="carre-un"></span>
        <span className="triangle"></span>
        <span className="croix">+</span>
      </section>
      <section id="window2">
        <div className="container">
          <h3>De l’idéation de votre projet à l’optimisation de son ROI, <strong>bigbizyou vous écoute, vous conseille et vous accompagne</strong> dans la mise en oeuvre des dispositifs qui vous feront grandir.</h3>
          <div className="triple-infos">
            <div className="hoverInfos">
              <img width="180px" src={`${process.env.PUBLIC_URL}/image/target.png`} alt="target" />
              <h4>Strategy</h4>
              <p className="textHidden">Nous optimisons vos décisions, en identifiant vos objectifs, et en activant les bons leviers de croissance on & offline</p>
            </div>
            <span className="border"></span>
            <div className="hoverInfos">
              <img width="180px" src={`${process.env.PUBLIC_URL}/image/idea.png`} alt="idea" />
              <h4>Creative</h4>
              <p className="textHidden">Nous créons votre univers, en trouvant les mots, les images et les expériences qui susciteront la juste émotion envers votre marque.</p>
            </div>
            <span className="border"></span>
            <div className="hoverInfos">
              <img width="180px" src={`${process.env.PUBLIC_URL}/image/laptop.png`} alt="laptop" />
              <h4>Analytics</h4>
              <p className="textHidden">Nous faisons grandir votre expertise, en développant vos connaissances, et en vous donnant les clés pour gagner en temps et en efficacité.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="window3">
        <div className="container">
          <h3>bigbizyou,</h3>
          <div className="window3-Title">
            <span className="scroll">UX Designers ?</span>
            <span className="scroll">Agence de publicité ?</span>
            <span className="scroll">Agence de communication ?</span>
            <span className="scroll">Marketing digital ?</span>
            <span className="scroll">Cabinet de conseil ?</span>
            <span className="scroll">Régie d'experts ?</span>
            <span className="scroll">Agence SEO ?</span>
            <span className="scroll">UX Designers ?</span>
          </div>
          <p className="window3-text">Pour <strong>répondre à vos urgences</strong> tout en vous offrant la <strong>maîtrise de vos performances,</strong> nous mettons à votre disposition des experts passionnés, et nous vous accompagnons avec pédagogie vers les actions adaptées à vos exigences.</p>
        </div>
      </section>
      <section id="window4">
        <div className="container">
          <div className="window4-title">
            <h2>Vous êtes entre</h2>
            <span>de bonnes mains</span>
          </div>
          <div className="liste-logo">
            <div className="flex-div-image">
              <img className="image-logo" src={`${process.env.PUBLIC_URL}/image/logo-css.png`} alt="css" />
            </div>
            <div className="flex-div-image">
              <img className="image-logo" src={`${process.env.PUBLIC_URL}/image/logo-html.png`} alt="html" />
            </div>
            <div className="flex-div-image">
              <img className="image-logo" src={`${process.env.PUBLIC_URL}/image/logo-js.png`} alt="js" />
            </div>
            <div className="flex-div-image">
              <img className="image-logo" src={`${process.env.PUBLIC_URL}/image/logo-mongodb.png`} alt="mongodb" />
            </div>
            <div className="flex-div-image">
              <img className="image-logo" src={`${process.env.PUBLIC_URL}/image/logo-php.png`} alt="php" />
            </div>
            <div className="flex-div-image">
              <img className="image-logo" src={`${process.env.PUBLIC_URL}/image/logo-react.png`} alt="react" />
            </div>
            <div className="flex-div-image">
              <img className="image-logo" src={`${process.env.PUBLIC_URL}/image/logo-react-native.png`} alt="react-native" />
            </div>
            <div className="flex-div-image">
              <img className="image-logo" src={`${process.env.PUBLIC_URL}/image/logo-sql.png`} alt="sql" />
            </div>
          </div>
          <div className="flexprojets">
            <div className="window4-title">
              <h2>Nous avons aimé</h2>
              <span>vos projets</span>
            </div>
            <div>
              <a href="/" className="ref-projets">
                Tous les projets
                </a>
            </div>
          </div>
        </div>
      </section>
      <section id="window5">
        <div className="listeSite">
          <div className="container-image-site">
            <div className="image-site">
              <img src={`${process.env.PUBLIC_URL}/image/image-site.jpg`} alt="test" />
              <div className="blockblack"></div>
            </div>
            <p className="name-site">Exemple site</p>
          </div>
          <div className="container-image-site">
            <div className="image-site">
              <img src={`${process.env.PUBLIC_URL}/image/image-site.jpg`} alt="test" />
              <div className="blockblack"></div>
            </div>
            <p className="name-site">Exemple site</p>
          </div>
          <div className="container-image-site">
            <div className="image-site">
              <img src={`${process.env.PUBLIC_URL}/image/image-site.jpg`} alt="test" />
              <div className="blockblack"></div>
            </div>
            <p className="name-site">Exemple site</p>
          </div>
          <div className="container-image-site">
            <div className="image-site">
              <img src={`${process.env.PUBLIC_URL}/image/image-site.jpg`} alt="test" />
              <div className="blockblack"></div>
            </div>
            <p className="name-site">Exemple site</p>
          </div>
          <div className="container-image-site">
            <div className="image-site">
              <img src={`${process.env.PUBLIC_URL}/image/image-site.jpg`} alt="test" />
              <div className="blockblack"></div>
            </div>
            <p className="name-site">Exemple site</p>
          </div>
          <div className="container-image-site">
            <div className="image-site">
              <img src={`${process.env.PUBLIC_URL}/image/image-site.jpg`} alt="test" />
              <div className="blockblack"></div>
            </div>
            <p className="name-site">Exemple site</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer-title">
            <h2>Vous allez aimer</h2>
            <span>nos idées</span>
          </div>
          <div className="infosfooter">
            <div className="infosleft">
              <p>Dites nous bonjour</p>
              <a href="/">hello@bigbizyou.agency</a>
              <p className="marginNumber">03 20 67 02 60</p>
              <p>Blanchemaille</p>
              <p>by EuraTechnologies</p>
              <p>87 Rue du Fontenoy</p>
              <p>59 100 Roubaix</p>
            </div>
            <div className="infosright">
            <img src="/image/svg/logo.svg" width="150" height="150" alt="Logo" onClick={() => history.push("/")} className="header-nav-item-svg" />

              <p>CREATIVE BUSINESS AGENCY</p>
              <div className="reseaux">
                <a href="https://www.facebook.com/bigbizyou" className="reseaux-setup">
                  <FaFacebookF
                    fontSize="2.5rem"
                  />
                </a>
                <a href="https://www.instagram.com/bigbizyou/" className="reseaux-setup">
                  <FaInstagram
                    fontSize="2.5rem"
                  />
                </a>
                <a href="https://www.linkedin.com/company/bigbizyou-agency/" className="reseaux-setup">
                  <FaLinkedin
                    fontSize="2.5rem"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )

}

export default App;