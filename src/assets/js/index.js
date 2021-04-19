import Vue from 'vue/dist/vue'; 
 
let module = (() => {
    var vm = new Vue({
        el: '#calculator',  
        created(){             
            for (const i of this.response) {
                this.clonResponse.push(Object.assign({}, i));
            }             
        },    
        data: {
            indexResponse: 0,
            sownArea: 20,             
            response: [
                {
                    id: 1,
                    name: 'Ячмень ≈ 1000 грн / т',                     
                    yield: 20,
                    cost: 900
                },
                {
                    id: 2,
                    name: 'Пшеница ≈ 2000 грн / т',                    
                    yield: 40,
                    cost: 1900
                },
                {
                    id: 3,
                    name: 'Куруза ≈ 3000 грн / т',                     
                    yield: 60,
                    cost:  2900
                },
                {
                    id: 4,
                    name: 'Овес ≈ 4000 грн / т',                     
                    yield: 80,
                    cost: 3900
                }
            ],
            clonResponse: [],             
            yield: {
                error: '',
                inputErrClass: ''
            },
            cost: {
                error: '',
                inputErrClass: ''
            },
            area: {
                error: '',
                inputErrClass: ''
            }            
        },
        computed: {
            res(){                 
                if (this.yield.error == '' && this.cost.error == '' && this.area.error == '') {
                    let res = Number(this.response[this.indexResponse].cost) + Number(this.response[this.indexResponse].yield) + Number(this.sownArea);
                    return res;
                }                 
            },             
        },         
        methods: {
            input(e){
                if (e.target.getAttribute('name') == 'yield') {                                       
                    if ((e.target.value).trim() >= Number(this.clonResponse[this.indexResponse].yield) - 10 && (e.target.value).trim() <= Number(this.clonResponse[this.indexResponse].yield) + 10  ) {
                        this.yield.error = "";
                        this.yield.inputErrClass = '';
                    } else {
                        this.yield.error = "Допустимое изменение урожайности + - 10 !!!!";
                        this.yield.inputErrClass = 'form_input--err_js';
                    }                     
                }
                if (e.target.getAttribute('name') == 'cost') {                                   
                    if ((e.target.value).trim() >= Number(this.clonResponse[this.indexResponse].cost) - 5 && (e.target.value).trim() <= Number(this.clonResponse[this.indexResponse].cost) + 5) {
                        this.cost.error = "";
                        this.cost.inputErrClass = '';
                    } else {
                        this.cost.error = "Предел измененения стоимости + - 5 !!!!";
                        this.cost.inputErrClass = 'form_input--err_js';
                    }                     
                }
                if (e.target.getAttribute('name') == 'sownArea') {
                    if ((e.target.value).trim() >= 0.5 && (e.target.value).trim() <= 5000) {
                        this.area.error = "";
                        this.area.inputErrClass = '';
                    } else {
                        this.area.error = "От 0,5 га до 5000 га !!!!";
                        this.area.inputErrClass = 'form_input--err_js';
                    }                     
                }
                
            },
            change(){
                this.response[this.indexResponse].yield =  this.clonResponse[this.indexResponse].yield;
                this.yield.error = "";
                this.yield.inputErrClass = '';

                this.response[this.indexResponse].cost = this.clonResponse[this.indexResponse].cost;
                this.cost.error = "";
                this.cost.inputErrClass = '';

                // this.sownArea = 20;
                this.area.error = "";
                this.area.inputErrClass = '';
            }
        }
    });
     
    
    let iconMenu = document.querySelector('.menu_icon img');
    let topMenu = document.querySelector('.header-navbar_top_menu');
    let menu = document.querySelector('.header_nav');
    let scrim = document.querySelector('.scrim');
    let topMenuLink = document.querySelectorAll('.header-navbar_top-link');
     
    let advantagesImg = document.querySelector('.product_advantages_img');
    let calculator = document.querySelector('.calculator'); 
    let homeCalculator = document.querySelector('.product_right');
    let ctaTitle = document.querySelector('.product_cta_title'); 
    let homeCta = document.querySelector('.product_cta');
    let advantagesContent = document.querySelector('.product_advantages_content');
    let ctaContent = document.querySelector('.product_cta_content');

    let productAdvantage3 = document.querySelector('.product_advantages_content .product_advantage:nth-child(3)');
     
    iconMenu.addEventListener('click', (e) => {
        menu.classList.add('header_nav--active_js');
        scrim.classList.add('scrim--active_js');
        document.body.style.overflow = 'hidden';
    });
    scrim.addEventListener('click', (e) => {
        menu.classList.remove('header_nav--active_js');
        scrim.classList.remove('scrim--active_js');
        document.body.style.overflow = 'visible';
    });
    menu.addEventListener('click', (e) => {
        menu.classList.remove('header_nav--active_js');
        scrim.classList.remove('scrim--active_js');
        document.body.style.overflow = 'visible';
    })
    // адаптив  
    if (window.matchMedia('(max-width: 980px)').matches) {
        topMenuLink.forEach((el) => { menu.append(el) });

        advantagesImg.append(calculator);
        advantagesContent.append(ctaTitle);
        advantagesContent.append(ctaContent);
    }else{         
        topMenuLink.forEach((el, i, arr) => { topMenu.prepend(arr[(arr.length -1)-i]) });

        homeCalculator.append(calculator);
        homeCta.append(ctaTitle);
        homeCta.append(ctaContent);
    }

    if (window.matchMedia('(max-width: 680px)').matches) {
        productAdvantage3.after(calculator);
    }    

    window.addEventListener('resize', ()=>{
        if (window.matchMedia('(max-width: 980px)').matches) {
            topMenuLink.forEach((el) => { menu.append(el) });

            advantagesImg.append(calculator);
            advantagesContent.append(ctaTitle);
            advantagesContent.append(ctaContent);
        }else{
            topMenuLink.forEach((el, i, arr) => { topMenu.prepend(arr[(arr.length - 1) - i]) });

            homeCalculator.append(calculator);
            homeCta.append(ctaTitle);
            homeCta.append(ctaContent);
        }

        if (window.matchMedia('(max-width: 680px)').matches) {
            productAdvantage3.after(calculator);
        }          
    })     
        
})();

export default module;