<template>
  <q-dialog v-model="prompt" persistent ref="WizardDialog">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Hello! 👋🏻</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="userName"
          autofocus
          @keyup.enter="validateEnter"
          placeholder="Enter your name here"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Continue" v-close-popup :disable="!userName" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "StartWizard",
  data() {
    return {
      disable: true,
      alert: false,
      confirm: false,
      prompt: true,
      userName: ""
    };
  },
  methods: {
    validateEnter() {
       if (!this.userName) {
        this.$refs.WizardDialog.shake();
        this.prompt = true;
       } else {
           this.prompt = false;
       }
    }
  }
};
</script>
