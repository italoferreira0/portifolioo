import './Sobre_mim.css'
import Typical from 'react-typical';

export default function Sobre_mim(props) {
    return(
        
        <section className='container-md 'id='sobre'>
            <br />
            <div class="row">
                <div class="col-sm DivP1" >
                    
                    <div>
                        
                        {/* <h3>Sobre mim...</h3> */}

                        <Typical
                            steps={['Sobre mim...',4000,'',1000]}
                            loop={Infinity}
                            wrapper="h3"
                            className=""
                        
                        />
                        <p className='paragrafo'>Atualmente sou estudante do Curso Superio de Tecnologia em Telemática - Instituto Federal da Paraíba(IFPB).</p>
                        <p className='paragrafo'>Meu foco é poder ajudar a melhorar a vida das pessoas, por meio do desenvolvimento aplicações que sejam acessíveis e funcionais.</p>
                        <p className='paragrafo'>Meu nome é Italo Ferreira e adoro solucionar problemas através de códigos.</p>
                        <p className='paragrafo'>Sou estudante de tecnologia e atualmente estou mais focado no desenvolvimento Front-End.</p>
                    </div>
                </div>
                <div class="col-sm DivP2">
                    <div className='Apresentacao'>
                        <Typical
                            steps={[
                               '✍',3000,
                               '💻',3000,
                               '💾',3000,
                               '📚',3000,
                               '📱',3000,
                               
                            ]}
                            loop={Infinity}
                            wrapper="h1"
                            className='AnimacaoIcons'
                        />

                        
                        
                    </div>
                </div>  
            </div>    
            <br />
        </section>
    )
}
