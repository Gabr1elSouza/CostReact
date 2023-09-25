import Message from "../Layout/Message"
import LinkButton from '../Layout/LinkButton'
//hook
import { useLocation } from "react-router-dom"

import styles from './Projects.module.css'

function Projects(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
        
    }
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text='Criar Projeo' ></LinkButton>
            </div>
            {message && <Message type="success" msg={message} />}
            <div className={styles.container}>
            
            </div>
        </div>
    )
}

export default Projects