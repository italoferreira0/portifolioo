import './Tecnologias.css'
import Typical from 'react-typical'

export default function Tecnologias(props) {
    return(
        <section className='container text-center DivTec' id='conhecimentos'>
            {/* <h3>Linguagens e ferramentas</h3> */}

            <div className='row justify-content-center'>
                <Typical 
                    steps={['Linguagens...',4000,'Ferramentas...',4000]}
                    loop={Infinity}
                    wrapper="h3"
        
                />
                <div class="col-md-4 DivTecnologias">
                    
                </div>
                <div class="col-md-4 DivDescricao">
                        
                </div>

                
            </div>
            
    
            
        </section>
    )
}