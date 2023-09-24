import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'

import Input from '../Form/Input'
import Select from '../Form/Select'
import SubimitButton from '../Form/SubmitButton'

function ProjectForm({handleSubmit, btntext, projectData}){

    const [categories, setCategories]= useState([])
    const [project, setProject]= useState(projectData|| {})
    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch((err)=> console.log(err))
    
    },[])

    const submit = (e)=>{
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]:e.target.value})
        console.log(project)
    }
    return (
    <form onSubmit={submit} className={styles.form}>
        <Input type='text' name='name' placeholder='Insira o nome do Projeto' handleOnChange={handleChange}/>
        <Input type="number" name="bugets" text="Orçamento do Projeto"  placeholder="Digite o orçamento do projeto" handleOnChange={handleChange} /> 
        <Select name='categoty_id' text="Selecione a categoria" options={categories}/>
        <SubimitButton text={btntext} />
    </form>
    )
}
export default ProjectForm