import './style.css';
import close from '../../assets/close.svg';
import { useState } from 'react';


function CadastrarLocal({ setOpenCadastro }) {

  const [formulario, setFormulario] = useState({ nome: '', email: '', nome_do_estabelecimento: '', logradouro: '', comentario: '' });

  function handleChange(event) {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    
    
    if(!formulario.nome){
      alert("preencha o campo")
      return
    }
    if(!formulario.email){
      alert("preencha o campo")
      return
    }
    if(!formulario.logradouro){
      alert("preencha o campo")
      return
    }
    if(!formulario.comentario){
      alert("preencha o campo")
      return
    }
    if(!formulario.nome_do_estabelecimento){
      alert("preencha o campo")
      return
    }

    const form = {
      "nome": formulario.nome,
      "email": formulario.email,
      "logradouro": formulario.logradouro,
      "nome_do_estabelecimento": formulario.nome_do_estabelecimento,
      "comentario": formulario.comentario
    };


    fetch("https://api-provi-hack.herokuapp.com/marcarlugar", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(form)
    });


    setFormulario({ nome: '', email: '', nome_do_estabelecimento: '', logradouro: '', comentario: '' }); 
    setOpenCadastro(false);
  };

  return (
    <div className="fundo-modal">
      <div className='modal-content'>
        <img className="close"
          src={close}
          alt='Botão fechar'
          onClick={() => setOpenCadastro(false)}
        />
        <h2>Cadastre um local</h2>
        <form onSubmit={handleSubmit}>
          <div className='width'>
            <label>Nome*</label>
            <input type="text" name="nome" value={formulario.nome} onChange={handleChange} />
          </div>
          <div className='width'>
            <label>E-mail*</label>
            <input type="email" name="email" value={formulario.email} onChange={handleChange} />
          </div>
          <div className='width'>
            <label>Nome do Estabelecimento*</label>
            <input type="text" name="nome_do_estabelecimento" value={formulario.nome_do_estabelecimento} onChange={handleChange} />
          </div>
          <div className='width'>
            <label>Logradouro*</label>
            <input type="text" name="logradouro" value={formulario.logradouro} onChange={handleChange} />
          </div>
          <div className='width'>
            <label>Comentários*</label>
            <input type="text" name="comentario" value={formulario.comentario} onChange={handleChange} />
          <span className="cadastro_span">* Campos obrigatórios</span>
          </div>
          <div>
            <button className='btn-send' type='submit' onClick={handleSubmit}>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastrarLocal;