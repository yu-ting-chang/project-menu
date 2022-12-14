const tea = document.querySelector("#tea")
const mySwiper = document.querySelector(".mySwiper")
const recommend = document.querySelector("#recommend")
const menu = document.querySelector(".menu-frame")
const fruitTea = document.querySelector("#fruit")
const mellow = document.querySelector("#mellow")
const milkTea = document.querySelector("#milk-tea")
const totemUp = document.querySelector(".totem-up")
const totemBottom = document.querySelector(".totem-bottom")
const mobileSwiper = document.querySelector(".tea-type-swiper")


recommend.addEventListener('click',function(){
    mySwiper.style.display = ""
    mobileSwiper.style.display = ""
    totemBottom.style.display = ""
    totemUp.style.display = ""
    menu.style.display = "none"
    // mySwiper.style.display = "flex"
    // mobileSwiper.style.display = "flex"
})

function menuArea(){
    totemBottom.style.display = "none"
    // swiperTotem.style.display = "none"
    totemUp.style.display = "none"
    mySwiper.style.display = "none"
    mobileSwiper.style.display = "none"
    menu.style.display = "flex"

}

tea.addEventListener('click',function(){
    menuArea();
    menu.innerHTML = `
    <img src="./img/mobilemenu_tea_title.png" alt="" id="mobile-menu-title">
<picture class="totem-up">
    <source media="(min-width: 1400px)" srcset="./img/totem_up.png">
    <source media="(min-width: 1084px)" srcset="./img/menu_totem_up_960.png">
    <source media="(min-width: 860px)" srcset="./img/menu_totem_up_960.png">
    <source media="(min-width: 540px)" srcset="./img/menu_totem_up_768.png">
    <img alt="" src="./img/menu_totem_up_768.png">
</picture>
<picture class="totem-bottom">
    <source media="(min-width: 1400px)" srcset="./img/totem_bottom.png">
    <source media="(min-width: 1084px)" srcset="./img/menu_totem_bottom_960.png">
    <source media="(min-width: 860px)" srcset="./img/menu_totem_bottom_960.png">
    <source media="(min-width: 540px)" srcset="./img/menu_totem_bottom_768.png">
    <img alt="" src="./img/menu_totem_bottom_768.png">
</picture>

    <div class="beverage-menu">
    <img src="./img/tea.png" alt="" class="beverage-photo">
    <img src="./img/menu-full-totem.png" alt="" class="menu-mobile-totem">
    <div class="menu-highlight-block"></div>
    <picture class="menu-block-content">
        <source media="(min-width: 1400px)" srcset="./img/menu_board_1903.png">
        <source media="(min-width: 1084px)" srcset="./img/menu_board_1400.png">
        <source media="(min-width: 860px)" srcset="./img/menu_board_960.png">
        <source media="(min-width: 540px)" srcset="./img/menu_board_960.png">
        <img class="" alt="" src="./img/menu_board_360.png">
    </picture>
    
   
        <div class="menu-block">
        <div class="menu-block-title">
            <h1>??????</h1>
            <div class="title-slash"></div>
        </div>
                <p>??????????????? $30</p>
                <p>???????????? $30</p>
                <p>???????????? $30</p>
                <p>????????????1600?????????????????????</p>
                <p>(??????????????????????????????)</p>
                <p>?????????/???/?????? $30</p>
        </div>
        
</div>`
})

fruitTea.addEventListener('click',function(){
    menuArea();
    menu.innerHTML = `
    <img src="./img/mobilemenu_fruit_title.png" alt="" id="mobile-menu-title">
    <picture class="totem-up">
    <source media="(min-width: 1400px)" srcset="./img/totem_up.png">
    <source media="(min-width: 1084px)" srcset="./img/menu_totem_up_960.png">
    <source media="(min-width: 860px)" srcset="./img/menu_totem_up_960.png">
    <source media="(min-width: 540px)" srcset="./img/menu_totem_up_768.png">
    <img class="" alt="" src="./img/menu_totem_up_768.png">
</picture>
<picture class="totem-bottom">
    <source media="(min-width: 1400px)" srcset="./img/totem_bottom.png">
    <source media="(min-width: 1084px)" srcset="./img/menu_totem_bottom_960.png">
    <source media="(min-width: 860px)" srcset="./img/menu_totem_bottom_960.png">
    <source media="(min-width: 540px)" srcset="./img/menu_totem_bottom_768.png">
    <img class="" alt="" src="./img/menu_totem_bottom_768.png">
</picture>
  
<div class="beverage-menu">
    <img src="./img/guava_green_tea.png" alt="" class="beverage-photo">
    <img src="./img/menu-full-totem.png" alt="" class="menu-mobile-totem">
    <div class="menu-highlight-block"></div>
    <picture class="menu-block-content">
        <source media="(min-width: 1400px)" srcset="./img/menu_board_1903.png">
        <source media="(min-width: 1084px)" srcset="./img/menu_board_1400.png">
        <source media="(min-width: 860px)" srcset="./img/menu_board_960.png">
        <source media="(min-width: 540px)" srcset="./img/menu_board_960.png">
        <img class="" alt="" src="./img/menu_board_360.png">
    </picture>
        <div class="menu-block">
        <div class="menu-block-title" id="menu-block-fruit-title">
            <h1>??????</h1>
            <div class="title-slash"></div>
        </div>
            <div class="menu-block-text">
                <div class="menu-block-text-left">
                    <p>?????????/?????? $40</p>
                    <p>?????????/???/?????? $35</p>
                    <p>?????????/???/?????? $45</p>
                    <p>???????????? $45</p>
                    <p>???????????? $50</p>
                    <p>???????????? $50</p>
                </div>
                <div class="menu-block-text-right">
                    <p>???????????? $55</p>
                    <p>???????????? $50</p>
                    <p>???????????? $45</p>
                    <p>?????????/?????? $50</p>
                    <p>??????????????? $50</p>
                </div>
            </div>
           
        </div>
</div>`
})


