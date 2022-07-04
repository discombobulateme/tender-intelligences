<template>
  <h3>selected works</h3>
  <ul class="selected-works-list">
    <li>
      <h5>
        <router-link :to="{ name: 'bbb-songs' }">
          BBB_ Songs of Cyborgeoisie
        </router-link>
      </h5>
      by BBB_ (alla popp & Alex Sahm)
    </li>
    <li>
      <h5>
        <router-link :to="{ name: 'queer-feminist' }">
          Queer Feminist AI
        </router-link>
      </h5>
      by alla popp
    </li>
    <li>
      <h5>
        <router-link :to="{ name: 'art-search' }"> Art Search </router-link>
      </h5>
      by Feminst.AI
    </li>
    <li>
      <h5>
        <router-link :to="{ name: 'autonomous-bodies' }">
          Autonomous Bodies
        </router-link>
      </h5>
      by Feminst.AI
    </li>
    <li>
      <h5>
        <router-link :to="{ name: 'contextual-normalcy' }"
          >Contextual Normalcy</router-link
        >
      </h5>
      by poieto & Feminist.AI
    </li>
    <li>
      <h5>
        <router-link :to="{ name: 'community-intelligence' }"
          >Community of Intelligence</router-link
        >
      </h5>
      by Tabita Rezaire
    </li>
    <li>
      <h5>
        <router-link :to="{ name: 'nichts-solide' }"
          >Nichts als Solide (Nothing but Solid)</router-link
        >
      </h5>
      by Vanessa A. Opoku
    </li>
    <li>
      <h5>
        <router-link :to="{ name: 'pensamento-computacional' }"
          >Pensamento Computacional : Estratégia para a Educação Tecnológica
          (Computational Thinking: Strategy for Technological
          Education)</router-link
        >
      </h5>
      by Nina da Hora
    </li>
    <li>
      <h5>
        <router-link :to="{ name: 'how-machines' }"
          >How machines discriminate</router-link
        >
      </h5>
      by Nushin Yazdani and José Rojas
    </li>
  </ul>
  <router-view></router-view>
</template>

<style scoped>
li {
  margin-bottom: 20px;
}
ul {
  display: contents;
}
</style>
