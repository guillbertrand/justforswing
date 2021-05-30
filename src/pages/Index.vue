<template>
  <Layout>
    <actus/>
    <dates/>
    <bio/>
    <discographie/>
    <contact/>
    <sitefooter/>
  </Layout>
</template>

<script>
import actus from '~/components/actus.vue'
import dates from '~/components/dates.vue'
import bio from '~/components/bio.vue'
import contact from '~/components/contact.vue'
import discographie from '~/components/discographie.vue'
import sitefooter from '~/components/sitefooter.vue'

export default {
components: {
    actus,
    dates,
    bio,
    contact,
    discographie,
    sitefooter
  },
  metaInfo: {
    title: 'Just for Swing : 3 frères, du Jazz... et du Swing !'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
