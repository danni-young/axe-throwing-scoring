<template>
  <div class="bg-stone-50 p-2 w-max mt-2">
    <div class="mb-5 ">
      <p class="text-lg font-bold">Player: {{ playerOnBoard }}</p>
      <p>Round Score: {{ roundScore }}</p>
      <p>Throw Count: {{ throwCount }}</p>
    </div>

    <div class="w-max h-80 border">
      <div class="flex flex-row p-3">
        <div
          class="border-2 border-green-700 rounded-full h-9 w-9  cursor-pointer"
          @click.stop="onClick(7)"
        >
          <p class="ml-3 mt-1 font-bold">7</p>
        </div>
        <div
          class="z-0 mt-5 border-2 border-blue-700 cursor-pointer rounded-full w-64 h-64"
          @click.stop="onClick(1)"
        >
          <p class="ml-28 font-bold"> 1</p>
          <div
            class="border-2 border-black cursor-pointer rounded-full w-44 h-44 m-auto mt-4 mb-6 "
            @click.stop="onClick(3)"
          >
            <p class="ml-20 mt-3 font-bold">3</p>
            <div
              class="z-50 border-2 border-red-700 cursor-pointer rounded-full  m-auto mt-5 mb-5 w-14 h-14"
              @click.stop="onClick(5)"
            >
              <p class="ml-5 mt-3 font-bold">5</p>
            </div>
          </div>
        </div>
        <div
          class="border-2 border-green-700 rounded-full h-9 w-9 cursor-pointer"
          @click.stop="onClick(7)"
        >
          <p class="ml-3 mt-1">7</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roundScore: 0,
      throwCount: 0,
    }
  },
  props: ['roundNumber', 'location', 'gameComplete'],
  methods: {
    onClick(score) {
      if ((this.throwCount < 4 && score !== 7) || this.throwCount === 4) {
        this.roundScore += score
        this.throwCount += 1
      }
    },
  },
  watch: {
    throwCount() {
      if (this.throwCount === 5) {
        this.$emit(
          'round-end',
          this.playerOnBoard,
          this.roundScore,
          this.roundNumber
        )
        this.$emit('update-round')
      }
    },
    roundNumber(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.roundScore = 0
        this.throwCount = 0
      }
    },
    gameComplete() {
      if (this.gameComplete === true) {
        this.roundScore = 0
        this.throwCount = 0
      }
    },
  },
  computed: {
    playerOnBoard() {
      if (this.roundNumber === 1 || this.roundNumber === 3) {
        if (this.location === 'L') {
          return 'One'
        } else {
          return 'Two'
        }
      }
      if (this.roundNumber === 2) {
        if (this.location === 'L') {
          return 'Two'
        } else {
          return 'One'
        }
      }
    },
  },
}
</script>

<style></style>
