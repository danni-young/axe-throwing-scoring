<template>
  <div>
    <p>Round Score: {{ roundScore }}</p>
    <p>Throw Count: {{ throwCount }}</p>
    <p>Throw Count: {{ playerOnBoard }}</p>

    <div class="w-52 border">
      <div class="flex flex-row p-3">
        <div
          class="border-2 border-green-700 rounded-full h-1/2 w-7"
          @click.stop="onClick(7)"
        >
          <p class="ml-2">7</p>
        </div>
        <div
          class="mt-5 border-2 border-blue-700 rounded-full w-32"
          @click.stop="onClick(1)"
        >
          <p class="ml-14">1</p>
          <div
            class="border-2 border-black rounded-full w-20 m-auto mb-7"
            @click.stop="onClick(3)"
          >
            <p class="ml-8">3</p>
            <div
              class="border-2 border-red-700 rounded-full w-7 m-auto mb-7"
              @click.stop="onClick(5)"
            >
              <p class="ml-2">5</p>
            </div>
          </div>
        </div>
        <div
          class="border-2 border-green-700 rounded-full h-1/2 w-7"
          @click.stop="onClick(7)"
        >
          <p class="ml-2">7</p>
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
  props: ['roundNumber', 'location'],
  methods: {
    onClick(number) {
      //7 is only available on the final throw
      if (this.throwCount < 4 && number !== 7) {
        this.roundScore += number
        this.throwCount += 1
      } else if (this.throwCount === 4) {
        this.roundScore += number
        this.throwCount += 1
      }
    },
  },
  computed: {
    playerOnBoard() {
      if (this.roundNumber === 1 || this.roundNumber === 3) {
        if (this.location === 'L') {
          return 'player1'
        } else {
          return 'player2'
        }
      }
      if (this.roundNumber === 2) {
        if (this.location === 'L') {
          return 'player2'
        } else {
          return 'player1'
        }
      }
    },
  },
}
</script>

<style>
</style>