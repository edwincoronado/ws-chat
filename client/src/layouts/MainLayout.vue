<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-white">
      <q-toolbar>
        <q-icon left name="emoji_people" style="round" size="md">
          <q-tooltip
            transition-show="flip-right"
            transition-hide="flip-left"
            anchor="bottom right"
          >Developed with love by Edwin Coronado 😊</q-tooltip>
        </q-icon>
        <q-toolbar-title class="text-center" v-show="Boolean(roomId)">Room ID: {{ roomId }}</q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" class="absolute-right q-pr-sm" />
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
            <Message
              :name="message.name"
              :self="message.self"
              :text="message.text"
              :avatar="avatar"
            />
          </div>
        </div>
      </div>
    </q-page-container>
    <StartWizard />
    <q-footer>
      <q-toolbar class="bg-grey-4 text-black row">
        <q-btn round flat icon="insert_emoticon" class="q-mr-sm bg" />
        <q-input
          rounded
          outlined
          dense
          class="WAL__field col-grow q-py-sm"
          bg-color="white"
          placeholder="Enter your message"
          v-model="inputText"
          @keyup.enter="pushMessage(true)"
        />
        <q-btn
          round
          flat
          size="0.75rem"
          hover
          icon="send"
          color="white"
          class="q-ml-sm bg"
          @click="pushMessage(true)"
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { date } from "quasar";
import Message from "../components/Message.vue";
import StartWizard from "../components/StartWizard.vue";

export default {
  data() {
    return {
      avatar: `https://api.adorable.io/avatars/${Math.floor(
        Math.random() * 100
      )}`,
      inputText: "",
      right: false,
      userName: "",
      messages: [],
      roomId: ""
    };
  },
  components: {
    Message,
    StartWizard
  },
  methods: {
    pushMessage(self) {
      if (this.messages.length > 0) {
        let lastMessage = this.messages[this.messages.length - 1];
        lastMessage.self && lastMessage.text.push(this.inputText);
      } else {
        this.messages.push({
          name: this.userName,
          self: self,
          text: [this.inputText],
          avatar: this.avatar
        });
      }
      this.inputText = "";
    }
  },
  computed: {
    dateNow() {
      const now = Date.now();
      return date.formatDate(now, "dddd, MMMM Do");
    }
  }
};
</script>