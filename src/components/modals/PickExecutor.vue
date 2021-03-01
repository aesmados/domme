<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm modal-pick">
          <div class="modal-wrap">
              <div class="back-btn"  @click="closeModal">
                  <img src="@/assets/images/back.svg" alt="">
              </div>
                <h2 class="order-title">Исполнитель</h2>
                <div class="close" @click="closeModal">
                    &#10005;
                </div>
                <div class="search">
                    <input type="text" placeholder="Поиск...">
                </div>
          </div>
          <div class="pick-items">
              <div class="item">
                  <div class="image">
                      <img src="@/assets/images/avatar.png" alt="">
                  </div>
                  <div class="text">
                      <div class="name">
                          Медет Сисенгалиев
                      </div>
                      <div class="job">
                          Должность
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="image">
                      <img src="@/assets/images/avatar.png" alt="">
                  </div>
                  <div class="text">
                      <div class="name">
                          Медет Сисенгалиев
                      </div>
                      <div class="job">
                          Должность
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="image">
                      <img src="@/assets/images/avatar.png" alt="">
                  </div>
                  <div class="text">
                      <div class="name">
                          Медет Сисенгалиев
                      </div>
                      <div class="job">
                          Должность
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="image">
                      <img src="@/assets/images/avatar.png" alt="">
                  </div>
                  <div class="text">
                      <div class="name">
                          Медет Сисенгалиев
                      </div>
                      <div class="job">
                          Должность
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="image">
                      <img src="@/assets/images/avatar.png" alt="">
                  </div>
                  <div class="text">
                      <div class="name">
                          Медет Сисенгалиев
                      </div>
                      <div class="job">
                          Должность
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="image">
                      <img src="@/assets/images/avatar.png" alt="">
                  </div>
                  <div class="text">
                      <div class="name">
                          Медет Сисенгалиев
                      </div>
                      <div class="job">
                          Должность
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
        },
        
    }
}
</script>

<style>

</style>