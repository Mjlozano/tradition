import React from 'react';
import './homepage.styles.scss'
const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Sombreros</h1>
                        <span className="subtitle">Compra Ahora</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Chaquetas</h1>
                        <span className="subtitle">Compra Ahora</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Zapatos</h1>
                        <span className="subtitle">Compra Ahora</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hombres</h1>
                        <span className="subtitle">Compra Ahora</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Mujeres</h1>
                        <span className="subtitle">Subtitle Here</span>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default HomePage;