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
    text: Array
  },
  name: "Message",
  data() {
    return {
      id: null,
      avatar: null,
      timeAgo: null
    };
  },
  created() {
    this.id = Date.now();
    this.avatar = `https://api.adorable.io/avatars/${Math.floor(
      Math.random() * 100
    )}`;
    this.timeAgo = format(this.id);

    setInterval(() => {
      this.timeAgo = format(this.id);
    }, 15000);
  }
};
</script>