import React, { useState } from "react";
import {
    Link,
} from "react-router-dom";

export default function Account() {

    const[regData, setRegData] = useState( { email: "", checkboxReg: false } );
    const[loginData, setLoginData] = useState( { email: "", password: "", checkboxLogin: false } );

    // regisztrációkor küldött adatok
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost/react/my-app-temazaro02/src/pages/Feladat3/feldolgozo.php", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify( regData )
        })
    }

    // regisztráicónál megadott adatok bekerülnek a statebe
    const handleChange = (e) => {
        if(e.target.type === "checkbox") {
            setRegData( { ...regData, [e.target.name]: e.target.checked } );    
        }
        else {
            setRegData( { ...regData, [e.target.name]: e.target.value } );
        }
    }

    // belépéskor küldött adatok
    const handleSubmitLogin = (e) => {
        e.preventDefault();

        fetch("http://localhost/react/my-app-temazaro02/src/pages/Feladat3/feldolgozo.php", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify( loginData )
        })
    }

    // belépésnél megadott adatok bekerülnek a statebe
    const handleChangeLogin = (e) => {
        if(e.target.type === "checkbox") {
            setLoginData( { ...loginData, [e.target.name]: e.target.checked } );
        }
        else {
            setLoginData( { ...loginData, [e.target.name]: e.target.value } );
        }
    }

    return (
        <div className="container">
        <h1>Témazáró 3. feladat oldala</h1>
            <div className="page-container">
                        <header>
                            <h1>Kedvenc videóim és képeim</h1>
                        </header>
                        <nav>
                            <div>
                                <Link to="/feladat3/kezdooldal" >Kezdőoldal</Link>
                            </div>
                            <div>
                                <Link to="/feladat3/kepek" >Képek</Link>
                            </div>
                            <div>
                                <Link to="/feladat3/videok" >Videók</Link>
                            </div>
                            <div>
                                <Link to="/feladat3/account" >Account</Link>
                            </div>
                        </nav>
                        <div className="main-container">
                            <main>
                                <div className="form">
                                    <h2>Belépés vagy regisztráció</h2>
                                    <div className="form-content">
                                        <div>
                                            <form className="form-login" onSubmit={handleSubmitLogin}>
                                                <h3>Belépés</h3>
                                                <label htmlFor="email">E-mail cím</label>
                                                <input type="email" id="email" name="email" placeholder="E-mail címed" onChange={handleChangeLogin} />
                                                <label htmlFor="password">Jelszó</label>
                                                <input type="password" id="password" name="password" placeholder="Jelszavad" onChange={handleChangeLogin} />
                                                <div className="checkbox">
                                                    <span>
                                                    <input type="checkbox" name="checkboxLogin" onClick={handleChangeLogin}  /> Emlékezz rám
                                                    </span>
                                                </div>
                                                <div>
                                                    <input type="submit" value="Belépés" className="submit" />
                                                    <input type="reset" value="Mégsem" className="reset" />
                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                        <form className="form-reg" onSubmit={handleSubmit}>
                                                <h3>Regisztráció</h3>
                                                <label htmlFor="email2">E-mail cím</label>
                                                <input type="email" id="email2" name="email" placeholder="E-mail címed" onChange={handleChange} />
                                                <div className="checkbox">
                                                    <span>
                                                    <input type="checkbox" name="checkboxReg" onClick={handleChange}  /> Adatvédelmi nyilatkozat elfogadása
                                                    </span>
                                                </div>
                                                <div>
                                                    <input type="submit" value="Küldés" className="submit" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <aside>
                                <h2>Archív tartalom</h2>
                                <div>Star Wars</div>
                                <div>FatboySlim</div>
                                <div>Smurfs</div>
                                <div>Dog</div>
                                <div>Heart</div>
                                <div>Planet</div>
                            </aside>
                        </div>
                        <footer>Footer</footer>
            </div>
        </div>
    )

};