<template>
    <div>
        <v-text-field @keydown.enter="enter" placeholder="keydown.enter" v-model="input" />
    </div>
</template>

<script lang="ts">
	import {Component, Emit, Vue} from "vue-property-decorator";

	@Component
	export default class ConsoleInput extends Vue {
		private input = ""

		@Emit()
		enter() {
			const input = this.input;
			this.input = ""
			return input
		}
	}
</script>

<style scoped>

</style>
