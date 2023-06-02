<script setup>
defineProps({
    sigla: String,
    nome: String,
    descricao: String,
});
</script>

<template>
    <div>
        <h1>{{ sigla }}</h1>
        <h4>{{ nome }}</h4>
        <p>{{ descricao }}</p>
    </div>
</template>

<style scoped>
div{
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #99B6D0;
}
</style>