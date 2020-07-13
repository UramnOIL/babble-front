<script lang="ts">
	import {Component, Mixins, Prop} from "vue-property-decorator";
	import {Line, mixins} from "vue-chartjs";
	import {ChartData, ChartOptions} from "chart.js";

	@Component
	export default class Chart extends Mixins(Line, mixins.reactiveProp) {
		@Prop({required: true})
        public data!: ChartData

		@Prop()
		public options: ChartOptions = {}

		public mounted() {
			this.renderChart(this.data, this.options)
		}
	}
</script>

<style scoped>

</style>
