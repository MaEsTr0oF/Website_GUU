let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Ensure index is within the bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const sliderWidth = document.querySelector('.slider').clientWidth;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

window.addEventListener('resize', () => showSlide(currentIndex));


const menuData = {      
  salads: [
  {      img: './img/dishes/salat1.svg',
    text: 'Состав: грудка куриная вареная, яйца, листья салата, помидоры "Черри", сухарики, соус "Цезарь"',      subtext: 'Цезарь с курицей - 130гр/150р',
  },    {
    img: './img/dishes/salat2.svg',      text: 'Состав: картофель, морковь, яйца, колбаса варёная, огурцы маринованные, горошек зелёный консервированный, майонез',
    subtext: 'Салат «Оливье» - 120гр/90р',    },
  {      img: './img/dishes/salat3.svg',
    text: 'Состав: свекла, картофель, морковь, огурец соленый, горошек зеленый консервированный, лук репчатый',      subtext: 'Винегрет - 100гр/80р',
  },    {
    img: './img/dishes/salat4.svg',      text: 'Состав: огурцы, помидоры, лук красный, масло оливковое',
    subtext: 'Салат из свежих овощей - 150гр/100р',    }
],  soups: [
  {      img: './img/dishes/soup.png',
    text: 'Состав: куриный бульон, мясо курицы, вермишель, лук, морковь, картофель, петрушка',      subtext: 'Суп Вермишелевый - 250гр/120р',
  },{      img: './img/dishes/soup1.png',
  text: 'Состав: бульон говяжий, мясо говядина, капуста, свёкла, картофель, морковь, репчатый лук',      subtext: 'Суп Борщ - 300гр/140р',
}    ],
  main_dishes: [
    {      img: './img/dishes/ragu.png',
    text: 'Состав: картофель, морковь, лук, перец',      subtext: 'Овощное рагу - 300гр/150р',
  },
    {
      img: './img/dishes/with_pure2.png',      text: 'Состав: филе куриное, пюре картофельное',
      subtext: 'Куриное филе с  пюре - 350гр/170р',    },
      {      img: './img/dishes/gulash.png',
    text: 'Состав: гуляш говяжий, гречка, морковь, лук',      subtext: 'Говяжий гуляш с гречкой - 300гр/150р',
  }, 
  {      img: './img/dishes/kapusta.png',
    text: 'Состав: капуста, лук, морковь, сосиски',      subtext: 'Тушеная капуста с сосисками - 280гр/120р',
  }, {
    img: './img/dishes/ris.png',      text: 'Состав: фарш куриный, томатная паста, лук, рис',
    subtext: 'Фрикадельки  с рисом - 240гр/160р',    },{      img: './img/dishes/pasta.png',
    text: 'Состав: паста, филе куриное, сливки, сыр, грибы шампиньоны',      subtext: 'Паста с курицей и грибами - 220гр/180р',
  },{
    img: './img/dishes/fish.png',      text: 'Состав: треска, лимон, прованские травы',
    subtext: 'Рыба запеченная  - 150гр/120р',    },{
      img: './img/dishes/with_pure.png',      text: 'Состав: шницель свиной, картофель, лук зеленый, петрушка',
      subtext: 'Шницель с картофелем - 300гр/200р',    },{      img: './img/dishes/pizza.png',
      text: 'Состав: тесто, соус, сыр, колбаса)',      subtext: 'Пицца в ассортименте - 100гр/100р',
    } 
  ],
  bakery: [
    {
      img: './img/dishes/ekler.png',
      text: 'Состав: тесто, крем заварной',
      subtext: 'Эклер с заварным кремом - 60гр/120р',
    },
    {
      img: './img/dishes/zapek.png',
      text: 'Состав: творог, яйца, мука',
      subtext: 'Творожные запеканки - 90гр/90р',
    },
    {
      img: './img/dishes/tort.png',
      text: 'Состав: тесто, крем заварной',
      subtext: 'Торт Наполеон - 120гр/150р',
    },{
    img: './img/dishes/pirmyso.png',     
     text: 'Состав: тесто, фарш (свинина/говядина; лук)',
    subtext: 'Пирожки с мясом - 90гр/60р',    },
  ],
  drinks: [
    {
      img: './img/dishes/kumpot.png',
      text: 'Состав: яблоко, груша, изюм, курага',
      subtext: 'Компот из сухофруктов - 250мл/50р',
    },
    {
      img: './img/dishes/tea.png',
      text: '',
      subtext: 'Чай - 250мл/60р',
    },
    {
      img: './img/dishes/cofe.png',
      text: '',
      subtext: 'Кофе - 250мл/100р',
    }
  ]

};
function showCategory(category) {    
  const content = document.getElementById('menu-content');
  const title = document.getElementById('menu-category-title');

  content.innerHTML = '';
  // Добавление нового содержимого    
  menuData[category].forEach(item => {
    const itemDiv = document.createElement('div');        
    itemDiv.className = 'main_content';
    const img = document.createElement('img');
    img.src = item.img;        
    itemDiv.appendChild(img);
    const hoverText = document.createElement('div');
    hoverText.className = 'hover-text';        
    hoverText.textContent = item.text;
    itemDiv.appendChild(hoverText);
    const subtext = document.createElement('div');        
    subtext.className = 'main_content_subtext';
    subtext.textContent = item.subtext;        
    itemDiv.appendChild(subtext);
    content.appendChild(itemDiv);
  });
}
function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);}

showCategory('salads');
