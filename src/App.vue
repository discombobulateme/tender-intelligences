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
    <div id="mySidenav" class="sidenav">
      <ul id="menu">
        <li data-menuanchor="home" class="active">
          <a style="font-size: 24px; margin-top: 21px" href="#home"
            >tender intelligences</a
          >
        </li>
        <li data-menuanchor="about"><a href="#about">about</a></li>
        <li data-menuanchor="local-partners">
          <a href="#local-partners">local partners</a>
        </li>
        <li data-menuanchor="selected-works" id="selected-works">
          <a href="#selected-works">selected works</a>
        </li>
        <li data-menuanchor="events"><a href="#events">events</a></li>
        <li data-menuanchor="contact"><a href="#contact">contact</a></li>
        <li data-menuanchor="media-kit"><a href="#media-kit">media kit</a></li>
      </ul>
      <div>
        <p>this exhibition is proudly part of</p>
        <a
          href="https://www.b-la-connect.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style="height: 100px"
            src="/src/assets/bla-logo.png"
            alt="BLA logo"
          />
        </a>
        <p>& possible through the support of</p>
        <a
          href="https://foundation.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style="width: 200px"
            src="/src/assets/mozilla-logo.png"
            alt="Mozilla logo"
          />
        </a>
      </div>
    </div>
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
          "home",
          "about",
          "local-partners",
          "selected-works",
          "events",
          "contact",
          "media-kit",
        ],
        sectionsColor: [
          "#F37344" /* landpage orange */,
          "#5E9EE4" /* about blue */,
          "#EBD547" /* local-partners yellow */,
          "#00BD58" /* selected-works green */,
          "#F37344",
          "#EBD547",
          "#5E9EE4",
        ],
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
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
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
</style>
