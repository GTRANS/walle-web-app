<template>
  <div class="bg">
    <br />
    <PembayaranBank />
  </div>
</template>

<script>
import PembayaranBank from '../../../components/Pembayaran/PembayaranBankPaket.vue'
export default {
  name: 'PembayaranPulsaPagess',
  components: {
    PembayaranBank
  },
  middleware: ['auth', 'user'],
  data() {
    return {}
  },
}
</script>

<style></style>
