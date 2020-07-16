<template>
    <panel>
        <counter color="#C5D12E" title="Total of Participants" :count="count" :unit="number => number"/>
    </panel>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import Counter from "../atoms/Counter.vue";
	import Panel from "@/components/atoms/Panel.vue";

	@Component({
		components: {Panel, Counter}
	})
    export default class TotalParticipantsCounterPanel extends Vue {
        @Prop({ required: true })
        public count!: number
	}
</script>

<style scoped>

</style>
