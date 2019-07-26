<template>
  <div>
    <lay_head v-if="!(this.$route.path=='/movie/site')" :title="this.$route.path=='/cinema'?'影院':'猫眼电影'"></lay_head>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <lay_foot v-if="!(this.$route.path=='/movie/site')"></lay_foot>
  </div>
</template>

<script>
import lay_head from "@/components/layout/head";
import lay_foot from "@/components/layout/foot";
export default {
  data() {
    return {
    };
  },
  components: {
    lay_head,
    lay_foot
  },
  mounted() {},
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
</style>
