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
    padding-bottom: 20px;
    margin-top: 40px;
}
h1{
    width: 100px;
    margin: auto;
    text-align: center;
    height: 100px;
    line-height: 100px;
    background-color: #99B6D0;
    color: white;
    border-radius: 50%;
}
h4{
    text-align: center;
}
p{
    text-align: justify;
}
</style>