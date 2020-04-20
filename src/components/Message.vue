<template>
  <q-chat-message
    :name="name"
    :avatar="avatar"
    :text="text"
    :sent="self"
    :stamp="timeAgo"
    :id="id"
  />
</template>
<script>
import { format } from "timeago.js";

export default {
  props: {
    name: String,
    self: Boolean,
    text: Array,
    avatar: String
  },
  name: "Message",
  data() {
    return {
      id: null,
      timeAgo: null
    };
  },
  created() {
    this.id = Date.now();
    this.timeAgo = format(this.id);

    setInterval(() => {
      this.timeAgo = format(this.id);
    }, 15000);
  }
};
</script>