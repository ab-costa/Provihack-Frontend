import './style.css';
import close from '../../assets/close.svg';

function Popup({ setClassPopup, title, description, address, classPopup, feature }) {

    return (
        <div className={`popup_container ${classPopup}`}
        onClick={() => console.log("popup", feature)}>
            <img className="popup_close"
                src={close}
                alt='Botão fechar'
                onClick={() => setClassPopup("hidden")}
            />
            <h1 className="popup_title">{title}</h1>
            <p className="popup_text">{description}</p>
            <p className="popup_address">{address}</p>
            <input className='popup_input' type="text"></input>
        </div>
    );
};

export default Popup;