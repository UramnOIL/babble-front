<template>
    <v-navigation-drawer>
        <v-divider/>
        <v-list nav dense>
            <v-subheader>Server</v-subheader>
            <v-list-item-group mandatory v-model="selectedContent" color="primary">
                <v-list-item v-for="(item, i) in serverItems" :key="i" @click="changeContent(item.type)">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"/>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            <v-divider/>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
	import {Component, Emit, Prop, Vue} from "vue-property-decorator";
	import Content from "@/modules/Content";

	type Item = {
        text: string;
        type: Content;
        icon: string;
        link: string;
	}

	@Component
	export default class SideBar extends Vue {

		@Prop()
		public selectedContent = 1

		@Emit()
		changeContent(type: Content) {
			this.$emit(type)
		}

		get serverItems(): Item[] {
			return [
				{text: "Console", type: "console", icon: "fas fa-terminal", link: "#"},
				{text: "Dashboard", type: "dashboard", icon: "fas fa-chart-line", link: "#"}
			]
		}
	}
</script>

<style scoped>

</style>
