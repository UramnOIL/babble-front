<template>
    <panel>
        <counter color="#1979D1" title="Operating Time" :count="time" :unit="count => count + 'mins'">
        </counter>
    </panel>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import Counter from "@/components/atoms/Counter.vue";
	import Panel from "@/components/atoms/Panel.vue";

	@Component({
		components: {Panel, Counter}
	})
    export default class OperatingTimeCounterPanel extends Vue {
        @Prop({ required: true })
        public time!: number
	}
</script>

<style scoped>

</style>
