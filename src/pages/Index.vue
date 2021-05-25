<template>
  <Layout>
    <actus/>
    <dates/>
    <bio/>
    <discographie/>
    <contact/>
  </Layout>
</template>

<script>
import actus from '~/components/actus.vue'
import dates from '~/components/dates.vue'
import bio from '~/components/bio.vue'
import contact from '~/components/contact.vue'

export default {
components: {
    actus,
    dates,
    bio,
    contact
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
