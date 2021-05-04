// Use "import" for source modules to get tree-shaking;
// The files will be in-lined into the bundle with dead code removed
// jQuery is globally-available in MediaWiki;
// we can use "import" here as well, but it needs to be designated
// as a global variable in rollup.config.js
// import { helloFromA } from './moduleA';
// import { helloFromB } from './moduleB';
import App from './App.vue';
import $ from 'jquery';

// For dependencies managed by ResourceLoader, use "require", since
// we need to call the module at runtime.
// Finally, both jQuery and Vue should be designated as "external"
// libraries in rollup.config.js because we want to ensure they are
// not included in the final bundle. Both are still included as
// devDependencies because we may need to load them for unit tests, etc.
// const Vue = require( 'vue' );
import Vue from 'vue';

// eslint-disable-next-line no-jquery/no-global-selector
$( '#sandbox' ).html( `
	<div id="vueComponent"></div>

	<p>Running Vue version ${Vue.version}</p>
` );

const appComponent = new Vue( App );
appComponent.$mount( '#vueComponent' );
