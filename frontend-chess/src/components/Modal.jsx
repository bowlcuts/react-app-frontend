const Modal = ({ setPassword, closeModal, handleDelete, showModal  }) => {


  
    return showModal ? (

         (
            <div
              className="modal-backdrop"
              onClick={() => {
                // close modal when outside of modal is clicked
                closeModal();
              }}
            >
              <div
                className="modal-content"
                onClick={e => {
                  // do not close modal if anything inside modal content is clicked
                  e.stopPropagation();
                }}
              >
                <h3>Enter password to delete account.</h3>
                <input type='password' name="password" onChange={(e) => {setPassword(e.target.value)}}/>

                
                <button className="modal-cancel" onClick={closeModal}>Cancel</button>
                <button className="modal-delete" onClick={handleDelete}>Delete account</button>
                
              </div>
            </div>
          ) 
    
    ) : null;
  }
  
  export default Modal;