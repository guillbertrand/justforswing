<template>
 <div class=" bg-blackJfs text-white" id="dates">
    <div class="container mx-auto px-10 lg:px-20 ">   
          <g-link to="/" class="underline"> Retour</g-link>
          <h2 class="text-4xl my-4 font-aleo">Toutes nos dates</h2>
          <div class="fixed flex flex-col">
              <a class="btnJfsSmall h-auto mb-4" v-for="y in years" :key="y" :href="'#y'+y">{{ y }}</a>
          </div>
          <div class="mb-10 font-open ml-24">
            <div v-for="y in years" :key="y"  :id="'y'+y"> 
                <div v-for="gig in gigs" :key="gig.ID" > 
                  <div v-if="getYear(gig) == y" class="flex flex-col mb-4 text-white justify-center">
                    <span class="font-bold text-lg lg:text-3xl text-yellowJfs x">{{ gig.DATE | momentDate  }}</span>
                    <span>{{ displayGigTitle(gig)}}</span>
                    <span class="text-base lg:text-xl font-bold" v-if="displayGigTitle(gig) == 'Concert public'">
                      <a target="_blank" class="underline text-sm lg:text-base" :href="gig.LIEN">
                      {{ gig.EVENEMENT }}
                      </a>
                      </span>
                    <div class="flex flex-row text-sm lg:text-base" v-if="gig.LIEU || gig.VILLE">
                      <svg class="w-4 text-whiteJfs  fill-current mr-1" focusable="false" viewBox="0 0 16 16"><path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path></svg>
                      <div><span v-if="gig.LIEU">{{ gig.LIEU }}</span><span v-if="gig.LIEU && gig.VILLE">, </span><span v-if="gig.VILLE">{{ gig.VILLE }}</span>
                      </div>
                    </div>
                  </div>

                </div>
            </div>

          </div>
  
        <a href="/historique/" class="btnJfs">Voir toutes les dates</a>
        </div>



</div>

</template>

<script>
import gigs from '~/data/gig.json'
import moment from 'moment'

export default {
  filters: {
    momentDate: function (date) {
      moment.locale('fr')
        return moment(date).format('Do MMMM YYYY');
      },
    momentDay: function (date) {
      moment.locale('fr')
        return moment(date).format('Do');
      },
    momentMonth: function (date) {
      moment.locale('fr')
        return moment(date).format('MMMM');
      },
    momentYear: function (date) {
      moment.locale('fr')
        return moment(date).format('YYYY');
      }
  },
  data() {
    return {
      gigs,
      years:[],
      idCache:[]
    }
  },
  mounted() {
    if (!process.isClient) return;
    var WebFont = require('webfontloader');
    WebFont.load({
      google: {
        families: ['Prata', 'Medula One']
      }
    });
    gigs.forEach(element => {
      const year = moment(element.DATE).format('YYYY')
      this.years[year] = year
    });
    this.years = Object.keys(this.years)
  },
  methods: {
    getYear(gig) {
      const y = moment(gig.DATE).format('YYYY')

        return y
  
    },
    displayGig(gig) {
      return gig.TYPE != 'R' && (moment(gig.DATE)>=moment());
    }, 
    displayGigTitle(gig) {
      switch(gig.TYPE) {
        case "M":
          return "Concert privé";
        case "P":
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
}
</script>

