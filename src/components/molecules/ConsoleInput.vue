<template>
    <div>
        <v-text-field @keydown.enter="enter" placeholder="Command" v-model="input" />
    </div>
</template>

<script lang="ts">
	import {Component, Emit, Vue} from "vue-property-decorator";

	@Component
	export default class ConsoleInput extends Vue {
		private input = ""

		@Emit()
		enter(event: KeyboardEvent): string | undefined {
			if(event.keyCode !== 13) return;
			const input = this.input;
			this.input = ""
			return input
		}
	}
</script>

<style scoped>

</style>
