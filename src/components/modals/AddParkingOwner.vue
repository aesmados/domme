<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm">
        <h2 class="order-title">
           Владелец места
        </h2>
        <div class="close" @click="closeModal">
            &#10005;
        </div>
        <div class="add-parking-owner">
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
          <div class="tab-row">
                <div class="tab-item active">
                    Житель
                </div>
                <div class="tab-item">
                    Сторонний человек
                </div>                
            </div>
          <form>
            <input type="text" placeholder="Выберите жителя">    
            <input type="text" placeholder="Номер телефона">    
            <input type="text" placeholder="Номер договора">    
            <input type="text" placeholder="Марка машины">    
            <input type="text" placeholder="Номер автомобиля">    
            <button class="add-btn"> Добавить</button>
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