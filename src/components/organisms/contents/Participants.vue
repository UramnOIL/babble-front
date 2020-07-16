<template>
    <v-card>
        <v-card-title>
            <v-spacer />
            <v-text-field
                    v-model="search"
                    append-icon="fas fa-magnify"
                    label="Search"
                    single-line
            />
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="players"
                item-key="name"
                :single-select="false"
                :search="search"
                class="elevation-1">
            <template v-slot:item.icon="{ item }">
                <v-icon>{{item.icon}}</v-icon>
            </template>
            <template v-slot:item.op="{ item }">
                <v-icon small v-if="item.op" color="red accent-3">fas fa-user-tie</v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";

	@Component
	export default class Participants extends Vue {
		public search = ""

		public players = [
			{icon: "fas fa-user", name: "UramnOIL", ping: "5ms", op: true}
        ]

		public headers = [
            {text: "Icon", sortable: false, align: "start", value: "icon"},
			{text: "Name", value: "name"},
            {text: "Ping", sortable: false, value: "ping"},
			{text: "OP", value: "op"},
		]
	}
</script>

<style scoped>

</style>
