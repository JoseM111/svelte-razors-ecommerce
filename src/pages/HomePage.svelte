<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<script lang="ts">
import Hero from "../components/HeroComponent.svelte";
import { link } from 'svelte-routing'
/** ⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ JS | TS ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰⚫️ */

    /**: - ©MEMBER-PROPERTIES|
     *-----------------------------*/
    export let name: string = 'Home'
    export let location: string
    /*-----------------------------*/

    /**| ™- LABELED-STATEMENT |
     *----------------------------*/

    /*----------------------------*/

    /** #™☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ FUNCTION ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ */


</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<div class="HomePageContainer">
	<!-- ================ CONTAINER ================ -->
 
	<Hero >
		<!--suppress HtmlUnknownTarget -->
		<a href="/products"
		   class="btn btn-primary btn-hero"
		   use:link>
			Shop Now
		</a>
	</Hero>
	
	<!-- ================ CONTAINER ================ -->
</div>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ⚫️━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━⚫️ -->
<style lang="scss">
	@import 'public/styles/HomePage.scss';
	@import 'public/styles/global.scss';
</style>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
