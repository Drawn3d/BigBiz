import React from "react";
import "../App.scss"
import { Menu } from "./Menu";

const Portefolio = () => {
    return (
        <div>
            <div>
                <header className="header-Expertise">
                    <Menu />
                    <div className="header-Expertise-heros">
                        <div>
                            <h1>Nous avons aimé</h1>
                            <h2>vos projets</h2>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Portefolio;