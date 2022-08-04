<template>
  <div>
    <h1>The final scores are in...</h1>
    <p v-for="player in scores.results">{{player.name}} -> {{player.score}}</p>
    <nuxt-link to="/playerDetails" class="border"
      >Play again?</nuxt-link>
  </div>
</template>

<script>
import {calculateHighestScore} from '../lib/calculateHighestScore'
export default {
  name: 'game-over',
  methods: {
    clearStore: {
      //create a default state and reset state with this to clear
      // then we can route to the player page
    }
  },
  computed: {
    scores(){
      return calculateHighestScore(this.$store.state.players.scores)
    }
  }
}
</script>
