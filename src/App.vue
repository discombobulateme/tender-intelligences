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
        <li data-menuanchor="page1" class="active" style="margin-bottom: 62px">
          <a href="#page1">tender intelligences</a>
        </li>
        <li data-menuanchor="page2"><a href="#page2">about</a></li>
        <li data-menuanchor="page3"><a href="#page3">local partners</a></li>
        <li data-menuanchor="page4"><a href="#page4">selected works</a></li>
        <li data-menuanchor="page5"><a href="#page5">events</a></li>
        <li data-menuanchor="page6"><a href="#page6">contact</a></li>
        <li data-menuanchor="page7"><a href="#page7">media kit</a></li>
      </ul>
      <p>this exhibition is proudly part of</p>
      <img
        style="height: 100px"
        src="src/assets/bla-logo-img-removebg.png"
        alt="BLA logo"
      />
      <p>& possible through the support of</p>
      <img
        style="width: 200px"
        src="src/assets/moz-logo-1color-black-rgb.png"
        alt="Mozilla logo"
      />
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
          "page1",
          "page2",
          "page3",
          "page4",
          "page5",
          "page6",
          "page7",
        ],
        sectionsColor: [
          "#F37344" /* page1 orange */,
          "#5E9EE4" /* page2 blue */,
          "#EBD547" /* page3 yellow */,
          "#00BD58" /* page4 green */,
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
