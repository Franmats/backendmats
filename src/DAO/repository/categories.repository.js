export default class CategoriesRepository {

    constructor(dao){
        this.dao = dao
    }

    getCategories = async () => { return await this.dao.getCategories()}

    getCategoriesByName = async (nombre) => { return await this.dao.getCategoriesByName(nombre)}

    createProduct = async (product) =>  {

        const result = new ProductsDTO(product)

        return await this.dao.createProduct(result)
    }

    updateStockProduct = async (id,number) => {return await this.dao.updateStockProduct(id,number)}

    deleteProduct = async(id) => { return await this.dao.deleteProduct(id)}
}