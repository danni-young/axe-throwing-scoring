<template>
  <div class="bg-green-400 w-screen h-screen flex flex-row items-center">
    <div class="w-1/2 mx-auto flex flex-col items-center">
      <p class="text-gray-800 uppercase text-3xl font-bold mt-6 mb-3">Enter player names</p>
      <p :v-if="error.length > 0" class="font-bold text-red-500">{{ error }}</p>
      <div class="flex flex-col w-1/2">
        <input
          v-for="(player, index) in players"
          :key="player"
          class="border mb-2 ml-3"
          :placeholder="` Player ${index + 1}`"
          v-model="$data[player]"
        />
        <button v-on:click="addPlayers([player1, player2, player3, player4])" class="bg-white hover:bg-gray-100 text-gray-800 lg:text-base text-sm font-semibold py-2 px-4 border border-gray-400 rounded shadow w-content mx-auto mt-2">
          Save players
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createPlayerRounds } from '~/lib/createPlayerRounds'
export default {
  data() {
    return {
      players: ['player1', 'player2', 'player3', 'player4'],
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      error: '',
    }
  },
  methods: {
    addPlayers(players) {
      if (
        this.player1.length === 0 ||
        this.player2.length === 0 ||
        this.player3.length === 0 ||
        this.player4.length === 0
      ) {
        this.error = 'Please add names of all players to begin playing'
      } else {
        this.error = ''
        this.$store.commit('players/add', players)
        const playerRounds = createPlayerRounds(players)
        this.$store.commit('players/addCombination', playerRounds)
        this.$router.push({ name: 'game' })
      }
    },
  },
}
</script>

<style>
</style>