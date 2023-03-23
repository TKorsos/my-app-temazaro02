import React from "react";
import {
    Link,
} from "react-router-dom";

export default function Layout() {
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
                                <div className="video">
                                    <h2>Videók</h2>
                                    <div className="video-content">
                                        <div>
                                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/laDyFToOEvg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                        <div>
                                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ub747pprmJ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                        <div>
                                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/e0kDV6wbIxo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>

                                <div className="image">
                                    <h2>Képek</h2>
                                    <div className="image-content">
                                        <div>
                                            <img src="http://localhost/react/my-app-temazaro02/src/pages/Feladat3/images/dog.jpg" alt="dog" width="100%" height="100%" />
                                        </div>
                                        <div>
                                            <img src="http://localhost/react/my-app-temazaro02/src/pages/Feladat3/images/heart.jpg" alt="heart" width="100%" height="100%" />
                                        </div>
                                        <div>
                                            <img src="http://localhost/react/my-app-temazaro02/src/pages/Feladat3/images/planet.jpg" alt="planet" width="100%" height="100%" />
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
}
