<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-blue-6 text-white">
      <q-toolbar>
        <q-toolbar-title>
          WS Chat
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>-->
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md row justify-center">
        <div style="width: 100%">
          <q-chat-message :label="dateNow" />
          <div v-for="message in messages" :key="message.id">
            <Message :name="message.name" :self="message.self" />
          </div>
        </div>
      </div>
    </q-page-container>
    <q-footer>
      <q-toolbar class="bg-grey-4 text-black row">
        <q-btn round flat icon="insert_emoticon" class="q-mr-sm bg" />
        <q-input
          rounded
          outlined
          dense
          class="WAL__field col-grow q-mr-sm"
          bg-color="white"
          placeholder="Enter your message"
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { date } from "quasar";
import Message from "../components/Message.vue";

export default {
  data() {
    return {
      right: false,
      messages: [
        {
          name: "Edwin",
          self: true
        }
      ]
    };
  },
  components: {
    Message
  },
  computed: {
    dateNow() {
      const now = Date.now();
      return date.formatDate(now, "dddd, MMMM Do");
    }
  }
};
</script>