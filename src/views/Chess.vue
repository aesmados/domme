<template>
  <div class="content">
      <div class="row">
          <div class="tab-row">
                <div class="tab-item" @click="activetab='1'" :class="[ activetab === '1' ? 'active' : '' ]">
                    Жилые помещения
                </div>
                <div class="tab-item" @click="activetab='2'" :class="[ activetab === '2' ? 'active' : '' ]">
                    Не жилые помещения
                </div>
                <div class="tab-item" @click="activetab='3'" :class="[ activetab === '3' ? 'active' : '' ]">
                    Паркинг
                </div>
                <div class="tab-item" @click="activetab='4'" :class="[ activetab === '4' ? 'active' : '' ]">
                    Коммерция
                </div>
            </div>
      </div>
      <div class="row">
          <div class="debt-filter-row">
              <div class="debt-item">
                  Без долга
              </div>
              <div class="debt-item">
                  Долг до 30.000тг
              </div>
              <div class="debt-item">
                  Долг от 30.000тг
              </div>
              <div class="debt-item">
                  Долг от    <span>100.000| </span>   тг
              </div>
          </div>
      </div>
      <div class="grey-bg" v-if="activetab === '1'">
          <div class="block">
                <div class="block-title">
                    Блок 1
                </div>
                <div class="add-entrance" @click="toggleCreateEntrance">
                    + Добавить подъезд
                </div>
          </div>
          <div class="flex-row flex-wrap">
              <div class="entrance-item">
                  <div class="dots-open" @click="toggleEditEntrance">
                      <img src="@/assets/images/dots.svg" alt="">
                  </div>
                  <div class="edit-entrance" v-show="showEditEntrance">
                      <div class="edit">
                          Редактировать
                      </div>
                      <div class="delete" @click="toggleDeleteEntrance">
                          Удалить
                      </div>
                  </div>
                  <h6 class="entrance-title">
                      1 подъезд
                  </h6>
                  <div class="total-debt">
                      Общий долг: 324.000
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num ">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num blue">134</div>
                        <div class="flat-num red">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num yellow">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num dark">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
              </div>
              <div class="entrance-item">
                  <div class="dots-open">
                      <img src="@/assets/images/dots.svg" alt="">
                  </div>
                  <h6 class="entrance-title">
                      2 подъезд
                  </h6>
                  <div class="total-debt">
                      Общий долг: 324.000
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num ">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num blue">134</div>
                        <div class="flat-num red">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num yellow">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num dark">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
              </div>
              
          </div>
          <div class="block">
                <div class="block-title">
                    Блок 2
                </div>
                <div class="add-entrance" @click="toggleCreateEntrance">
                    + Добавить подъезд
                </div>
          </div>
          <div class="flex-row flex-wrap">
              <div class="entrance-item">
                  <div class="dots-open">
                      <img src="@/assets/images/dots.svg" alt="">
                  </div>
                  <h6 class="entrance-title">
                      1 подъезд
                  </h6>
                  <div class="total-debt">
                      Общий долг: 324.000
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num ">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num blue">134</div>
                        <div class="flat-num red">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num grey">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num yellow">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
                  <div class="floor-item">
                    <div class="floor">
                        1 этаж
                    </div>
                    <div class="flat-row">
                        <div class="flat-num dark">
                            134
                        </div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num grey">134</div>
                        <div class="flat-num"></div>
                        <div class="flat-num"></div>
                    </div>
                  </div>
              </div>       
              
          </div>
          <div class="create-block">
              <div class="block-title grey">
                  Блок 3
              </div>
              <div class="create-block-btn">
                  Создать
              </div>
          </div>
      </div>
      <!-- parking -->
      <div class="grey-bg" v-if="activetab === '2'">
          <div class="">
                <div class="block">
                    <div class="block-title">
                        Блок 1
                    </div>
                    <div class="add-entrance" @click="toggleCreateParking">
                        + Добавить парковку
                    </div>
                </div>
                <div class="parking-block">
                    <div class="dots-open" @click="toggleEditEntrance">
                      <img src="@/assets/images/dots.svg" alt="">
                    </div>
                    <div class="edit-entrance" v-show="showEditEntrance">
                        <div class="edit">
                            Редактировать
                        </div>
                        <div class="delete" @click="toggleDeleteEntrance">
                            Удалить
                        </div>
                    </div>
                    <h6 class="title">
                        1 этаж
                    </h6>
                    <div class="free-parking">
                        Пустых мест: 76
                    </div>
                    <div class="parking-row">
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                    </div>
                    <div class="parking-row">
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                    </div>
                    <div class="parking-row">
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                    </div>
                    <div class="parking-row">
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                    </div>
                    <div class="parking-row">
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                    </div>
                    <div class="parking-row">
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                    </div>
                    <div class="parking-row">
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item ">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                        <div class="parking-item grey">
                            134
                        </div>
                    </div>
                </div>
                <div class="block">
                        <div class="block-title">
                            Блок 2
                        </div>
                        <div class="add-entrance" @click="toggleCreateParking">
                            + Добавить парковку
                        </div>
                </div>
                <div class="create-block">
                    <div class="block-title grey">
                        Блок 3
                    </div>
                    <div class="create-block-btn">
                        Создать
                    </div>
                </div>
          </div>
          <div class="parking-wrap dn">
              <div class="create-parking-modal dn">
                  <div class="image"><img src="@/assets/images/car.svg" alt=""></div>
                  <h3 class="title">
                      Создать парковку
                  </h3>
                  <div class="flex-row jc-sb">
                      <div class="option">
                          В каждом блоке
                      </div>
                      <div class="option">
                          Отдельная
                      </div>
                  </div>
                  <button class="pick-btn">Выбрать</button>
              </div>
              <div class="create-parking-modal dn">
                  <div class="image"><img src="@/assets/images/car.svg" alt=""></div>
                  <h3 class="title">
                      Создать парковку
                  </h3>
                  <div class="block-count">
                        <div class="counter">
                            <div @click="counter--" class="decrease">
                            -
                            </div>
                            <div class="num">
                            {{ counter }}
                            </div>
                            <div @click="counter++" class="increase">
                            +
                            </div>
                        </div>
                        <p>Кол-во этажей в блоке</p>
                    </div>
                  <div class="btn-row">
                      <button class="back-btn">Назад</button>
                      <button class="next-btn">Далее</button>
                  </div>
              </div>
          </div>
          
      </div>
      <!-- ne zhilie pomesheniya -->
      <div class="white-bg" v-if="activetab === '3'">
          <div class="dn">
              <div class="block">
                <div class="block-title">
                    Блок 1
                </div>
                <div class="add-entrance" @click="toggleCreateEntrance">
                    + Добавить организацию
                </div>
          </div>
          <div class="block">
                <div class="block-title">
                    Блок 2
                </div>
                <div class="add-entrance" @click="toggleCreateEntrance">
                    + Добавить организацию
                </div>
          </div>
          <div class="create-block">
              <div class="block-title grey">
                  Блок 3
              </div>
              <div class="create-block-btn">
                  Создать
              </div>
          </div>
          </div>
          <div class="create-org-wrap dn">
              <div class="add-org dn">
                  <img src="@/assets/images/money-smile.svg" alt="">
                  <div class="title">
                      Добавить <br>
                        организацию
                  </div>
                  <form>
                      <input type="text" placeholder="Название организации">
                      <input type="text" placeholder="Деятельность">
                      <input type="text" placeholder="Этаж">

                      <div class="btn-row">
                        <button class="back-btn">Назад</button>
                        <button class="next-btn">Далее</button>
                      </div>                      
                  </form>
              </div>
              <div class="add-org dn">                  
                  <div class="title">
                      Добавить <br>
                        организацию
                  </div>
                  <form>
                      <input type="text" placeholder="Имя">
                      <input type="text" placeholder="Фамилия">
                      <input type="text" placeholder="Телефон">
                      <input type="text" placeholder="Номер лицевого счета">

                      <div class="btn-row">
                        <button class="back-btn">Назад</button>
                        <button class="next-btn">Далее</button>
                      </div>                      
                  </form>
              </div>               
          </div>
          <div class="block-title">
              Блок 1
          </div>
          <div class="org-row">
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div> 
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
          </div>
          <div class="add-org-btn">
              + Добавить организацию
          </div>
          <div class="block-title">
              Блок 1
          </div>
          <div class="org-row">
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div> 
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
                <div class="user-item user-info">                    
                    <div class="text">
                        <div class="name">Магазин “Снеговик”</div>
                        <div class="user-status">
                            Продуктовый магазин
                        </div>
                    </div>
                    <div class="debt">
                        <div class="text">Долг</div>
                        <div class="sum">
                            20.000
                        </div>
                    </div>          
                </div>
          </div>
          <div class="add-org-btn">
              + Добавить организацию
          </div> 
      </div>
      <div v-if="showCreateEntrance">
          <CreateEntrance @close="toggleCreateEntrance">
          </CreateEntrance>
      </div>
      <div v-if="showDeleteEntrance">
          <DeleteEntrance @close="toggleDeleteEntrance">
          </DeleteEntrance>
      </div>
      <div v-if="showAddResident">
          <AddResident @close="toggleAddResident">
          </AddResident>
      </div>
      <div v-if="showAddParkingOwner">
          <AddParkingOwner @close="toggleAddParkingOwner">
          </AddParkingOwner>
      </div>
      
      <div v-show="showResident">
          <div class="chess-side-modal">
            <div class="side-modal-wrap">                
                <div class="close" @click="toggleShowResident">
                    &#10005;
                </div>
                <h2 class="title">Квартира №134</h2>
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
                </div>
                <div class="resident-info">
                    <div class="avatar">
                        <img src="@/assets/images/avatar.svg" alt="">
                    </div>
                    <div class="text">
                        <div class="name">
                            Медет Сисенгалиев <img src="@/assets/images/star.svg" alt="">
                        </div>
                        <div class="account-num">
                            Лиц. счет: 234255472
                        </div>
                    </div>
                </div>
                <div class="resident-contacts">
                    <div class="head-info" @click="toggleShowResidentContacts">
                        Контактные данные <img src="@/assets/images/grey-arrow.svg" alt="">
                    </div>
                    <div v-show="showResidentContacts" class="body-info">
                        <div class="executor-description">
                            <div class="item">
                                <div class="left">
                                    E-mail
                                </div>
                                <div class="right">
                                    kovrogangster@mail.ru
                                </div>
                            </div>
                            <div class="item">
                                <div class="left">
                                    Телефон
                                </div>
                                <div class="right">
                                    +7 707 111-22-33
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="borders">
                    <div class="debt-sum">
                    <h6>Сумма долга</h6>
                    <div class="sum">
                        380.000 Т
                    </div>
                    </div>
                    <div class="history">
                        <h6>История платежей</h6>
                        <div class="item">
                            <div class="left">
                                Август, 2020
                            </div>
                            <div class="right pos">
                                80.000 
                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.81818L4.125 8L11 1" stroke="#64DCA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>                        
                        </div>
                        <div class="item">
                            <div class="left">
                            Июль, 2020
                            </div>
                            <div class="right neg">
                                -10.000
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                <path d="M1 1.00012L11.0001 11.0002" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                                <path d="M1 11L11.0001 0.999948" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                                </g>
                                </svg>
                            </div>                        
                        </div>
                        <div class="item">
                            <div class="left">
                                Июль, 2020
                            </div>
                            <div class="right neg">
                            -10.000
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                <path d="M1 1.00012L11.0001 11.0002" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                                <path d="M1 11L11.0001 0.999948" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                                </g>
                                </svg>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div class="notes-about-resident">
                    <textarea placeholder="Заметки по квартире и жителям"></textarea>
                </div>
                <div class="resident-access">
                    <h6>Доступы</h6>
                    <div class="resident-info">
                        <div class="avatar">
                        <img src="@/assets/images/avatar.svg" alt="">
                        </div>
                        <div class="text">
                            <div class="name">
                                Айгул Саматова
                            </div>
                            <div class="account-num">
                                Жена
                            </div>
                        </div>
                        <div class="delete">
                            <span></span>
                        </div>
                    </div>
                    <div class="resident-info">
                        <div class="avatar">
                        <img src="@/assets/images/avatar.svg" alt="">
                        </div>
                        <div class="text">
                            <div class="name">
                                Мелис Алибеков
                            </div>
                            <div class="account-num">
                                квартирант
                            </div>
                        </div>
                    </div>
                    <div class="resident-info">
                        <div class="avatar">
                        <img src="@/assets/images/avatar.svg" alt="">
                        </div>
                        <div class="text">
                            <div class="name">
                               Самал Смакова
                            </div>
                            <div class="account-num">
                                дочь
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
          </div>
      </div>
      <div v-show="showParkingOwner">
          <div class="chess-side-modal">
            <div class="side-modal-wrap">                
                <div class="close" @click="toggleShowParkingOwner">
                    &#10005;
                </div>
                <h2 class="title">Персональные
