<script setup>
defineProps({
    sigla: String,
    nome: String,
    descricao: String,
});
</script>

<template>
    <div class="card">
        <h1>{{ sigla }}</h1>
        <div>
            <h4>{{ nome }}</h4>
            <p>{{ descricao }}</p>
        </div>
    </div>
</template>

<style scoped>
.card{
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #99B6D0;
    padding-bottom: 20px;
    margin-top: 40px;
    /* max-width: 450px; */
}
h1{
    width: 120px;
    min-width: 120px;
    margin: auto;
    text-align: center;
    height: 120px;
    line-height: 120px;
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
@media (min-width: 480px) {
    .card{
        display: flex;
        gap: 25px;
    }
    h4{
        text-align: left;
    }
}
@media (min-width: 1070px){
    .card{
        border-style: none;
        max-width: 47.5%;
    }
}
</style>