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
                <nav>
                    <ul className="headerTxt">
                        <div className="container">
                        <li>
                            <a href="index.html" id="inicio1">INICIO</a>
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

                        <button className="menu" onClick={toggleMenu}>☰</button>
                    </ul>


                </nav>
            </header>
        </>
    )
}

export default PageHeader