<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<script lang="ts">
import Product from "../components/Products/ProductComponent.svelte";

    /** ⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ JS | TS ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰⚫️ */

    /**: - ©MEMBER-PROPERTIES|
     *-----------------------------*/
    export let name: string = 'Products'
	export let location: string
    /*-----------------------------*/

    /**| ™- LABELED-STATEMENT |
     *----------------------------*/

    /*----------------------------*/

    /** #™☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ FUNCTION ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ */

</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<div class="ProductsPageContainer">
	<!-- ================ CONTAINER ================ -->
 
 
	<h1>{name}: @Page</h1>
	
	<Product />
	
	<!-- ================ CONTAINER ================ -->
</div>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ⚫️━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━⚫️ -->
<style lang="scss">
	@import 'public/styles/ProductsPage.scss';
	@import 'public/styles/global.scss';
	
	h1 {
		color: mediumpurple;
	}
</style>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
