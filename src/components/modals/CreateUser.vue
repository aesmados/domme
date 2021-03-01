<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm create-user">
          <div class="pick-img">
              <input type="file" id="file-upload">
              <label for="file-upload" >
                  <img src="@/assets//images/camera.svg" alt="">
              </label>
          </div>
          <div class="tab-row">
              <div class="tab-item active">
                  Лицевой счет
              </div>
              <div class="tab-item">
                  Сотрудник
              </div>
              <div class="tab-item">
                  Подрядчик
              </div>
          </div>
         <div class="tab-content dn">
             <div class="input-block">
                <input type="text" placeholder="Номер лицевого счета">
                <div class="flex-row">
                    <div class="left">
                        <input type="text" placeholder="Имя">
                        <input type="text" placeholder="Телефон">
                        <input type="text" placeholder="Блок">
                        <input type="text" placeholder="Этаж">
                    </div>
                    <div class="right">
                        <input type="text" placeholder="Фамилия">
                        <input type="text" placeholder="E-mail">
                        <input type="text" placeholder="Подъезд">
                        <input type="text" placeholder="Квартира">
                    </div>
                </div>
                <div class="btn-row">
                    <div class="decline-btn" @click="closeModal">
                        Отменить
                    </div>
                    <div class="add-btn">
                        Добавить
                    </div>
                </div>
             </div>
         </div> 
         <div class="tab-content dn">
             <div class="input-block">                
                <div class="flex-row">
                    <div class="left">
                        <input type="text" placeholder="Имя">
                    </div>
                    <div class="right">
                        <input type="text" placeholder="Фамилия">
                    </div>
                </div>
                <input type="text" placeholder="E-mail">
                <div class="flex-row">
                    <div class="left">
                        <input type="text" placeholder="Телефон">
                        <input type="text" placeholder="Номер УДВ">
                    </div>
                    <div class="right">
                        <input type="text" placeholder="ИИН">
                        <input type="text" placeholder="Должность">
                    </div>
                </div>
                <div class="doc-block">
                    <input type="file" id="upload-doc">                    
                    <label for="upload-doc">
                        <div class="image">
                            <img src="@/assets/images/file.svg" alt="">
                        </div>
                        <div class="text">
                            <div class="doc-name">
                            Трудовой договор
                        </div>
                        <div class="open">
                            Прикрепить
                        </div>
                        </div>
                    </label>
                </div> 
                <div class="btn-row">
                    <div class="decline-btn" @click="closeModal">
                        Отменить
                    </div>
                    <div class="add-btn">
                        Добавить
                    </div>
                </div>
             </div>
         </div>  
         <div class="tab-content">
             <div class="input-block">  
                <input type="text" placeholder="Название услуги">              
                <div class="flex-row">
                    <div class="left">
                        <input type="text" placeholder="Имя">
                        <input type="text" placeholder="Телефон">
                         <input type="text" placeholder="БИН">
                    </div>
                    <div class="right">
                        <input type="text" placeholder="Фамилия">
                        <input type="text" placeholder="E-mail">
                        <input type="text" placeholder="Юр. адрес">
                    </div>
                </div>      
               
                <div class="doc-block">
                    <input type="file" id="upload-doc">                    
                    <label for="upload-doc">
                        <div class="image">
                            <img src="@/assets/images/file.svg" alt="">
                        </div>
                        <div class="text">
                            <div class="doc-name">
                            Договор
                        </div>
                        <div class="open">
                            Прикрепить
                        </div>
                        </div>
                    </label>
                </div> 
                <div class="switch-box">
                    Разовая услуга
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="btn-row">
                    <div class="decline-btn" @click="closeModal">
                        Отменить
                    </div>
                    <div class="add-btn">
                        Добавить
                    </div>
                </div>
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