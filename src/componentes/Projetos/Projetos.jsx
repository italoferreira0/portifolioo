import './Projetos.css'
import Typical from 'react-typical';


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
                    
                </div>
                <div class="col-md-4 Projeto">
                    
                </div>
                <div class="col-md-4 Projeto">
                    
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-4 Projeto">
                    
                </div>
                <div class="col-md-4 Projeto">
                    
                </div>
                <div class="col-md-4 Projeto">
                    
                </div>
            </div>
        </section>

    )
}
