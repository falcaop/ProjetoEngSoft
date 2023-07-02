<script setup>
import FacilityCard from '../components/FacilityCard.vue';
const facilities = [
    {
        sigla: 'UBS',
        nome: 'Unidade Básica de Saúde',
        descricao: 'são locais onde os usuários do SUS podem receber atendimento médico para diagnóstico e tratamento de cerca de 80% dos problemas de saúde. É nessas unidades que a população tem acesso a medicamentos gratuitos e vacinas, etc.',
    },
    {
        sigla: 'UBS',
        nome: 'UBS São José',
        descricao: 'são locais onde os usuários do SUS podem receber atendimento médico para diagnóstico e tratamento de cerca de 80% dos problemas de saúde. É nessas unidades que a população tem acesso a medicamentos gratuitos e vacinas, etc.',
    },
    {
        sigla: 'UBS',
        nome: 'UBS Santa Felícia - Benjamim Lopez Osores',
        descricao: 'são locais onde os usuários do SUS podem receber atendimento médico para diagnóstico e tratamento de cerca de 80% dos problemas de saúde. É nessas unidades que a população tem acesso a medicamentos gratuitos e vacinas, etc.',
    },
    {
        sigla: 'UBS',
        nome: 'UBS Parque Delta',
        descricao: 'são locais onde os usuários do SUS podem receber atendimento médico para diagnóstico e tratamento de cerca de 80% dos problemas de saúde. É nessas unidades que a população tem acesso a medicamentos gratuitos e vacinas, etc.',
    },
];
</script>

<template>
    <section>
        <FacilityCard v-for="(facility, i) in facilities" :key="i" v-bind="facility"/>
    </section>
</template>

<style scoped>
section{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 5%;
    justify-content: space-between;
}
</style>