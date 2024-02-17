import { categories } from '../data/dataCategories'

export const getProductByCategory = ( id ) => {


    const validPublishers = [];

    for (const categoria of categories) {
        validPublishers.push(categoria.id)
    }

    if ( !validPublishers.includes(id)) throw new Error('Invalid Category ID');

    return categories.filter( categoria => categoria.id === id );
}
