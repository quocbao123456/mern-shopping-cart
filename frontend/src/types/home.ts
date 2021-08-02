export const types = {
    SET_PRODUCTS: "SET_PRODUCTS" as const,
    GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST" as const,
    GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS" as const,
    GET_PRODUCTS_FAIL: "GET_PRODUCTS_FAIL" as const,
};

export type ProductType = {
    _id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    countInStock: number;
    starRanking: number;
    discount: number;
};

export type HomeState = {
    products: ProductType[];
    errors: [];
};
