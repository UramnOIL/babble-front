<script lang="ts">
	import {Component, Mixins, Prop} from "vue-property-decorator";
	import {Line, mixins} from "vue-chartjs";
	import {ChartData, ChartOptions} from "chart.js";

	@Component
	export default class Chart extends Mixins(Line, mixins.reactiveProp) {
		@Prop({required: true})
        public chartData!: ChartData

		@Prop({required: true})
		public chartOptions!: ChartOptions

		public mounted() {
			this.renderChart(this.chartData, this.chartOptions)
		}
	}
</script>

<style scoped>
</style>
