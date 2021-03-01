<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm">
            <div class="close" @click="closeModal">
                &#10005;
            </div>
            <div class="get-meeting">            
                <h2 class="order-title">Провести собрание</h2>
                <form >
                    <input type="text" placeholder="Ф.И.О">
                    <input type="text" placeholder="Номер телефона">
                </form>
                <button>Заказать услугу</button>
            </div>
      </div>
  </div>
</template>

<script>
export default {
methods: {
        closeModal() {
            this.$emit('close')
        },
        
    }
}
</script>

<style>

</style>