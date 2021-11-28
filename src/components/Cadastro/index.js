import './style.css';
import close from '../../assets/close.svg';

function CadastrarLocal({setOpenCadastro}){
  
  
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
                  <input type="text"/>
                </div>
                <div className='width'>
                  <label>E-mail</label>
                  <input type="email"/>
                </div>
                <div className='width'>
                  <label>Nome do Estabelecimento</label>
                  <input type="text"/>
                </div>
                <div className='width'>
                  <label>Logradouro</label>
                  <input type="text"/>
                </div>
                <div className='width'>
                  <label>Comentários</label>
                  <input type="text"/>
                </div>

                <div>
                  <button  className='btn-send' type='submit'>Enviar</button>
                </div>
              </form>
          </div>
        </div>

    )


}

export default CadastrarLocal;