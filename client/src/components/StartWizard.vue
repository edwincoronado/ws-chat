<template>
  <q-dialog v-model="prompt" persistent ref="WizardDialog">
    <q-card style="min-width: 350px" :hidden="card1Hidden">
      <q-card-section>
        <div class="text-h6">Hello! 👋🏻</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="name"
          autofocus
          @keyup.enter="validateEnter('name')"
          placeholder="Enter your name here"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Continue" @click="next" :disable="!name" />
      </q-card-actions>
    </q-card>

    <q-card style="min-width: 350px" :hidden="card2Hidden">
      <q-card-section>
        <div class="text-h6">What would you like to do, {{ name }}?</div>
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md row justify-center">
          <q-btn
            color="white"
            outline
            elevated
            text-color="primary"
            label="Join room"
            @click="next2"
          />
          <q-btn color="primary" label="Create new room" @click="createRoom" />
        </div>
      </q-card-section>
    </q-card>
    <q-card style="min-width: 350px" :hidden="card3Hidden">
      <q-card-section>
        <div class="text-h6">Please enter room ID</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="roomId"
          autofocus
          @keyup.enter="validateEnter('roomId')"
          placeholder="Enter room ID here"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Join" @click="joinRoom" :disable="!roomId" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "StartWizard",
  computed: {
    userName() {
      return `${this.name} (me)`;
    }
  },
  data() {
    return {
      card1Hidden: false,
      card2Hidden: true,
      card3Hidden: true,
      disable: true,
      alert: false,
      confirm: false,
      prompt: true,
      roomId: "1234",
      name: ""
    };
  },
  methods: {
    validateEnter(prop) {
      if (!this[prop]) {
        this.$refs.WizardDialog.shake();
        return;
      }
      switch (prop) {
        case "name": {
          this.next();
          break;
        }
        case "roomId": {
          this.joinRoom();
          break;
        }
        default:
          return;
      }
    },
    next() {
      this.card1Hidden = true;
      this.card2Hidden = false;
      this.$parent.$parent.userName = this.userName;
    },
    createRoom() {
      this.prompt = false;
      this.$parent.$parent.roomId = this.roomId;
    },
    next2() {
      this.card2Hidden = true;
      this.card3Hidden = false;
    },
    joinRoom() {
      this.prompt = false;
      this.$parent.$parent.roomId = this.roomId;
    }
  }
};
</script>
