<template>
    <v-navigation-drawer>
        <v-divider/>
        <v-list nav dense>
            <v-subheader>Server</v-subheader>
            <v-list-item-group mandatory v-model="selectedContent" color="primary">
                <v-list-item v-for="(item, i) in serverItems" :key="i">
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

	@Component
	export default class SideBar extends Vue {
		@Prop()
		public selectedContent = 1

		@Emit()
		changeContent() {
			//TODO
		}

		get serverItems() {
			return [
				{text: "Console", icon: "fas fa-terminal", link: "#"},
				{text: "Dashboard", icon: "fas fa-chart-line", link: "#"}
			]
		}
	}
</script>

<style scoped>

</style>
