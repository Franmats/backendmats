export default class CategoriesRepository {

    constructor(dao){
        this.dao = dao
    }

    getCategories = async () => { return await this.dao.getCategories()}

    getCategorieById = async (id) => { return await this.dao.getCategorieById(id)}
    getCategoriesByName = async (nom) => { return await this.dao.getCategoriesByName(nom)}

    createCategorie = async (categorie) =>  {


        return await this.dao.createCategorie(categorie)
    }

    updateInfoById = async (id, data) => {return await this.dao.updateInfoById(id,data)}

    updateStockProduct = async (id,number) => {return await this.dao.updateStockProduct(id,number)}

    deleteCategorie = async(id) => { return await this.dao.deleteCategorie(id)}
}