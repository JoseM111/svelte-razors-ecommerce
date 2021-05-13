/* defaultProducts */
import { writable } from "svelte/store"
import localProducts from "../data/localProducts"
import type ProductType from "../types/ProductType"

export const flattenProducts = (data: Array<ProductType>) => {
	//☰☰☰☰☰☰☰☰☰☰
	return data.map( (item) => {
		//☰☰☰☰☰☰☰☰☰☰
		let image = item.image.url
		// Overriding the original image object & replacing it
		// with the one above. By copying the whole `...item`
		// array & then overriding it with our new `image`
		return { ...item, image }
	} )
}
// END-OF: flattenProducts--

const store = writable<ProductType[]>(
	//☰☰☰☰☰☰☰☰☰☰
	// @ts-ignore
	flattenProducts( [ ...localProducts ] )
)

// subscribe
// set
// update


export default store
