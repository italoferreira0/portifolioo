import './Fale_comigo.css'
import Typical from 'react-typical'

export default function Fale_comigo(){

    return(
       
        <section className='container text-center DivContato' id='contato'>
            {/* <h3>Contato</h3> */}
            <div className='row justify-content-center'>
                <Typical 
                    steps={['Contato...',4000,'',2000]}
                    loop={Infinity}
                    wrapper="h3"/>

                    <div class="col-md-4 DivContato1">
                        
                    </div>
                    <div class="col-md-4 DivContato2">
                            
                    </div>


            </div>
            
    
                        
        </section>


        

    )


}