данные</h2>
                <div class="executor-info">
                    <div class="avatar">
                        <img src="@/assets/images/parking-avatar.svg" alt="">
                    </div>
                    <div class="text">
                        <div class="name">
                            Земский Андрей
                        </div>
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
                                <div class="num"> 12 </div>
                            </div>
                            <div class="address">
                                <div class="type"> Квартира </div>
                                <div class="num"> 124 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="executor-description">
                    <div class="item">
                        <div class="left">
                            Номер автомобиля
                        </div>
                        <div class="right">
                            02ALA215
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Марка машины
                        </div>
                        <div class="right">
                            Toyota Land Cruiser
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Телефон
                        </div>
                        <div class="right">
                            +7 707 111-22-33
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Номер договора
                        </div>
                        <div class="right">
                            235235457
                        </div>
                    </div>
                </div>
                <div class="btn-row">
                    <div class="edit-btn">
                    Редактировать
                    </div>
                    <div class="delete-btn">
                    Удалить
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div v-show="showNonResidentialInfo">
          <div class="chess-side-modal">
            <div class="side-modal-wrap">                
                <div class="close" @click="toggleShowParkingOwner">
                    &#10005;
                </div>
                <h2 class="title">Персональные данные</h2>
                <div class="executor-info">                    
                    <div class="text">
                        <div class="name">
                            Магазин “Снеговик”
                        </div>
                        <div class="org-status">
                            Продуктовый магазин
                        </div>
                    </div>
                </div>
                <div class="executor-description">
                    <div class="item">
                        <div class="left">
                            Владелец
                        </div>
                        <div class="right">
                            Земский Андрей
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                           Телефон
                        </div>
                        <div class="right">
                            +7 707 111-22-33
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Номер лицевого счета
                        </div>
                        <div class="right">
                           452234256785
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Местоположение
                        </div>
                        <div class="right">
                            Блок 1, этаж 3
                        </div>
                    </div>
                </div>
                <div class="btn-row">
                    <div class="edit-btn">
                    Редактировать
                    </div>
                    <div class="delete-btn">
                    Удалить
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import CreateEntrance from '@/components/modals/CreateEntrance.vue'
import DeleteEntrance from '@/components/modals/DeleteEntrance.vue'
import AddResident from '@/components/modals/AddResident.vue'
import AddParkingOwner from '@/components/modals/AddParkingOwner.vue'
export default {
    components: {
        CreateEntrance, AddResident, DeleteEntrance, AddParkingOwner
    },
    data() {
        return {
            showCreateEntrance: false,
            showAddResident: false,
            showResident: false,
            showResidentContacts: false,
            showEditEntrance: false,
            showDeleteEntrance: false,
            showParkingOwner: false,
            showAddParkingOwner: false,
            showNonResidentialInfo: true,
            counter: 0,
            activetab: '1'
        }
    },
    methods: {
        toggleCreateEntrance() {
            this.showCreateEntrance = !this.showCreateEntrance
        },
        toggleAddResident() {
            this.showAddResident = !this.showAddResident
        },
        toggleShowResidentContacts() {
            this.showResidentContacts = !this.showResidentContacts
        },
        toggleShowResident() {
            this.showResident = !this.showResident
        },
        toggleEditEntrance() {
            this.showEditEntrance = !this.showEditEntrance
        },
        toggleDeleteEntrance() {            
            this.showDeleteEntrance = !this.showDeleteEntrance
            this.showEditEntrance = !this.showEditEntrance
        },
        toggleShowParkingOwner() {
            this.showParkingOwner = !this.showParkingOwner
        },
        toggleAddParkingOwner() {
            this.showAddParkingOwner = !this.showAddParkingOwner
        },
        toggleShowNonResidentialInfo() {
            this.showNonResidentialInfo = !this.showNonResidentialInfo
        }
    }
}
</script>

<style>

</style>