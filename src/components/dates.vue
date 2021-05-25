<template>
  <div class="mb-10" id="dates">
  <h2 class="text-4xl mb-4 font-display">Dates</h2>
  <table class="font-body">
    <tr v-for="gig in gigs.slice(-15)" :key="gig.DATE+gig.HORAIRES"> 
      <td>
        <a
          :href="gig.LIEN"
          class="flex flex-col text-base font-bold hover:underline"
        >
          <span>{{ gig.DATE }}</span>
          <span class="text-xs">{{ gig.HORAIRES }}</span></a
        >
      </td>
      <td>
        <a :href="gig.LIEN"> <span>{{ gig.EVENEMENT }}</span></a>
      </td>
      <td>
       {{ gig.LIEU }}, {{ gig.VILLE }} 
      </td>
    </tr>
  </table>
  <a href="/historique/" class="underline cursor-pointer"
    >Voir toutes les dates</a
  >
</div>

</template>
<script>
import gigs from '~/data/gig.json'

export default {
  data() {
    return {
      gigs
    }
  }
}
</script>
