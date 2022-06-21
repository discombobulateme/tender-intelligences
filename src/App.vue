<script setup>
import TenderHome from "@/views/TenderHome.vue";
import TenderAbout from "@/views/TenderAbout.vue";
import LocalPartners from "@/views/LocalPartners.vue";
import SelectedWorks from "@/views/SelectedWorks.vue";
import TenderContact from "@/views/TenderContact.vue";
import TenderEvents from "@/views/TenderEvents.vue";
import MediaKit from "@/views/MediaKit.vue";
</script>

<template>
  <div id="app">
    <ul id="menu">
      <li data-menuanchor="page1" class="active">
        <a href="#page1">tender intelligences</a>
      </li>
      <li data-menuanchor="page2"><a href="#page2">about</a></li>
      <li data-menuanchor="page3"><a href="#page3">local partners</a></li>
      <li data-menuanchor="page4"><a href="#page4">selected works</a></li>
      <li data-menuanchor="page5"><a href="#page5">events</a></li>
      <li data-menuanchor="page6"><a href="#page6">contact</a></li>
      <li data-menuanchor="page7"><a href="#page7">media kit</a></li>
      <li>
        <a
          href="https://twitter.com/imac2"
          target="_blank"
          rel="noopener"
          class="twitter-share"
        >
          <i>
            <svg viewBox="0 0 512 512">
              <path
                d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
              ></path>
            </svg>
          </i>
        </a>
      </li>
    </ul>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <TenderHome />
      </div>
      <div class="section">
        <TenderAbout />
      </div>
      <div class="section">
        <LocalPartners />
      </div>
      <div class="section">
        <SelectedWorks />
      </div>
      <!-- <div class="section">
        <div class="slide">
          <h3>SLIDESSSS</h3>
        </div>
        <div class="slide">
          <h3>selected works 2</h3>
        </div>
        <div class="slide">
          <h3>selected works 2</h3>
        </div>
      </div> -->
      <div class="section">
        <TenderEvents />
      </div>
      <div class="section">
        <TenderContact />
      </div>
      <div class="section">
        <MediaKit />
      </div>
    </full-page>
  </div>
</template>

<script>
// Optional. When using fullpage extensions
// import './fullpage.scrollHorizontally.min'

export default {
  name: "app",
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        navigation: true,
        anchors: [
          "page1",
          "page2",
          "page3",
          "page4",
          "page5",
          "page6",
          "page7",
        ],
        sectionsColor: ["#E37B50", "#6D9DDF", "#E7D661", "#55BA63", "#A3A391"],
      },
    };
  },
  methods: {
    afterLoad() {
      console.log("After load");
    },

    toggleNavigation() {
      this.options.navigation = !this.options.navigation;
    },

    toggleScrollbar() {
      console.log("Changing scrollbar...");
      this.options.scrollBar = !this.options.scrollBar;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,700;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap");

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
