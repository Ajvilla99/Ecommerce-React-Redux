export const getProductByName = ( products = [], name = '' ) => {

    name = name.toLowerCase().trim();

    if ( name.length === 0 ) return [];

    return products.filter(
        product => product.name.toLowerCase().includes(name)
    )
}
