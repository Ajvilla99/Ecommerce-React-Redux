

export const getProductById = ( arraysData, id ) => {

    return arraysData.find( data => data.id === id );
}
