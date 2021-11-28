import { useState } from 'react';
import './style.css';
import CadastrarLocal from '../Cadastro';

function Footer(){
  const [openCadastro, setOpenCadastro] =useState(false);
  return(

    <footer>
      <div>
        <strong>Time:</strong>
          <ul className='list'>
            <li>
              <a href='https://www.linkedin.com/in/alessandro-costa-35a94b187/'   target="_blank" rel="noreferrer">
                Alessandro</a>
              </li>
            <li>
              <a href='https://www.linkedin.com/in/lisandre-darioli/'
              target="_blank" rel="noreferrer"
              >Lisandre</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/nobarbosa/'
              target="_blank" rel="noreferrer"
              >Natália</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/tha%C3%ADs-barbosa-088b82221/'
              target="_blank" rel="noreferrer"
              >Thais</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/sarahsantossilva/'
              target="_blank" rel="noreferrer"
              >Sarah</a>
            </li>
          </ul> 
      </div>
      <button onClick={() => setOpenCadastro(true)} className='btn-add'>Adicionar Local</button>
      {openCadastro && <CadastrarLocal  setOpenCadastro={setOpenCadastro} />}
    </footer>
    )

}

export default Footer;