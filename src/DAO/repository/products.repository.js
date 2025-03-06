import ProductsDTO from "../DTO/products.dto.js"
export default class ProductsRepository {

    constructor(dao){
        this.dao = dao
    }

    getProducts = async () => { return await this.dao.getProducts()}

    getProductsByCategory = async (data1) => { return await this.dao.getProductsByCategory(data1)}
    
    getProductsByUser = async (resto1) => { return await this.dao.getProductsByUser(resto1)}

    updateStatusProduct = async (id,estado) => { return await this.dao.updateStatusProduct(id,estado)}

    getProductByID = async (id) => { return await this.dao.getProductByID(id)}

    createProduct = async (product) =>  {

        const result = new ProductsDTO(product)

        return await this.dao.createProduct(result)
    }
    updateInfoById = async (id, data) => {return await this.dao.updateInfoById (id,data)}

    updateStockProduct = async (id,number) => {return await this.dao.updateStockProduct(id,number)}

    deleteProduct = async(id) => { return await this.dao.deleteProduct(id)}
}