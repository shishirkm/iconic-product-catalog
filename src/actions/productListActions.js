export const types = {
    SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
    DISPLAY_PRODUCT_BY_CATEGORY: 'DISPLAY_PRODUCT_BY_CATEGORY',
    DISPLAY_PRODUCT_BY_SEARCH: 'DISPLAY_PRODUCT_BY_SEARCH',
    SET_ACTIVE_SORT: 'SET_ACTIVE_SORT'
};

export const setProductList = (data) => {
    return {
        type: types.SET_PRODUCT_LIST,
        data
    }
};

export const displayProductsByCategory = (data) => {
    return {
        type: types.DISPLAY_PRODUCT_BY_CATEGORY,
        data
    }
};

export const displayProductsBySearch = (data) => {
    return {
        type: types.DISPLAY_PRODUCT_BY_SEARCH,
        data
    }
};

export const setActiveSort = (data) => {
    return {
        type: types.SET_ACTIVE_SORT,
        data
    }
};