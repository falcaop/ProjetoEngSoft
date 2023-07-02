<script setup>
import { watch, ref } from 'vue';
const info = ref({
    'ubs1': {
        'nome': 'unidade 1',
        'endereco': "rua avenida, 104",
    },
    'ubs2': {
        'nome': 'unidade 2',
        'endereco': "rua avenida, 10",
    },
});
</script>

<template>
    <section>
        <h2>Unidades de atendimento</h2>
        <div class="content">
            <div class="unidades">
                <p>Encontramos as melhores opções de unidades de atendimentos próximas a você.</p>
                <div class="unidade" v-for="unidade in info">
                    <h3> {{ unidade.nome }} </h3>
                    <p>{{ unidade.endereco }}</p>
                </div>
            </div>
            <div class="map">
                <img src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png">
                <!-- mapa -->
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
}

.map{
    width: 40%;
}
.map img{
    width: 100%;
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