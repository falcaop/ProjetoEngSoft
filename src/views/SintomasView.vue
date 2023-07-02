<script setup>
import { watch, ref } from 'vue';

const intensidade = ['Baixa', 'Média', 'Alta'];
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
</script>

<template>
    <section>
        <h2>Cadastro de sintomas</h2>
        <p>Informe seu endereço e selecione os sintomas que está sentindo para receber uma recomendação de unidade de atendimento.</p>
        <form>
            <h3>Localização</h3>
            <div class='address'>
                <div>
                    <label for='address'>Endereço</label>
                    <input type="address" name="address"/>
                    <div class="locationCheck">
                        <input type="checkbox" name="location" class="locationCheck">
                        <label for="location">Usar localização atual</label>
                    </div>
                </div>
            </div>
            <h3>Sintomas</h3>
            <div v-for="sintoma in sintomas" class="sintoma">
                <div class="checkbox">
                    <input type="checkbox" :name="sintoma" :value="sintoma" v-model="info[sintoma].checked"/>
                    <label :for="sintoma">{{ sintoma }}</label>
                </div>
                <div class="details" v-if="info[sintoma].checked">
                    <label for="intensidade">Intensidade:</label>
                    <input type="range" name="intensidade" min="0" max="2" step="1" v-model="info[sintoma].intensidade"/>
                    <strong>{{ intensidade[info[sintoma].intensidade] }}</strong>
                </div>
            </div>
        </form>
    </section>
</template>

<style scoped>
.sintoma, .address{
    background-color: var(--light-blue);
    width: 100%;
    margin: 1em auto 1em;
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
    background-color: var(--lighter-blue);
    border: solid 2px var(--light-blue);
}
.details > *{
    display: block;
    width: 100%;
    max-width: 500px;
    margin-bottom: 0.5em;
}
strong{
    text-align: center;
}
.address > *{
    display: block;
}
.locationCheck{
    margin-top: 1em;
}
.locationCheck > input[type="checkbox"]{
    margin: 0 0.5em 0 0;
}
section > p{
    margin: 1.5em 0 2em;
}

</style>