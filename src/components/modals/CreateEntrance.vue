<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm entrance-info">
           <div class="top-wrap">
               <div class="close" @click="closeModal">
                    &#10005;
                </div>
                <h2 class="order-title">
                Добавить подъезд</h2>  
                <div class="counter-row">
                    <div class="block-count">
                        <div class="counter">
                            <div @click="floorCounter--" class="decrease">
                            -
                            </div>
                            <div class="num">
                            {{ floorCounter }}
                            </div>
                            <div @click="floorCounter++" class="increase">
                            +
                            </div>
                        </div>
                        <p>Кол-во этажей</p>
                    </div>
                    <div class="block-count">
                        <div class="counter">
                            <div @click="flatCounter--" class="decrease">
                            -
                            </div>
                            <div class="num">
                            {{ flatCounter }}
                            </div>
                            <div @click="flatCounter++" class="increase">
                            +
                            </div>
                        </div>
                        <p>Кол-во квартир
    на этаже</p>
                    </div>
                    <div class="block-count">
                        <div class="counter">
                            <div @click="startFromFloorCounter--" class="decrease">
                            -
                            </div>
                            <div class="num">
                            {{ startFromFloorCounter }}
                            </div>
                            <div @click="startFromFloorCounter++" class="increase">
                            +
                            </div>
                        </div>
                        <p>Нумерация с ... этажа</p>
                    </div>
                    <div class="block-count">
                        <div class="counter">
                            <div @click="startFromFlatCounter--" class="decrease">
                            -
                            </div>
                            <div class="num">
                            {{ startFromFlatCounter }}
                            </div>
                            <div @click="startFromFlatCounter++" class="increase">
                            +
                            </div>
                        </div>
                        <p>Нумерация с ... квартиры</p>
                    </div>
                </div>   
                <div class="add-entrance-info">
                    Добавить
                </div> 
           </div>
            <div class="add-floor">
                <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num">
                            134
                        </div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                </div>
            </div>            
      </div>
      
  </div>
</template>

<script>
export default {
    data () {
    return {      
      floorCounter: 0,
      flatCounter: 0,
      startFromFloorCounter: 0,
      startFromFlatCounter: 0      
    }
  },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>