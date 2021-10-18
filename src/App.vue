<template>
  <v-app>
    <div class="text-center">
      <v-btn dark color="red darken-2" @click="toggleSnackbar(true)">
        Open Snackbar
      </v-btn>

      <v-snackbar v-model="toast.show">
        {{ toast.message }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="toggleSnackbar(false)">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  inject: ['toast','updateToast'],

  data: () => ({
    snackbar: false,
    text: 'ok'
  }),
  methods: {
    toggleSnackbar(isOpen) {
      isOpen ? this.updateToast('this is a toast message') : this.updateToast()
    }
  }
};
</script>
