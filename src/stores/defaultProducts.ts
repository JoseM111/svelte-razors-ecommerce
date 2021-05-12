/* defaultProducts */
import { writable } from "svelte/store"
import localProducts from "../data/localProducts"
import type ProductType from "../types/ProductType"

const store = writable<ProductType[]>( [ ...localProducts ] )

// subscribe
// set
// update

export default store
