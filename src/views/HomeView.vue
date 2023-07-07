<script setup>
import FacilityCard from '../components/FacilityCard.vue';

// informacoes sobre os tipos de unidade de atendimento
const facilities = [
    {
        sigla: 'UBS',
        nome: 'Unidade Básica de Saúde',
        descricao: 'Usuários do SUS podem receber atendimento médico para diagnóstico e tratamento de cerca de 80% dos problemas de saúde. Acesso a medicamentos gratuitos e vacinas, atendimento pré-natal, acompanhamento de hipertensos e diabéticos e de outras doenças.',
    },
    {
        sigla: 'UPA',
        nome: 'Unidade de Pronto Atendimento',
        descricao: 'Podem resolver a maior parte das urgências e emergências, como pressão e febre alta, fraturas, cortes, infarto e derrame. Funcionamento 24 horas por dia, todos os dias da semana.',
    },
    {
        sigla: 'SAMU',
        nome: 'Serviço de Atendimento Móvel de Urgência',
        descricao: 'Ao discar 192, o cidadão estará ligando para uma central de regulação que conta com profissionais de saúde e médicos treinados para dar orientações de primeiros socorros por telefone. São estes profissionais que definem o tipo de atendimento, ambulância e equipe adequado a cada caso.',
    },
    {
        sigla: 'AMA',
        nome: 'Atendimento Médico Ambulatorial',
        descricao: 'Demandas de saúde com média complexidade, como dor de ouvido, crises de asma e infecção urinária. Realiza administração de medicamentos, suturas, drenagem de abscessos e Raio-X de qualquer paciente.  Funcionamento de segunda-feira à sábado das 07 às 19h para as unidades tradicionais.',
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