<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm">
        <h2 class="order-title">
            Добавить жителя
        </h2>
        <div class="close" @click="closeModal">
            &#10005;
        </div>
        <div class="add-resident">
          <div class="address-row">
            <div class="address">
                <div class="type"> Блок </div>
                <div class="num"> 2 </div>
            </div>
            <div class="address">
                <div class="type"> Подъезд </div>
                <div class="num"> 5 </div>
            </div> 
            <div class="address">
                    <div class="type"> Этаж </div>
                    <div class="num"> 2 </div>
                </div> 
                <div class="address">
                    <div class="type"> Квартира </div>
                    <div class="num"> 134 </div>
                </div>                
          </div>
          <form class="add-resident">
            <div class="flex-row">
              <div class="pick-resident-img">
                <input type="file" id="resident-img">
                <label for="resident-img">
                  <img src="@/assets/images/camera.svg" alt="">
                </label>
              </div>
              <div class="top-inputs">
                <input type="text" placeholder="Имя">
                <input type="text" placeholder="Фамилия">
              </div>
            </div>
            <div class="bot-input">
              <input type="text" placeholder="E-mail">
              <input type="text" placeholder="Телефон">
              <input type="text" placeholder="Номер лицевого счета">
            </div>
            <button class="btn-add-resident">Добавить</button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>