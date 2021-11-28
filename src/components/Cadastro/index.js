import './style.css';
import close from '../../assets/close.svg';
import { useEffect, useState } from 'react';

function CadastrarLocal({setOpenCadastro}){
  const [formulario, setFormulario] = useState({ nome: '', email: '', nome_do_estabelecimento: '', logradouro: '', comentario: ''});

  function handleChange(event) {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  // useEffect(() => {
  //   handleSubmit();

  // }, []);  

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   const body = {
  //     nome: formulario.nome,
  //     email: formulario.email,
  //     nome_do_estabelecimento: formulario.nome_do_estabelecimento,
  //     logradouro: formulario.logradouro,
  //     comentario: formulario.comentario
  //   };

  //   const response = await fetch('ec2-18-213-133-45.compute-1.amazonaws.com', {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(body)
  //   });
    
  //   return await response.json();
  // }
  
    return(
        <div className="fundo-modal">
          <div className='modal-content'>
              <img className="close"
                src={close}
                alt='Botão fechar'
                onClick={() => setOpenCadastro(false)}
              />
              <h2>Cadastre um local</h2>
              <form>
                <div className='width'>
                  <label>Nome</label>
                  <input type="text" name="nome" value={formulario.nome} onChange={(event) => handleChange(event.target)}/>
                </div>
                <div className='width'>
                  <label>E-mail</label>
                  <input type="email" name="email" value={formulario.email} onChange={(event) => handleChange(event.target)}/>
                </div>
                <div className='width'>
                  <label>Nome do Estabelecimento</label>
                  <input type="text" name="nome_do_estabelecimento" value={formulario.nome_do_estabelecimento} onChange={(event) => handleChange(event.target)}/>
                </div>
                <div className='width'>
                  <label>Logradouro</label>
                  <input type="text" name="logradouro" value={formulario.logradouro} onChange={(event) => handleChange(event.target)}/>
                </div>
                <div className='width'>
                  <label>Comentários</label>
                  <input type="text" name="comentario" value={formulario.comentario} onChange={(event) => handleChange(event.target)}/>
                </div>

                <div>
                  <button  className='btn-send' type='submit' >Enviar</button>
                </div>
              </form>
          </div>
        </div>

    )


}

export default CadastrarLocal;