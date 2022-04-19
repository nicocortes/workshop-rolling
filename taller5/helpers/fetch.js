export const getProductos = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = response.json()
        return data
    } catch(error) {
        return error
    }
}