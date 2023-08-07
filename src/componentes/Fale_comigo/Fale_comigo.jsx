import './Fale_comigo.css'
import Typical from 'react-typical'

export default function Fale_comigo(){

    return(
       
        <section className='container text-center DivContato' id='contato'>
            {/* <h3>Contato</h3> */}
            <div className='row justify-content-center'>
                <Typical 
                    steps={['Contato...',4000,'',1000]}
                    loop={Infinity}
                    wrapper="h3"/>

                    <div class="col-md-4 DivContato1">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Nome</label>
                            <input type="text" className='form-control' id='nome' placeholder='Nome' />
                            
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email </label>
                            <input type="email" className='form-control' id='email' placeholder='name@example.com'/>
                            {/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> */}
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Mensagem</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Mensagem'></textarea>
                        </div>
                        <button type="button" className='btn EnivarMSG'>Enviar</button>
                    </form>
                        
                    </div>
                    <div class="col-md-4 DivContato2">
                            
                    </div>


            </div>
            
    
                        
        </section>


        

    )


}