<template>
  <div id="app">
    <div v-html="gretings"></div>
    <form @submit.prevent="updateToast(msg)">
      <input type="text" name="msg" id="msg" v-model="msg" />
      <button> Submit </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  inject: ["toast", "updateToast"],
  data: () => ({
    gretings: "gretings",
    msg: ''
  }),
  watch: {
    toast: {
      deep: true,
      immediate: true,
      handler(newVal) {
        console.log('new data for toast is ', newVal)
      }
    }
  },

  beforeMount() {
    this.gretings = this.$bold(this.gretings);
    console.log("toast data is ", this.toast);
    console.log("update toast data is ", this.updateToast);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
