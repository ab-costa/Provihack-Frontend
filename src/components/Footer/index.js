import { useState } from 'react';
import './style.css';
import CadastrarLocal from '../Cadastro';

function Footer(){
  const [openCadastro, setOpenCadastro] =useState(false);
  return(

    <footer>
      <div>
        Time:
          {/* <ul>
            <li>Alessandro</li>
            <li>Lisandra</li>
            <li>Natália</li>
            <li>Thais</li>
            <li>Sarah</li>
            <li>Flávio</li>
          </ul>  */}
      </div>
      <button onClick={() => setOpenCadastro(true)} className='btn-add'>Adicionar Local</button>
      {openCadastro && <CadastrarLocal  setOpenCadastro={setOpenCadastro} />}
    </footer>
    )

}

export default Footer;