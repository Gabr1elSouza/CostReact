import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'

import Input from '../Form/Input'
import Select from '../Form/Select'
import SubimitButton from '../Form/SubmitButton'

function PorjectForm({btntext}){

    const [categories, setCategories]= useState([])

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
    return (
    <form className={styles.form}>
        <Input type='text' name='name' placeholder='Insira o nome do Projeto'/>
        <Input type="number" name="bugets" text="Orçamento do Projeto"  placeholder="Digite o orçamento do projeto" /> 
        <Select name='categoty_id' text="Selecione a categoria" options={categories}/>
        <SubimitButton text={btntext} />
    </form>
    )
}
export default PorjectForm