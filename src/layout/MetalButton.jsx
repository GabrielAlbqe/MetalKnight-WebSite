import logo from '../assets/logo-white.png'
import './MetalButton.css'

function MetalButton() {
    return (
        <>
            <div className="btn-Container">
                <form action="sobre.html" className="infoBtn" method="get">
                    <button type="submit" className="infoBtn1">
                        <img src={logo} className="logo-Btn" alt="Logo" />
                        NOS CONHEÇA MELHOR
                    </button>
                </form>
            </div>
        </>
    )
}

export default MetalButton