import {useEffect} from 'react'
function ModalBodyLocker(props) {
    useEffect(() => {
        const body = document.querySelector('body')
        if (props.open == true) {
            body.classList.add('locked');
        }
        return function cleanup() {
            body.classList.remove('locked');
        };
    })
    return props.children
    
}
export default ModalBodyLocker