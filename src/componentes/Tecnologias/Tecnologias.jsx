import './Tecnologias.css'
import Typical from 'react-typical'
import iconHTML from './img/html.png'
import iconCSS from './img/css.png'
import iconJS from './img/js.png'
import iconREACT from './img/react.png'
import iconPython from './img/python.png'
import iconBootStrap from './img/bootstrap.png'
import iconGit from './img/git.png'
import iconLinux from './img/linux.png'




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
                    {/* <div> */}
                      <img src={iconHTML} id='iconHTML' className='Icon'alt="" />
                      <img src={iconCSS} id='iconCSS' className='Icon'alt="" />
                      <img src={iconJS} id='iconJS' className='Icon'alt="" />
                      <img src={iconREACT} id='iconREACT' className='Icon'alt="" />
                      
                      <img src={iconBootStrap} id='iconBootStrap' className='Icon'alt="" />
                      <img src={iconPython} id='iconPython' className='Icon'alt="" />
                      <img src={iconGit} id='iconGit' className='Icon'alt="" />
                      <img src={iconLinux} id='iconLinux' className='Icon'alt="" />

                    {/* </div> */}

                  
                </div>
                
                <div class="col-md-4 DivDescricao">
                    
                    <h1 id='descricao'></h1>
                </div>

                
            </div>
            
    
            
        </section>
    )
}