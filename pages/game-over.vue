<template>
  <div class="border-2 border-red-500 flex flex-col items-center h-screen">
    <h1 class="text-2xl my-2">The final scores are in...</h1>
    <ul>
      <!-- <li class="mb-2 bg-yellow-600 font-semibold" v-bind:key="player.name">{{scores[0].results.player.name}} - {{player.score}}</li> -->
      <!-- <li class="mb-2 font-semibold" v-bind:key="player.name">{{player.name}} - {{player.score}}</li>
      <li class="mb-2 font-semibold" v-bind:key="player.name">{{player.name}} - {{player.score}}</li>
      <li class="mb-2 font-semibold" v-bind:key="player.name">{{player.name}} - {{player.score}}</li> -->
    </ul>
    <nuxt-link
      to="/playerDetails"
      class="font-semibold p-3 rounded-full text-white bg-sky-500 hover:bg-sky-700"
      >Play again?</nuxt-link
    >
  </div>
</template>

<script>
import { calculateHighestScore } from '../lib/calculateHighestScore'
export default {
  name: 'game-over',
  methods: {
    clearStore: {
      //create a default state and reset state with this to clear
      // then we can route to the player page
    },
  },
  computed: {
    scores() {
      return calculateHighestScore(this.$store.state.players.scores)
    },
  },
}
</script>
