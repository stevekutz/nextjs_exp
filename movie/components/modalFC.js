import React, {useRef, useEffect} from 'react';


const Modal = (props ) =>  {

    // create a ref to the close button
    // let closeButton = null;

    // constructor(props) {
    //     super(props)
    //     this.closeButton = null
    // }


    let closeButton = useRef();


    // useEffect( () => closeButton.current && closeButton.current.click() )

    const closeModal  = () => {
        closeButton.current.click()
    }


    const submitModal = () => {
        alert('Submitting Modal')
        closeModal();
    }



        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Movie
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {props.children}
                            </div>
                            <div className="modal-footer">
                                <button ref = {closeButton} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                { props.hasSubmit && 
                                    <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
                                }    


                            </div>
                        </div>
                    </div>
                </div>
            
            
            </div>

        )


}


export default Modal;