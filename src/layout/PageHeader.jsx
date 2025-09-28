import { useState } from 'react'
import logo from '../assets/logo.png'
import './PageHeader.css'

function PageHeader() {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)

        console.log("funcionando")
    }



    return (
        <>
            <header>
                <a href="index.html">
                    <img src={logo} className="Logo1" alt="logo da equipe" />
                </a>

                <div className="respContainer">

                    <button className="menu" onClick={toggleMenu}>☰</button>

                    <nav>
                        <ul className={`headerTxt ${showMenu ? 'show' : ''}`}>
                            <div className="container">
                                <li>
                                    <a href="#" id="inicio1">INICIO</a>
                                </li>
                                <li>
                                    <a href="sobre.html">SOBRE</a>
                                </li>
                                <li>
                                    <a href="açoes.html">AÇÕES</a>
                                </li>
                                <li>
                                    <a href="parceiros.html">PARCEIROS</a>
                                </li>
                                <li>
                                    <a href="competições.html">COMPETIÇÕES</a>
                                </li>
                            </div>
                        </ul>


                    </nav>
                </div>
            </header>
        </>
    )
}

export default PageHeader