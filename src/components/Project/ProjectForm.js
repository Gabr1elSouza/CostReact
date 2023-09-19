function PorjectForm(){
    return (
    <form>
        <div>
        <input type='text' placeholder='Insira o nome do Projeto'/>
        </div>
        <div>
        <input type="Number" placeholder="Insira o orçamento total" />
        </div>
        <div>
        <select name='category_id' >
            <option disabled>Selecione a categoria</option>
        </select>
        </div>
        <div>
            <input type="submit" value='Criar Projeto'/>
        </div>
    </form>
    )
}
export default PorjectForm