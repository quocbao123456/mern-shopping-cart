/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { ProductType, types } from "types/home"


export const getProductsFail = (payload: Error) => ({
  type: types.GET_PRODUCTS_FAIL,
  payload
})

export const getProductRequest = () => ({
  type: types.GET_PRODUCTS_REQUEST,
})

export const getProductSuccess = (payload: ProductType[]) => ({
  type: types.GET_PRODUCTS_SUCCESS,
  payload
})


// export const getProducts = () => async(dispatch: React.Dispatch<any>) => {
//   try {
//     dispatch(getProductRequest());

//     const data = await getAllProduct();

//     dispatch(setProducts([]));

//   } catch (error) {
//     dispatch(getProductsFail(error));
//   }
// }

type Action = (
  | ReturnType<typeof getProductsFail>
  | ReturnType<typeof getProductRequest>
  | ReturnType<typeof getProductSuccess>
)

export default Action