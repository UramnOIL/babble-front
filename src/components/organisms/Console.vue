<template>
    <v-container>
        <ConsoleScreen :lines=lines />
        <ConsoleInput @enter="onEnter" />
    </v-container>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";
	import ConsoleScreen from "@/components/molecules/ConsoleScreen.vue";
	import ConsoleInput from "@/components/molecules/ConsoleInput.vue";

	@Component({
		components: {ConsoleInput, ConsoleScreen}
	})
	export default class Console extends Vue {
		public lines = ["<text style=color:#ff0000>a</text>", "b"]

		public onEnter(input: string) {
			this.lines.push(input)
        }
	}
</script>

<style scoped>

</style>
