<template>
	<p>
		This page contains data from {{ helloA }} and {{ helloB }}
	</p>
</template>

<script>
import { helloFromA } from './moduleA';
import { helloFromB } from './moduleB';

export default {
	data() {
		return {
			helloA: helloFromA(),
			helloB: helloFromB()
		};
	}
};
</script>
