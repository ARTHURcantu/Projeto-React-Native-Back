import imageModel from '../../model/imageModel.js'
const getById = async(req, res) => {
    try{
        const id = id.params.id
        const user = await imageModel.getById(+id)
        res.json({
            success: `Usuário ${id} encontrado com sucesso!`,
            user
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById





