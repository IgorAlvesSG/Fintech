
import './App.css'
import caradahome from './assets/caradahome.png'
import {FiLogIn} from 'react-icons/fi'
import duas_pessoas from './assets/duas_pessoas.png'
import idoso_celular from './assets/idoso_celular.png'

function App() { 
  return (
  <>
  <header>
  
    
    <h1 className='comece_a_investir'>InvestIG</h1>
    
    <a href="#">Comece a investir</a>
    <a href="#">Simulador</a>
    <a href="#">Investimentos</a>
    <a href="#">Preços</a>
    <a href="#">Blog</a>
    <a href="#">InvestNews</a>

   

    <div className='login'>
    <a className='login_texto' href="#">Login</a>
    <FiLogIn className='loginimg' />
    </div>
    
  </header>
  <div>

    <div className='home'>
      <img className='cara_da_home' src={caradahome} alt="#"/>
      <h1>Venha conhecer a central <br/> de investimento Igão<br/>você tem 0% de taxa ao ano.</h1>
      <h2>Defina seu limite do cartão! <br/>Sua forma de investir ficou ainda mais descomplicada.<br/> O mais Popular entre Proanos </h2>
      <a href="#">Abra sua conta gratuita</a>
    </div>

  </div>

  <div className='segunda_pagina'>
        <div className='div_segundapag'>
          <h1 className='texto_segundapag'>Zero corretagem</h1>
          <h2 className='texto_segundapag2' >O jeito mais fácil de investir na Bolsa: <br/> em apenas três cliques.</h2>
        </div>
        <div className='imagem_segundo' >
          <img src={duas_pessoas} alt="#" />
        </div> 
  </div>

  <div className='terceira_pagina'>
    <div className='texto_terceira'>
      <h1>Todas as opções do mercado</h1>
      <h2>Investimentos para você diversificar e chegar aonde quiser.</h2>
    </div>

    <section className='botoes'>
        <div className='tamanho_botoes'>
           <button>ações <br/> Seja sócio de uma empresa <br /><a href="#">Saiba mais</a> </button>
       </div>
       <div className='tamanho_botoes'>
           <button>TCE
           <a href="#">Saiba mais</a>
           </button>
       </div>
       <div className='tamanho_botoes'>
           <button>Drogas
            <a href="#">Saiba mais</a>
           </button>
       </div>
    </section>
  </div>

  <div className='quarta_pagina'>
    <h1>O poder de escolher como o seu <br /> dinheiro deve render é seu</h1>

  </div>




  </>  
  )
}

export default App
