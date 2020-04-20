<template>
  <q-footer>
    <q-toolbar class="bg-grey-4 text-black row">
      <q-btn round flat icon="insert_emoticon" class="q-mr-sm bg" />
      <q-input
        rounded
        outlined
        dense
        class="WAL__field col-grow q-mr-sm"
        bg-color="white"
        v-model="message"
        placeholder="Enter your message"
      />
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: "InputFooter",
  data() {
    return {
      message: ""
    };
  }
};
</script>