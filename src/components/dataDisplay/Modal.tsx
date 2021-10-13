const Modal = ({id = 'modal', onClose = () => {},children}:any) => {
    
    const handleOutsideClick = (e:any) => {
        console.log('aaaa')
        if(e.target.id === id) onClose();
    }
    
    return(
        <div id = {id} className = "modal" onClick = {handleOutsideClick}>
            <div className = "container">
                <div className = "content">{children}</div>
            </div>
        </div>
    )
}

export default Modal;