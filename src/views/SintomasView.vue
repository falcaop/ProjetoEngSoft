<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import sintomas from '../assets/sintomas.js';

const router = useRouter();

const intensidade = ['Baixa', 'Média', 'Alta'];

// Mantém as informações inseridas pelo usuário sobre cada sintoma
const sintomasRef = ref(sintomas);

const submitForm = () => {
    console.log(sintomasRef.value);
    router.push('/unidades');
}
</script>

<template>
    <section>
        <h2>Cadastro de sintomas</h2>
        <p>Informe seu endereço e selecione os sintomas que está sentindo para receber uma recomendação de unidade de atendimento.</p>
        <form>
            <!-- seção "localização" do formulário-->
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
            <!-- seção "sintomas" do formulário -->
            <h3>Sintomas</h3>
            <div v-for="(sintoma, id) in sintomasRef" class="sintoma">
                <!-- card de cada sintoma -->
                <div class="checkbox">
                    <input type="checkbox" :name="id" :value="sintoma.checked" v-model="sintoma.checked"/>
                    <label :for="id">{{ sintoma.nome }}</label>
                </div>
                <!-- detalhes de cada sintoma-->
                <div class="details" v-if="sintoma.checked">
                    <label for="intensidade">Intensidade:</label>
                    <input type="range" name="intensidade" min="0" max="2" step="1" v-model.number="sintoma.intensidade"/>
                    <strong>{{ intensidade[sintoma.intensidade] }}</strong>
                </div>
            </div>
            <div class="submit">
                <input type="button" value="Finalizar" @click.prevent.stop="submitForm">
            </div>
        </form>
    </section>
</template>

<style scoped>
.submit{
    text-align: right;
}
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
    cursor: pointer;
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
input[type="button"]{
    background-color: var(--blue);
    color: white;
    border: none;
    padding: 1em;
    border-radius: 5px;
    width: 30%;
    cursor: pointer;
    font-size: 1.05em;
}
input[type="button"]:hover{
    background-color: #5171a1;
    transition: .3s;
}
@media screen and (max-width: 767px) {
    input[type="button"]{
        width: 50%;
    }
}
</style>