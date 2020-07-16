<template>
    <panel>
        <counter color="#D1362E" title="Participants" :count="count" :unit="number => number">
        </counter>
    </panel>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import Counter from "../atoms/Counter.vue";
	import Panel from "@/components/atoms/Panel.vue";

	@Component({
		components: {Panel, Counter}
	})
    export default class ParticipantsCounterPanel extends Vue {
        @Prop({ required: true })
        public count!: number
	}
</script>

<style scoped>

</style>
