<script setup>
import { watch, ref } from 'vue';

const sintomas = ['dor de cabeca', 'nausea'];
const info = ref({
    'dor de cabeca': {
        'checked': false,
        'intensidade': 0,
    },
    'nausea': {
        'checked': false,
        'intensidade': 0,
    },
});
const intensidade = 0;
</script>

<template>
    <main>
        <h2>Cadastro de sintomas</h2>
        <form>
            Localizacao:
            <div class='address'>
                <div>
                    <label for='address'>Endereco</label>
                    <input type="address" name="address"/>
                </div>
            </div>
            Sintomas:
            <div v-for="sintoma in sintomas" class="sintoma">
                <div class="checkbox">
                    <input type="checkbox" :name="sintoma" :value="sintoma" v-model="info[sintoma].checked"/>
                    <label :for="sintoma">{{ sintoma }}</label>
                </div>
                <div class="details" v-if="info[sintoma].checked">
                    <label for="intensidade">Intensidade</label>
                    <input type="range" name="intensidade" min="0" max="10" step="1" v-model="info[sintoma].intensidade"/>
                    <strong>{{ info[sintoma].intensidade }}</strong>
                </div>
            </div>
        </form>
    </main>
</template>

<style scoped>
main{
    margin: 4em auto;
}
.sintoma, .address{
    background-color: var(--blue);
    width: 100%;
    margin: 1em auto 2em;
    border-radius: 7px;
}
.checkbox, .details, .address > div{
    padding: 1.5em;
    border-radius: 7px;
}
.checkbox > label{
    display: inline-block;
    margin-left: 0.75em;
}
input[type="checkbox"]{
    width: 1.5em;
    height: 1.5em;
}
input[type="address"]{
    width: 100%;
    margin-top: 1em;
    box-sizing: border-box;
    height: 2em;
}

.details{
    background-color: var(--light-blue);
}
.details > *{
    display: block;
    width: 100%;
    margin-bottom: 0.5em;
}
strong{
    text-align: center;
}
.address > *{
    display: block;
}
</style>