<template>
  <div>
   <div class="w-full bg-red-400">
      <p class="text-xl pl-4 font-bold">Round Number: {{ roundNumber }}</p>
    </div>
  <div
    class="flex flex-row flex-wrap justify-around items-center h-3/6"
  >

    <target-board
      location="L"
      :roundNumber="roundNumber"
      v-on:round-end="completeRound"
      v-on:update-round="updateRound"
      :gameComplete="gameComplete"
    />

    <target-board
      location="R"
      :roundNumber="roundNumber"
      v-on:round-end="completeRound"
      v-on:update-round="updateRound"
      :gameComplete="gameComplete"
    />
  </div>
  </div>
 

</template>

<script>
import targetBoard from './targetBoard.vue'
// TODO: THINK ABOUT WHAT TO DO IN A TIE, FOR THE WINNERS MODAL
export default {
  data() {
    return {
      hasOnePlayerBeen: false,
      roundNumber: 1,
      One: {
        1: 0,
        2: 0,
        3: 0,
        complete: false,
      },
      Two: {
        1: 0,
        2: 0,
        3: 0,
        complete: false,
      },
    }
  },
  props: ['gameComplete'],
  methods: {
    completeRound(player, score, round) {
      this[player][this.roundNumber] = score
      if (round === 3) {
        this[player].complete = true
        if (this.One.complete === true && this.Two.complete === true) {
          this.$emit('toggleGameComplete')
        }
      }
    },
    //when both players are complete
    updateRound() {
      if (this.roundNumber < 3) {
        if (this.hasOnePlayerBeen === true) {
          this.roundNumber += 1
          this.hasOnePlayerBeen = false
        } else {
          this.hasOnePlayerBeen = true
        }
      }
    },
  },
  components: { targetBoard },
  watch: {
    gameComplete: function () {
      if (this.gameComplete === true) {
        this.$emit('finishSession', [this.One, this.Two])
        // clear once game is complete
        this.roundNumber = 1
        this.One = {
          1: 0,
          2: 0,
          3: 0,
          complete: false,
        }
        this.Two = {
          1: 0,
          2: 0,
          3: 0,
          complete: false,
        }
        this.hasOnePlayerBeen = false
      }
    },
  },
}
</script>

<style></style>
