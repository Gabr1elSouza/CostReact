import Message from "../Layout/Message"
import LinkButton from '../Layout/LinkButton'
import ProjectCard from "../Project/ProjectCard"

//hook
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import styles from './Projects.module.css'

function Projects(){

    const [projects, setProjects]= useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
        
    }

    useEffect(()=>{
        fetch('http://localhost:5000/projects',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }  
        }).then((resp)=> resp.json())
        .then(data =>{
            // console.log(data)
            setProjects(data)
        }).catch((err)=> console.log(err))
    },[])
    
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text='Criar Projeto' ></LinkButton>
            </div>
            {message && <Message type="success" msg={message} />}
            <div className={styles.container}>
                {projects.length > 0 && 
                projects.map((project)=>(
                    <ProjectCard
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects