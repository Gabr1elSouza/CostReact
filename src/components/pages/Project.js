import styles from './Project.module.css'

import Loading from '../Layout/Loading'
import ProjectForm from '../Project/ProjectForm'
import Message from '../Layout/Message'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
function Project(){
    const {id} = useParams()
    
    const [project, setProject]= useState([])
    const [showProjectForm, setShowProjectForm]= useState(false)
    const [message, setMessage] = useState()
    const [type, setType]= useState()

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp)=> resp.json())
        .then((data) =>{
            setProject(data)
        })
        .catch((err)=> console.log(err))
        },300)
        
    },[id])

    function editPost(project){
        console.log(project)

        //buget validation
        if(project.budget < project.cost){
            //mensagem
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(data)
            setShowProjectForm(false)
            //message
            setMessage('Projeto atualizado!')
            setType('success')
        })
        .catch((err)=> console.log(err))
    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    return(
       <>
       {project.name ? (
        <div className={styles.project_details}>
            {message && <Message type={type} msg={message}/>}
            <div className={styles.details_container}>
                <h1>Projeto: {project.name}</h1>
                <button onClick={toggleProjectForm} className={styles.btn}>
                    {!showProjectForm ? 'Editar Projeto' : "Fechar"}
                </button>
                {!showProjectForm? (
                    <div className={styles.project_info}> 
                        <p>
                            <span>Categoria:</span> {project.category.name}
                        </p>
                        <p>
                            <span>Total de Orçamento:</span>R${project.budget},00
                        </p>
                        <p>
                            <span>Total utilizado:</span>R${project.cost},00
                        </p>
                    </div>
                ):(<div className={styles.project_info}>
                    <ProjectForm handleSubmit={editPost} btntext="Concluir edição" projectData={project}/>
                    </div>)}
            </div>
        </div>
        ): (
        <Loading/>
        
    )}
       </>
    )
}

export default Project