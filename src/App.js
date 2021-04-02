import React from 'react';
import './App.scss';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import { FaFacebookF, FaInstagram, FaLinkedin, FaRegPlayCircle, FaComments} from "react-icons/fa";
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
              <svg className="header-nav-item-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="38" height="41.979" viewBox="0 0 97.01 112.04" enableBackground="new 0 0 97.01 41.979" xml-space="preserve">
                <path stroke="#000000" fill="#FFFFFF" d="M96.912,56.592c-0.065-17.011-6.941-23.548-11.57-26.022c-0.62-7.69-3.394-14.028-8.272-18.872
                            c-9.393-9.32-23.146-9.323-23.671-9.323H30.26c-8.864,0-15.918,2.659-20.961,7.902c-7.584,7.881-7.594,18.789-7.563,20.155v76.723
                            c0,2.698,2.188,4.885,4.885,4.885c2.701,0,4.888-2.187,4.888-4.885c0-18.232,16.008-18.742,18.087-18.742l38.027-0.008
                            c9.652,0,17.167-2.938,22.33-8.727C97.759,70.931,97.101,58.76,96.912,56.592 M82.658,73.172c-3.231,3.621-8.289,5.455-15.036,5.455
                            l-38.027,0.008c-6.656,0-11.724,1.531-18.087,6.609V30.37c0-0.064-0.003-0.127-0.003-0.189c-0.002-0.079-0.161-7.934,4.836-13.125
                            c3.132-3.254,7.813-4.906,13.919-4.906h23.156c2.091,0,19.062,0.522,21.884,16.915H38.648c-5.95,0-15.258,3.633-15.258,16.171v0.303
                            c0,12.536,9.308,16.17,15.258,16.17h16.77l0.473,0.006h3.984c1.585,0.066,10.105,0.136,16.973-6.022
                            c3.612-3.243,6.097-7.549,7.446-12.849c1.522,2.634,2.843,6.944,2.843,13.983c0,0.186,0.012,0.371,0.03,0.556
                            C87.182,57.479,88.103,67.068,82.658,73.172 M75.18,38.839c-0.772,4.123-2.375,7.306-4.781,9.504
                            c-4.274,3.906-10.01,3.612-10.024,3.612c-0.125-0.01-0.251-0.016-0.376-0.016h-8.225l-1.761-0.003H39.565
                            c-1.451-0.059-6.399,0.019-6.399-6.397v-0.303c0-6.417,4.95-6.338,6.399-6.397H75.18z"></path>
              </svg>
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
              <p>Nous contacter <FaComments/></p>
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
            <span className="scroll">Agence de marketing digital ?</span>
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
      <section id="window4">
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
              <svg className="header-nav-item-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 97.01 112.04" enableBackground="new 0 0 97.01 41.979" xml-space="preserve">
                <path stroke="#000000" fill="#FFFFFF" d="M96.912,56.592c-0.065-17.011-6.941-23.548-11.57-26.022c-0.62-7.69-3.394-14.028-8.272-18.872
                            c-9.393-9.32-23.146-9.323-23.671-9.323H30.26c-8.864,0-15.918,2.659-20.961,7.902c-7.584,7.881-7.594,18.789-7.563,20.155v76.723
                            c0,2.698,2.188,4.885,4.885,4.885c2.701,0,4.888-2.187,4.888-4.885c0-18.232,16.008-18.742,18.087-18.742l38.027-0.008
                            c9.652,0,17.167-2.938,22.33-8.727C97.759,70.931,97.101,58.76,96.912,56.592 M82.658,73.172c-3.231,3.621-8.289,5.455-15.036,5.455
                            l-38.027,0.008c-6.656,0-11.724,1.531-18.087,6.609V30.37c0-0.064-0.003-0.127-0.003-0.189c-0.002-0.079-0.161-7.934,4.836-13.125
                            c3.132-3.254,7.813-4.906,13.919-4.906h23.156c2.091,0,19.062,0.522,21.884,16.915H38.648c-5.95,0-15.258,3.633-15.258,16.171v0.303
                            c0,12.536,9.308,16.17,15.258,16.17h16.77l0.473,0.006h3.984c1.585,0.066,10.105,0.136,16.973-6.022
                            c3.612-3.243,6.097-7.549,7.446-12.849c1.522,2.634,2.843,6.944,2.843,13.983c0,0.186,0.012,0.371,0.03,0.556
                            C87.182,57.479,88.103,67.068,82.658,73.172 M75.18,38.839c-0.772,4.123-2.375,7.306-4.781,9.504
                            c-4.274,3.906-10.01,3.612-10.024,3.612c-0.125-0.01-0.251-0.016-0.376-0.016h-8.225l-1.761-0.003H39.565
                            c-1.451-0.059-6.399,0.019-6.399-6.397v-0.303c0-6.417,4.95-6.338,6.399-6.397H75.18z"></path>
              </svg>
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