<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<script lang="ts">
    import productsData from "../../stores/defaultProducts"
    import { onDestroy, onMount } from "svelte"
    /** ⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ JS | TS ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰⚫️ */


    /**: - ©MEMBER-PROPERTIES|*/

    export let name: string = 'Product'
    /*☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰*/

    /**| ™- LABELED-STATEMENT |*/

    /*☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰*/

    /** #™☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ FUNCTION ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ */

    // Life cycle methods
    /**∆ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            @onMount
     *         - The onMount function schedules a callback to run
     *           as soon as the component has been mounted to the DOM.
     *           It must be called during the component's initialisation
     *           (but doesn't need to live inside the component;
     *           it can be called from an external module).
     *         - onMount does not run inside a server-side component.
     *         - If a function is returned from onMount, it will be
     *           called when the component is unmounted.
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    onMount( () => {
	    //☰☰☰☰☰☰☰☰☰☰
	
    } )

    /**∆ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	      @onDestroy
     *      - Schedules a callback to run once the component is unmounted.
     *        Out of onMount, beforeUpdate, afterUpdate and onDestroy, this
     *        is the only one that runs inside a server-side component.
	     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    onDestroy( () => {
	    //☰☰☰☰☰☰☰☰☰☰
	
    } )

    console.log( 'Products store: ', productsData )

</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<div class="ProductComponentContainer">
	<!-- ================ CONTAINER ================ -->
    
    <main>
        
        <div class="">
            <h1>{name}: @Component</h1>
        </div>

	</main>
	
	<!-- ================ CONTAINER ================ -->
</div>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ⚫️━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━⚫️ -->
<style lang="scss">
	@import 'public/styles/ProductComponent.scss';
	@import 'public/styles/global.scss';
	
	h1 {
		color: mediumpurple;
	}
</style>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
