<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<script lang="ts">
import { AboutPage, CheckoutPage, HomePage, LoginPage, ProductsPage, ProductTemplate } from "./Index";
import {Router, Route, Link} from "svelte-routing"
/** ⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ JS | TS ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰⚫️ */

/**: - ©MEMBER-PROPERTIES|
 *-----------------------------*/
export let name: string = 'App'
/*-----------------------------*/

/**| ™- LABELED-STATEMENT |
 *----------------------------*/

/*----------------------------*/

/** #™☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ FUNCTION ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ */

</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<div class="AppContainer">
	<!-- ================ CONTAINER ================ -->
 
    <Router>
	    
	    <!--☰☰☰☰☰☰☰☰| Links * Nav |☰☰☰☰☰☰☰☰☰-->
	    <nav class="navbar">
		    <Link to="/">Home</Link>
		    <Link to="/about">About</Link>
		    <Link to="/products">Products</Link>
	    </nav>
	
	    <!--☰☰☰☰☰☰☰☰| Routes |☰☰☰☰☰☰☰☰☰-->
	    <Route path="/" component={HomePage} />
	    <Route path="/about" component={AboutPage} />
	    <Route path="/login" component={LoginPage} />
	    <Route path="/products" component={ProductsPage} />
	    <Route path="/products/:id" component={ProductTemplate} />
	    
    </Router>
	
	<!-- ================ CONTAINER ================ -->
</div>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ⚫️━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━⚫️ -->
<style lang="scss">
	@import 'public/styles/App.scss';
	@import 'public/styles/global.scss';
	
	h1 {
		color: mediumpurple;
	}
</style>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