mellow.addEventListener('click',function(){
    menuArea();
    menu.innerHTML = `
    <img src="./img/mobilemenu_mellow_title.png" alt="" id="mobile-menu-title">
    <picture class="totem-up">
    <source media="(min-width: 1400px)" srcset="./img/totem_up.png">
    <source media="(min-width: 1084px)" srcset="./img/menu_totem_up_960.png">
    <source media="(min-width: 860px)" srcset="./img/menu_totem_up_960.png">
    <source media="(min-width: 540px)" srcset="./img/menu_totem_up_768.png">
    <img class="" alt="" src="./img/menu_totem_up_768.png">
</picture>
<picture class="totem-bottom">
    <source media="(min-width: 1400px)" srcset="./img/totem_bottom.png">
    <source media="(min-width: 1084px)" srcset="./img/menu_totem_bottom_960.png">
    <source media="(min-width: 860px)" srcset="./img/menu_totem_bottom_960.png">
    <source media="(min-width: 540px)" srcset="./img/menu_totem_bottom_768.png">
    <img class="" alt="" src="./img/menu_totem_bottom_768.png">
</picture>
    <div class="beverage-menu">
        <img src="./img/wax_gourd.png" alt="" class="beverage-photo">
        <img src="./img/menu-full-totem.png" alt="" class="menu-mobile-totem">
        <div class="menu-highlight-block"></div>
        <picture class="menu-block-content">
        <source media="(min-width: 1400px)" srcset="./img/menu_board_1903.png">
        <source media="(min-width: 1084px)" srcset="./img/menu_board_1400.png">
        <source media="(min-width: 860px)" srcset="./img/menu_board_960.png">
        <source media="(min-width: 540px)" srcset="./img/menu_board_960.png">
        <img class="" alt="" src="./img/menu_board_360.png">
    </picture>
        <div class="menu-block">
        <div class="menu-block-title" id="menu-block-mellow-title">
            <h1>??????</h1>
            <div class="title-slash"></div>
        </div>
                <div class="menu-block-text">
                    <div class="menu-block-text-left">
                        <p>???????????? $40</p>
                        <p>???????????? $35</p>
                        <p>???????????? $45</p>
                        <p>????????? $45</p>
                        <p>???????????? $50</p>
                        <p>???????????? $50</p>
                        <p>???????????? $55</p>
                        <p>??????????????? $50</p>
                        <p>???????????? $45</p>
                    </div>
                    <div class="menu-block-text-right">
                    <p>???????????? $50</p>
                    <p>???????????? $50</p>
                    <p>???????????? $55</p>
                    <p>???????????? $50</p>
                    <p>???????????? $55</p>
                    <p>???????????? $50</p>
                    <p>?????????????????? $55</p>
                    <p>??????????????? $55</p>
                    </div>
                </div>
        </div>
    </div>`
})

milkTea.addEventListener('click',function(){
    menuArea();
    menu.innerHTML = `
    <img src="./img/mobilemenu_milktea_title.png" alt="" id="mobile-menu-title">
    <picture class="totem-up">
    <source media="(min-width: 1400px)" srcset="./img/totem_up.png">
    <source media="(min-width: 1084px)" srcset="./img/menu_totem_up_960.png">
    <source media="(min-width: 860px)" srcset="./img/menu_totem_up_960.png">
    <source media="(min-width: 540px)" srcset="./img/menu_totem_up_768.png">
    <img class="" alt="" src="./img/menu_totem_up_768.png">
</picture>
<picture class="totem-bottom">
    <source media="(min-width: 1400px)" srcset="./img/totem_bottom.png">
    <source media="(min-width: 1084px)" srcset="./img/menu_totem_bottom_960.png">
    <source media="(min-width: 860px)" srcset="./img/menu_totem_bottom_960.png">
    <source media="(min-width: 540px)" srcset="./img/menu_totem_bottom_768.png">
    <img class="" alt="" src="./img/menu_totem_bottom_768.png">
</picture>
    <div class="beverage-menu">
    <img src="./img/black_tea_latte.png" alt="" class="beverage-photo">
    <img src="./img/menu-full-totem.png" alt="" class="menu-mobile-totem">
    <div class="menu-highlight-block"></div>
    <picture class="menu-block-content">
        <source media="(min-width: 1400px)" srcset="./img/menu_board_1903.png">
        <source media="(min-width: 1084px)" srcset="./img/menu_board_1400.png">
        <source media="(min-width: 860px)" srcset="./img/menu_board_960.png">
        <source media="(min-width: 540px)" srcset="./img/menu_board_960.png">
        <img class="" alt="" src="./img/menu_board_360.png">
    </picture>
        <div class="menu-block">
        <div class="menu-block-title" id="menu-block-milktea-title">
        <h1>??????</h1>
        <div class="title-slash"></div>
    </div>
            <div class="menu-block-text">
            <div class="menu-block-text-left">
                <p>??????????????? $40</p>
                <p>??????????????? $35</p>
                <p>???????????? $45</p>
                <p>??????????????? $45</p>
                <p>?????????/????????? $50</p>
            </div>
            <div class="menu-block-text-right">
                <p>??????????????? $50</p>
                <p>??????????????? $55</p>
                <p>???????????? $50</p>
                <p>?????????/???/??? $50</p>
                <p>?????????/????????? $60</p>
            </div>
        </div>
</div>`
})





