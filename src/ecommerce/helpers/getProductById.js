

export const getProductById = ( data, productId ) => {
    
    const id = productId.toLowerCase().trim()

    if ( id.length === 0 ) return [];

    return data.filter(
        data => data.id.toLowerCase( ).includes(id)
    )
}
