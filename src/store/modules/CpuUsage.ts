import {Mutation, MutationAction, Action, VuexModule, getModule, Module} from "vuex-module-decorators";
import store from "@/store/index"

export interface CpuUsageState {
	cpuUsage: number;
}
@Module({ dynamic: true, store, name: "cpuUsage", namespaced: true})
class CpuUsage extends VuexModule implements CpuUsageState {
	cpuUsage = 0

	@Mutation
	private SET_CPU_USAGE(usage: number): void {
		this.cpuUsage = usage
	}
}

export const cpuUsageModule = getModule(CpuUsage)
