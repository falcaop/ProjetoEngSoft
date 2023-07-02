<script setup>
import { ref } from 'vue';
import unidades from '../assets/unidades.js';

const mapsURL = ref('');
</script>

<template>
    <section>
        <h2>Unidades de atendimento</h2>
        <div class="content">
            <div class="unidades">
                <div v-for="unidade in unidades" class="unidade" @click="mapsURL = unidade.mapsURL">
                    <h3> {{ unidade.nome }} </h3>
                    <p>{{ unidade.endereco }}</p>
                </div>
            </div>
            <div class="map">
                <iframe :src="mapsURL" width="500" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
</template>

<style scoped>
.content{
    display: flex;
    justify-content: space-between;
    gap: 2em;
    flex: 1;
}
.unidades{
    width: 100%;
}
.unidade{
    background-color: var(--light-blue);
    margin: 0 auto 2em;
    border-radius: 7px;
    padding: 1.5em;
}
</style>