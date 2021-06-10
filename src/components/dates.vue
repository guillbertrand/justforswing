<template>
  <div class=" bg-blackJfs text-white" id="dates">
    <div class="container mx-auto p-10 lg:p-20 ">
      <h2 class="text-4xl mb-4 font-aleo">Dates</h2>
      <div class="mb-10 font-open">
        <div v-for="(gig, index) in gigs" :key="index">
          <div
            v-if="displayGig(gig)"
            class="flex flex-col mb-4 text-white justify-center"
          >
            <span class="font-bold text-xl lg:text-3xl text-yellowJfs x">{{
              gig.DATE | momentDate
            }}</span>
            <span>{{ displayGigTitle(gig) }}</span>
            <span
              class="text-sm lg:text-xl font-bold"
              v-if="displayGigTitle(gig) == 'Concert public'"
            >
              <a target="_blank" class="underline" :href="gig.LIEN">
                {{ gig.EVENEMENT }}
              </a>
            </span>
            <div
              class="flex flex-row text-sm lg:text-base"
              v-if="gig.LIEU || gig.VILLE"
            >
              <svg
                class="w-4 text-whiteJfs fill-current mr-1"
                focusable="false"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"
                ></path>
              </svg>
              <div>
                <span v-if="gig.LIEU">{{ gig.LIEU }}</span
                ><span v-if="gig.LIEU && gig.VILLE">, </span
                ><span v-if="gig.VILLE">{{ gig.VILLE }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gigs from "~/data/gig.json";
import moment from "moment";

export default {
  filters: {
    momentDate: function(date) {
      moment.locale("fr");
      return moment(date).format("Do MMMM YYYY");
    },
    momentDay: function(date) {
      moment.locale("fr");
      return moment(date).format("Do");
    },
    momentMonth: function(date) {
      moment.locale("fr");
      return moment(date).format("MMMM");
    },
    momentYear: function(date) {
      moment.locale("fr");
      return moment(date).format("YYYY");
    }
  },
  data() {
    return {
      gigs
    };
  },
  methods: {
    displayGig(gig) {
      return (
        gig.TYPE != "R" &&
        (moment(gig.DATE) >= moment() &&
          moment(gig.DATE) <= moment().add(4, "M"))
      );
    },
    displayGigTitle(gig) {
      switch (gig.TYPE) {
        case "M":
          return "Concert privé";
        case "E":
          return "Concert privé";
        case "P":
          return "Concert privé";
        case "F":
          return "Concert public";
        case "C":
          return "Concert public";
        case "S":
          return "Concert public";
      }
    }
  }
};
</script>
