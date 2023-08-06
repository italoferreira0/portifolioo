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
    
    function descHTML() {
        document.querySelector('#descricao').innerHTML = 'HTML'
    }

    function descCSS() {
        document.querySelector('#descricao').innerHTML = 'CSS'
    }

    function descJS() {
        document.querySelector('#descricao').innerHTML = 'JavaScript'
    }

    function descREACT() {
        document.querySelector('#descricao').innerHTML = 'React'
    }

    function descBootStrap() {
        document.querySelector('#descricao').innerHTML = 'BootStrap'
    }

    function descPython() {
        document.querySelector('#descricao').innerHTML = 'Python'
    }

    function descGit() {
        document.querySelector('#descricao').innerHTML = 'Git'
    }

    function descLinux() {
        document.querySelector('#descricao').innerHTML = 'Linux'
    }

    function retornarDesc() {
        document.querySelector('#descricao').innerHTML = ''
    }

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
                        {/* <button onClick={descHTML} >teste</button> */}
                    {/* <div> */}
                      <img src={iconHTML} onMouseEnter={descHTML} onMouseLeave={retornarDesc} id='iconHTML' className='Icon'alt="" />
                      <img src={iconCSS} onMouseEnter={descCSS} onMouseLeave={retornarDesc} id='iconCSS' className='Icon'alt="" />
                      <img src={iconJS} onMouseEnter={descJS} onMouseLeave={retornarDesc} id='iconJS' className='Icon'alt="" />
                      <img src={iconREACT} onMouseEnter={descREACT} onMouseLeave={retornarDesc} id='iconREACT' className='Icon'alt="" />
                      
                      <img src={iconBootStrap} onMouseEnter={descBootStrap} onMouseLeave={retornarDesc} id='iconBootStrap' className='Icon'alt="" />
                      <img src={iconPython} onMouseEnter={descPython} onMouseLeave={retornarDesc} id='iconPython' className='Icon'alt="" />
                      <img src={iconGit} onMouseEnter={descGit} onMouseLeave={retornarDesc}id='iconGit' className='Icon'alt="" />
                      <img src={iconLinux} onMouseEnter={descLinux} onMouseLeave={retornarDesc} id='iconLinux' className='Icon'alt="" />

                    {/* </div> */}

                  
                </div>
                
                <div class="col-md-4 DivDescricao">
                    
                    <h1 id='descricao'></h1>
                </div>

                
            </div>
            
    
            
        </section>
    )
}