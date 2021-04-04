import React, { useState } from "react";
import "../App.scss"
import { Menu } from "./Menu";

const Lequipe = () => {
    return (
        <div>
            <header className="header-Expertise">
                <Menu />
                <div className="header-Expertise-heros">
                    <div>
                        <h1>Hello</h1>
                        <p>Nous sommes bigbizyou, l’agence de business créatif & collaboratif dédiée à la croissance et à la créativité des marques.</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Lequipe;