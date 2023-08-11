import './Projetos.css'
import Typical from 'react-typical';
import imc from './img/imc.png'


export default function Projetos(props) {
    return(
        <section className='container text-center' id='projetos' >
            <br />
            <Typical
                steps={['Meus Projetos...', 4000, '', 1000]}
                loop={Infinity}
                wrapper="h3"
            />
            
            <div class="row justify-content-center">
                <div class="col-md-4 Projeto">
                    <div>
                        <h2 className='TitlePojetos'>Calculadora de IMC</h2>
                        <img src={imc} alt="" srcset="" className='imgIMC'/>
                    </div>
                    <div className='DivBotao'>
                        <button className='btn BotaoGit'><a href="https://github.com/italoferreira0/Calculadora_de_IMC_React.js" target='_blank'>Github</a></button>
                        <button className='btn BotaoLink'><a href="https://italoferreira0.github.io/Calculadora_de_IMC_React.js/" target='_blank'>Deploy</a></button>
                    </div>
                </div>
                <div class="col-md-4 Projeto">
                    <h3>Em Breve...</h3>
                </div>
                <div class="col-md-4 Projeto">
                    <h3>Em Breve...</h3>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-4 Projeto">
                    <h3>Em Breve...</h3>
                </div>
                <div class="col-md-4 Projeto">
                    <h3>Em Breve...</h3>
                </div>
                <div class="col-md-4 Projeto">
                    <h3>Em Breve...</h3>
                </div>
            </div>
        </section>

    )
}
