const ModalPopUp = ({id, body, header, footer, onCloseModal}) => {
  return (
    <div id={id || 'modal'} className="modal">
        <div className="modal-content">
            <div className="header">
                <span className="close-modal" onClick={onCloseModal}>&times;</span>
                <h2>{header ? header : 'header'}</h2>
            </div>

            <div className="body">
                {body ? (body) : (<div>
                    <p>This is our modal body </p>
                </div>)}
            </div>  
            <div className="footer">
                {footer ? footer : <h2>Footer</h2 >}
            </div>
        </div>
    </div>
  )
}

export default ModalPopUp