# Projeto de Engenharia de Software - Tô doente, onde vou?

## Equipe
O projeto foi desenvolvido por estudantes do curso de Ciências da Computação do Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo (ICMC/USP) para a disciplina SSC0130 - Engenharia de Software (2023). A equipe é composta por:
* Antônio Pedro Amado de Menezes Medrado - 10748389
* Danilo Leonssio Alves - 10408390
* Luís Eduardo de Brito Câmara - 12690282
* Pedro Falcão Rocha - 12692408 

## Descrição do projeto
O projeto "Tô doente, onde vou?" consiste em uma plataforma que busca auxiliar o usuário a entender qual unidade de saúde deve ser procurada pro ele – UBS, UPA, Emergência, etc – com intenção de, além de informá-lo, evitar que pessoas acessem o serviço errado, o que pode gerar aglomerações desnecessárias e atrasos para atendimentos.
Para o desenvolvimento, decidiu-se fazer um recorte para direcionar o projeto aos estudantes da USP do campus de São Carlos.

## Desenvolvimento e continuidade do projeto
Durante a disciplina, a aplicação foi parcialmente desenvolvida, de modo que é possível o usuário selecionar os sintomas que está sentindo e a sua intensidade a partir de uma lista de sintomas pré-cadastrados, além de visualizar as informações e a localização no mapa de algumas unidades de atendimento. 

Para continuidade do projeto, deve-se desenvolver a funcionalidade de receber a recomendação da unidade de atendimento mais adequada a partir dos dados informados pelo usuário. Também seria interessante implementar um sistema que utilize a localização atual do usuário para mostrar a trajetória até a unidade recomendada. 

## Procedimentos para utilização 
1. Instalação

Clone esse respositório em um local de sua escolha com o comando:
```bash
git clone https://github.com/falcaop/ProjetoEngSoft.git
```
Acesse o diretório criado para o repositório:
```bash
cd ProjetoEngSoft
```

Num sistema que possui Node.js e npm, instale as dependências necessárias para o funcionamento do projeto com o comando:
```bash
npm i
```

2. Execução

Para executar, abra uma nova janela do terminal e inicialize o sistema com o comando:
```bash
npm run dev
```
