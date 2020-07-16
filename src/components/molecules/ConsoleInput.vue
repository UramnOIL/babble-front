<template>
    <div>
        <v-text-field @keydown.enter="onEnter" placeholder="Command" v-model="input" />
    </div>
</template>

<script lang="ts">
	import {Component, Emit, Vue} from "vue-property-decorator";

	@Component
	export default class ConsoleInput extends Vue {
		private input = ""

		onEnter(event: KeyboardEvent): void {
			if(event.keyCode !== 13) return;
			this.enter(this.input);
			this.input = ""
		}

		@Emit()
        enter(input: string): string {
			return input
        }
	}
</script>

<style scoped>

</style>
