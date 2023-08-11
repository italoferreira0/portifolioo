import Typical from 'react-typical';
import React,{useState} from 'react';
import './Apresentacao.css';
import minhaFoto from './img/eu.jpeg'
import curriculo from './curriculo.pdf'


export default function Apresentacao(props) {
    
    return(
        <section className='container-md Apresentacao' id='home'>
            <div class="row">
                <div className="col-sm DivFoto">
                    <img src={minhaFoto} alt="Minha Foto" title='Italo Ferreira' className='minhaFt img-fluid'/>
                    
                    <button className='btn Downlaod mt-4'><a href={curriculo} download>Download CV</a></button>
                    
                </div>
                
                <div class="col-sm DivSaudacao">
                    <div >
                        <br/><br />
                        <h3>Ola, eu sou Italo.</h3>
                        <Typical 
                            steps={['Bem-vindo ao meu portifólio.',4000,'',1000]}
                            loop={Infinity}
                            wrapper="h3"
                            className="subTextoAnimado"
                        />

                        {/* <p id='paragrafro'><h2>Ola eu sou Italo</h2></p> */}
                        {/* <p><h3>Bem-vindo ao meu portifolio</h3></p> */}
                        {/* <Typical Ola eu sou Italo
                            steps={['Bem-vindo ao meu portifolio',4000]}
                            loop={Infinity}
                            wrapper="h1"
                            className="subTextoAnimado"
                        /> */}



                    </div>
                </div>
                
            </div>
    
                        
        </section>
    )
}