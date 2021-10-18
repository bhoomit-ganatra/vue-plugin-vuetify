export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          toast: {
            show: false,
            message: "",
          },
        };
      },
      methods: {
        updateToast(msg) {
          if (msg) {
            this.toast = {
              show: true,
              message: msg,
            };
          } else {
            this.toast = {
              show: false,
              message: "",
            };
          }
        },
      },
      created() {
        console.log("hello");
      },
    });
    Vue.prototype.$bold = (text) => {
      return `<b>${text}</b>`;
    };
  },
};
