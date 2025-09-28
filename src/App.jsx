import './app.css'

import PageHeader from './layout/PageHeader';
import MetalButton from './layout/MetalButton'

function App() {

  return (
    <>
      <PageHeader></PageHeader>
      <section className="sctInicial">
        <div className="textInfo">
          <div className="Hidden">
            <h1 className="txtInicialPage">
              INOVAMOS HOJE PARA CONSTRUIR UM
            </h1>
            <h1 className="txt1Colorido">
              AMANHÃ MELHOR.
            </h1>
            <p>
              Nossa missão é criar soluções criativas e eficientes que transformem o presente e impulsionem o
              futuro.
              Com foco na inovação, buscamos desenvolver projetos que inspirem mudanças,
              promovam crescimento e gerem impactos positivos para todos.
            </p>
            <MetalButton></MetalButton>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
