<script setup>
import { RouterLink, RouterView } from 'vue-router';
import IconFacebook from './components/icons/IconFacebook.vue';
import IconTwitter from './components/icons/IconTwitter.vue';
import IconInstagram from './components/icons/IconInstagram.vue';
import IconMenu from './components/icons/IconMenu.vue';
</script>

<template>
    <div>
        <!-- header e menu do site -->
        <header>
            <div class="menu">
                <RouterLink to="/">
                    <h2>Tô doente,</h2>
                    <h2>onde vou?</h2>
                </RouterLink>
                <IconMenu/>
                <nav>
                    <RouterLink to="/">Início</RouterLink>
                    <RouterLink to="/unidades">Unidades</RouterLink>
                    <RouterLink to="/sintomas">Sintomas</RouterLink>
                </nav>
            </div>
            <h3>Tá doente?</h3>
            <p>Cadastre seu sintomas e receba uma recomendação de unidade de atendimento.</p>
            <RouterLink to="/sintomas">
                <button class="start">Começar</button>
            </RouterLink>
        </header>
        <!-- conteudo principal do site -->
        <main>
            <RouterView v-slot="{ Component }" >
                <Transition name="slide-fade" mode="out-in">
                    <component :is="Component"/>
                </Transition>
            </RouterView>
        </main>
    </div>
    <footer>
        <p>Lorem ipsum dolor sit amet.</p>
        <div class="socials">
            <a href="https://facebook.com">
                <IconFacebook/>
            </a>
            <a href="https://twitter.com">
                <IconTwitter/>
            </a>
            <a href="https://instagram.com">
                <IconInstagram/>
            </a>
        </div>
    </footer>
</template>

<style scoped>
@import '/src/assets/slide-fade.css';
header{
    color: white;
    background-color: var(--blue);
    padding: 40px 10%;
    fill: white;
}
.menu{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}
.menu h2{
    margin: 0;
}
.menu svg{
    height: 40px;
    cursor: pointer;
}
.menu nav{
    display: none;
    gap: 20%;
    justify-content: right;
}
.menu nav a{
    transition: .3s;
}
.menu nav a:hover{
    color: var(--light-blue);
}
header button{
    padding: 13px 20px;
    font-weight: bold;
    border-radius: 7px;
    border-style: none;
    background-color: var(--light-blue);
    margin-top: 20px;
    cursor: pointer;
    transition: .3s;
}
header button:hover{
    background-color: hsl(208, 37%, 65%);
}
footer{
    color: white;
    background-color: var(--blue);
    padding: 20px 10%;
}
.socials{
    display: flex;
    justify-content: center;
    gap: 20px;
}
.socials a{
    height: 25px;
}
.socials svg{
    height: 100%;
    fill: white;
    transition: .3s;
}
.socials svg:hover{
    fill: var(--light-blue);
}
.start{
    font-size: 1.05em;
}
@media (min-width: 480px) {
    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
@media (min-width: 736px){
    .menu svg{
        display: none;
    }
    .menu nav{
        display: flex;
    }
}
</style>
