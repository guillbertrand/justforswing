<template>
  <div >
      <siteheader/>
      <slot/>
  </div>
</template>
<script>
import  siteheader  from '~/components/siteheader.vue'

export default {
components: {
    siteheader
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
