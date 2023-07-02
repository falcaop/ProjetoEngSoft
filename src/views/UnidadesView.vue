<script setup>
import { ref } from 'vue';
import unidades from '../assets/unidades.js';

const mapsURL = ref('');
</script>

<template>
    <section>
        <h2>Unidades de atendimento</h2>
        <p>Encontramos as melhores opções de unidades de atendimentos próximas a você.</p>
        <div class="content">
            <div class="unidades">
                <!-- card de cada unidade de atendimento -->
                <div v-for="unidade in unidades" class="unidade" @click="mapsURL = unidade.mapsURL">
                    <h3> {{ unidade.nome }} </h3>
                    <p>{{ unidade.endereco }}</p>
                    <p><strong>Horário de funcionamento: </strong>{{ unidade.horario }}</p>
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
}
.unidades{
    width: 60%;
}
.unidade{
    background-color: var(--light-blue);
    margin: 0 auto 1em;
    border-radius: 7px;
    padding: 1.5em;
    cursor: pointer;
}
.unidade:hover{
    background-color: var(--lighter-blue);
    transition: .3s;
}

.map{
    width: 40%;
}
.map img{
    width: 100%;
}
section > p{
    margin: 1.5em 0 2em;
}

@media screen and (max-width: 1023px) {
    .content{
        display: block;
    }
    .map{
        margin-top: 2em;
        width: 100%;
    }
    .map img, .unidades{
        width: 100%;
    }
}
</style>