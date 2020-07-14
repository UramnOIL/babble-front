<template>
    <v-container fluid class="gray lighten-5">
        <v-row>
            <v-col cols="12" sm="12" md="6">
                <panel class="usage">
                    <cpu-usage-chart :usages="cpuUsages"/>
                </panel >
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <panel class="usage">
                    <memory-usage-chart :usages="memoryUsages"/>
                </panel>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <panel class="players">
                    <players-chart :players="players"/>
                </panel>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
	import {Component, Prop, Vue, Watch} from "vue-property-decorator";
	import Panel from "@/components/atoms/Panel.vue";
	import Chart from "@/components/atoms/Chart.vue";
	import CpuUsageChart from "@/components/atoms/CpuUsageChart.vue";
	import {Stack} from "stack-typescript";
	import MemoryUsageChart from "@/components/atoms/MemoryUsageChart.vue";
	import PlayersChart from "@/components/atoms/PlayersChart.vue";

	@Component({
		components: {PlayersChart, MemoryUsageChart, CpuUsageChart, Chart, Panel}
	})
	export default class DashBoard extends Vue {
		@Prop({required: true})
		public cpuUsages!: number[]

        @Prop({required: true})
        public memoryUsages!: number[]

        @Prop({required: true})
        public players!: number[]
	}
</script>

<style scoped>
</style>
