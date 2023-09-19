import PorjectForm from '../Project/ProjectForm'
import styles from './NewProject.module.css'
function NewProject(){
    return(
        <div className = {styles.newproject_Container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <PorjectForm/>
        </div>
    )
}

export default NewProject