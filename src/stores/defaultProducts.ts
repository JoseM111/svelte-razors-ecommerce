/* defaultProducts */
import { writable } from "svelte/store"
import localProducts from "../data/localProducts"

const store = writable([...localProducts])

// subscribe
// set
// update
export default store

