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
        document.querySelector('#descricao').innerHTML = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.'
    }

    function descCSS() {
        document.querySelector('#descricao').innerHTML = 'CSS (Cascading Style Sheets) é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style.'
    }

    function descJS() {
        document.querySelector('#descricao').innerHTML = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
    }

    function descREACT() {
        document.querySelector('#descricao').innerHTML = 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
    }

    function descBootStrap() {
        document.querySelector('#descricao').innerHTML = 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, melhorando a experiência do usuário em um site amigável e responsivo.'
    }

    function descPython() {
        document.querySelector('#descricao').innerHTML = 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.'
    }

    function descGit() {
        document.querySelector('#descricao').innerHTML = 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.'
    }

    function descLinux() {
        document.querySelector('#descricao').innerHTML = 'Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o núcleo Linux. O núcleo foi desenvolvido pelo programador finlandês Linus Torvalds, inspirado no sistema Minix.'
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
                    
                    <h1 id='descricao' className='Descricao'></h1>
                </div>

                
            </div>
            
    
            
        </section>
    )
}