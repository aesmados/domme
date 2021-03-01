<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm">           
          <div class="delete-user delete-entrance">
                <img src="@/assets/images/delete-icon.svg" alt="">    
                                 
                <div class="sure-text">
                        Вы действительно хотите
удалить пользователя?
                    </div>
                <div class="name">1-й подъезд из 2-го блока?</div> 
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