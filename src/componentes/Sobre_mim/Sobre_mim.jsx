import './Sobre_mim.css'
import Typical from 'react-typical';


export default function Sobre_mim(props) {
    return(
        
        <section className='container-md 'id='sobre'>
            <br />
            <div class="row">
                <div class="col-sm DivP1" >
                   
                    
                    <div>
                        
                        <Typical
                            steps={['Sobre mim...',4000,'',1000]}
                            loop={Infinity}
                            wrapper="h3"
                            className=""
                        
                        />
                        <p className='paragrafo'>Atualmente, curso Tecnologia em Telemática - Instituto Federal da Paraíba(IFPB).</p>
                        <p className='paragrafo'>Meu foco é poder ajudar a melhorar a vida das pessoas, por meio do desenvolvimento aplicações que sejam acessíveis e funcionais.</p>
                        <p className='paragrafo'>Meu nome é Italo Ferreira e adoro solucionar problemas através de códigos.</p>
                        <p className='paragrafo'>Sou estudante de tecnologia e atualmente estou mais focado no desenvolvimento Front-End.</p>
                    </div>
                </div>
                <div class="col-sm DivP2">
                    <div className='Apresentacao'>
                        <h3>Decoração</h3>
                        <img src="" alt="" srcset="" />
                    </div>
                </div>  
            </div>    
            <br />
        </section>
    )
}
