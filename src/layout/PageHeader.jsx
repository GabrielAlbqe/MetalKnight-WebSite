import logo from '../assets/logo.png'
import './PageHeader.css'

function PageHeader() {
    return(
    <>
        <header>
            <a href="index.html">
                <img src={logo} className="Logo1" alt="logo da equipe"/>
            </a>
            <nav>
                <ul className="headerTxt">
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
                </ul>
            </nav>
        </header>
    </>
    )
}

export default PageHeader