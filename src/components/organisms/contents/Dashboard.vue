<template>
    <v-container fluid class="gray lighten-5">
        <v-row>
            <v-col>
                <operating-time-counter-panel :time="operatingTime"/>
            </v-col>
            <v-col>
                <participants-counter-panel :count="participantsCount"/>
            </v-col>
            <v-col>
                <total-participants-counter-panel :count="totalParticipantsCount"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="6">
                <panel class="usage">
                    <cpu-usage-chart :usages="cpuUsages"/>
                </panel>
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
                    <players-chart :players="participantsCountSoFar"/>
                </panel>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import Panel from "@/components/atoms/Panel.vue";
	import CpuUsageChart from "@/components/atoms/CpuUsageChart.vue";
	import MemoryUsageChart from "@/components/atoms/MemoryUsageChart.vue";
	import PlayersChart from "@/components/atoms/PlayersChart.vue";
	import OperatingTimeCounterPanel from "@/components/molecules/OperatingTimeCounterPanel.vue";
	import ParticipantsCounterPanel from "@/components/molecules/ParticipantsCounterPanel.vue";
	import TotalParticipantsCounterPanel from "@/components/molecules/TotalParticipantsCounterPanel.vue";

	@Component({
		components: {
			TotalParticipantsCounterPanel,
			ParticipantsCounterPanel,
			OperatingTimeCounterPanel,
			PlayersChart,
			MemoryUsageChart,
			CpuUsageChart,
			Panel
		}
	})
	export default class Dashboard extends Vue {
		@Prop({required: true})
		public cpuUsages!: number[]

		@Prop({required: true})
		public memoryUsages!: number[]

		@Prop({required: true})
		public participantsCountSoFar!: number[]

        @Prop({required:true})
        public operatingTime!: number

        @Prop({required: true})
        public participantsCount!: number

        @Prop({required: true})
        public totalParticipantsCount!: number
	}
</script>

<style scoped>
</style>
