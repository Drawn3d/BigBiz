import React, { useState } from "react";
import "../App.scss"
import { Menu } from "./Menu";

const Expertise = () => {
    return (

        <div>
            <header className="header-Expertise">
                <Menu />
                <div className="header-Expertise-heros">
                    <div>
                        <h1>Vous avez un projet ?</h1>
                        <p>De l'idée à la réalisation, nos stratèges et concepteurs répondent sur mesure à vos objectifs.</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Expertise;