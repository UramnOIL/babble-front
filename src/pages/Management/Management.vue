<template>
    <DefaultLayout>
        <template v-slot:sidebar>
            <v-divider/>
            <v-list>
                <v-subheader>Server</v-subheader>
                <v-list-item-group v-model="item" :mandatory="true">
                    <list-item v-for="item in serverItems" :key="item.type" @click="changeContent(item.type)">
                        <template #icon>{{item.icon}}</template>
                        <template #title>{{item.title}}</template>
                    </list-item>
                </v-list-item-group>
            </v-list>
        </template>
        <template v-slot:main>
            <component v-bind:is="content.template"/>
        </template>
    </DefaultLayout>
</template>

<script lang="ts" src="./Management.ts"/>

<style scoped>

</style>
