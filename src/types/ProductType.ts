/* ProductType */

type ProductType = {
	//☰☰☰☰☰☰☰☰☰☰
	id: number,
	title: string
	price: number
	description: string
	featured: boolean
	created_at: string
	updated_at: string
	image: {
		id: number
		name: string
		hash: string
		sha256: string
		ext: string
		mime: string
		size: string
		url: string
		provider: string
		provider_metadata: string
		created_at: string
		updated_at: string
	}
}

export default ProductType
