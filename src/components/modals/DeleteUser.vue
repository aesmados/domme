<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm">
          <div class="delete-avatar">
              <img src="@/assets/images/avatar.png" alt="">
          </div>  
          <div class="delete-user">
                <div class="name">Андрей Земский</div>
                <div class="address-row">
                    <div class="address">
                        <div class="type"> Блок </div>
                        <div class="num"> 2 </div>
                    </div>
                    <div class="address">
                        <div class="type"> Подъезд </div>
                        <div class="num"> 5 </div>
                    </div>                               
                </div>   
                <div class="flex-row jcc">
                    <img src="@/assets/images/delete-icon.svg" alt="">    
                    <div class="sure-text">
                        Вы действительно хотите
удалить пользователя?
                    </div>
                </div>
                <div class="btn-row">
                    <div class="decline-btn" @click="closeModal">
                        Отмена    
                    </div> 
                    <div class="delete-btn">
                        Удалить</div>   
                </div> 
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