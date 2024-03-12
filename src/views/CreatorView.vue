<template>
  <div class="about-creator">
    <h1>Sobre o criador do Projeto</h1>
    <img src="../../public/lucas.jpg" alt="Foto do Lucas" class="photo" />
    <div class="creator-content">
      <h2>Quem sou eu:</h2>
      <p>
        Olá, me chamo Lucas Silva Silvério, tenho 25 anos, sou de São José dos Campos,
        no estado de São Paulo. Formado em Sistemas de Informação pela Universidade
        Federal de Lavras, Minas Gerais.
        <br /><br />
        Sou desenvolvedor Front-end com 2 anos de experiência, utilizando
        React, com conhecimentos sólidos em HTML, CSS (Web Standards).
        Javascript. Utilizo o Git para versionamento de código. Habituado em
        consumo de APIs utilizando Rest. Com ótimas noções UX e UI e
        utilização do Figma.
      </p>
      <h2>Experiências:</h2>
      <h4>Agência Zetta</h4>
      <p>
        A primeira, um estágio realizado na Agência Zetta durante 9 meses,
        onde atuei como Desenvolvedor Full-stack, utilizanado tecnologias
        como, SpringBoot, Vue.js, React e React Native.
        <br /><br />
        Durante este estágio, participei de diversos projetos realizando manutenções e
        melhorias e minha participação mais relevante foi a criação de um mapa, implementado
        em React Native. Esse recurso seria utilizado para indicar localizações específicas
        e quando selecionadas, redirecionaria para o Google Maps indicando a rota da
        localização atual até a localização solicitada.
      </p>
      <h4>Nexoos</h4>
      <p>
        A segunda experiência foi na Nexoos, onde trabalhei na maior parte do tempo
        como Desenvolvedor Front-end e utilizando o React com Typescript como tecnologia.
        Trabalhei na Nexoos durante 2 anos e 5 meses, onde comecei como Desenvolvedor
        Full-stack, porém, depois de algum tempo me encontrei no Front-end.
        <br /><br />
        Durante o tempo como Full-stack, atuei realizando manutenções
        no sistema utilizando o Ruby on Rails. A partir disso, foi iniciada
        uma refatoração do sistema, onde se pretendia uma mudança completa
        do front utilizando novos padrões de UI/UX e tecnologias mais atuais, como, React.
        Portanto, minha principal colaboração foi a participação nessa refatoração
        onde foram criados projetos do zero e trazendo uma nova identidade para o sistema.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-creator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo {
  width: 300px;
  height: 300px;
  padding-top: 20px;
  object-fit: cover;
  padding-bottom: 30px;
}

.creator-content {
  width: 50%;
}
</style>
