import './Tecnologias.css'
import Typical from 'react-typical'

export default function Tecnologias(props) {
    
    
    function descHTML() {
        document.querySelector('#descricao').innerHTML = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.'
    }

    function descCSS() {
        document.querySelector('#descricao').innerHTML = 'CSS (Cascading Style Sheets) é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style.'
    }

    function descJS() {
        document.querySelector('#descricao').innerHTML = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'
    }

    function descREACT() {
        document.querySelector('#descricao').innerHTML = 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
    }

    function descBootStrap() {
        document.querySelector('#descricao').innerHTML = 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, melhorando a experiência do usuário em um site amigável e responsivo.'
    }

    function descPython() {
        document.querySelector('#descricao').innerHTML = 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.'
    }

    function descGit() {
        document.querySelector('#descricao').innerHTML = 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.'
    }

    function descLinux() {
        document.querySelector('#descricao').innerHTML = 'Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o núcleo Linux.'
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
                      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' onClick={descHTML}  id='iconHTML' className='Icon'alt="" />
                      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' onClick={descCSS}  id='iconCSS' className='Icon'alt="" />
                      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' onClick={descJS}  id='iconJS' className='Icon'alt="" />
                      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' onClick={descREACT} id='iconREACT' className='Icon'alt="" />
                      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' onClick={descBootStrap}  id='iconBootStrap' className='Icon'alt="" />
                      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' onClick={descPython}  id='iconPython' className='Icon'alt="" />
                      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' onClick={descGit} id='iconGit' className='Icon'alt="" />
                      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' onClick={descLinux}  id='iconLinux' className='Icon'alt="" />

                    {/* </div> */}

                  
                </div>
                
                <div class="col-md-4 DivDescricao">
                    
                    <h1 id='descricao' className='Descricao'>Clique em uma skill</h1>
                </div>

                
            </div>
            
    
            
        </section>
    )
}