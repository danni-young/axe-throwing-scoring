<template>
  <div>
    <p>Tester</p>
    <winner-announcement :winner="winner" />
  </div>
</template>

<script>
import getReadyPopUp from '~/components/getReadyPopUp.vue'
import TargetBoard from '~/components/targetBoard.vue'
import WinnerAnnouncement from '~/components/winnerAnnouncement.vue'
export default {
  components: { getReadyPopUp, TargetBoard, WinnerAnnouncement },
  data() {
    return { winner: 'Danni' }
  },
}
</script>

<style></style>
