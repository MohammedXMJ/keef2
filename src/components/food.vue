<script setup>
import ProductCard from './ProductCard.vue';
import { RouterLink } from 'vue-router';


</script>
<template>
<section class="all-section">
  <div class="tital-with-home"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="200"
        :duration="1000"
        >
        <div class="tital">
          <p class="main-text">اطلب وجبتك المفضلة</p>
          <p class="main-text-color">مع كـيـف</p>
        </div>
        <router-link class="back" to="menu"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="200"
        :duration="1000"
  ></router-link>
  </div>
  <section class="body-section">
      <div class="line-table">
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="600"
          :duration="1200"
          >
          <div class="img burger-met"></div>
          <ProductCard 
          name="بركر لحم" 
          price="4,000 IQD" 
          />
        </div>
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="800"
          :duration="1400"
          >
            <div class="img burger-chess"></div>
            <ProductCard 
            name="بركر لحم بالجبن" 
            price="4,500 IQD" 
            />
        </div>
      </div>
      <div class="line-table">
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1000"
          :duration="1600"
          >
          <div class="img burger-mashrom"></div>
          <ProductCard 
          name="بركر لحم بالفطر" 
          price="4,500 IQD" 
          />
        </div>
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1200"
          :duration="1800"
          >
            <div class="img burger-totla"></div>
            <ProductCard 
            name="بركر لحم بالفطر والجبن" 
            price="5,000 IQD" 
            />
        </div>
      </div>
      <div class="line-table">
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1400"
          :duration="2000"
          >
          <div class="img burger-chicken"></div>
          <ProductCard 
          name="بركر دجاج" 
          price="3,500 IQD" 
          />
        </div>
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1600"
          :duration="2200"
          >
            <div class="img fajita"></div>
            <ProductCard 
            name="فاهيتا" 
            price="4,000 IQD" 
            />
        </div>
      </div>
      <div class="line-table">
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1800"
          :duration="2400"
          >
          <div class="img zinger"></div>
          <ProductCard 
          name="زنكر" 
          price="4,000 IQD" 
          />
        </div>
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="2000"
          :duration="2600"
          >
            <div class="img skalop"></div>
            <ProductCard 
            name="سكالوب" 
            price="4,000 IQD" 
            />
        </div>
      </div>
      <div class="line-table">
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="2200"
          :duration="2800"
          >
          <div class="img hot-dog"></div>
          <ProductCard 
          name="هوت دوغ" 
          price="3,000 IQD" 
          />
        </div>
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="2400"
          :duration="3000"
          >
            <div class="img finger"></div>
            <ProductCard 
            name="فنكر قدح" 
            price="1,000 IQD" 
            />
        </div>
      </div>
      <div class="line-table">
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="2600"
          :duration="3000"
          >
          <div class="img finger-big"></div>
          <ProductCard 
          name="فنكر صحن" 
          price="2,000 IQD" 
          />
        </div>
      </div>
  </section>
</section>
</template>

<style>
.back{
  background: url('../assets/home.png') no-repeat;
  background-size: contain;
  height: 5.2vh;
  width: 6.2vh;
  margin: 2vh 0vh 0vh 0vh;
}
.tital-with-home{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin: 0vh 0vh 0vh 3vh;
}
.all-section{
  background-color: #f4f1ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding: 0vh 0vh 5vh 0vh;
}
.tital{
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 6vh 4vh 0vh 0vh;
}
.main-text{
    color: #5d5b5b;
    font-size: 2.2vh;
    font-family: "Noto Kufi Arabic", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    text-decoration: none;
}
.main-text-color{
    color: #c43e2e;
    font-family: "Noto Kufi Arabic", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-size: 2.5vh;
    font-style: normal;
    text-decoration: none;
}
.line-table{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vh;
  margin: 4vh 0vh 0vh 0vh ;
}
.table{
  padding: 1.5vh;
  border-radius: 2vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  border: 2px solid #acacac;
  gap: 1vh;
}
.img{
  height: 15vh;
  width: 15vh;
  border-radius: 100%;
}
.burger-met{
  background: url('../assets/food/Beef-Burger.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.burger-chess{
  background: url('../assets/food/Chicken-Burger-two.jpg') no-repeat;
  background-size: cover;
}
.burger-mashrom{
  background: url('../assets/food/Chicken-Burger-three.jpg') no-repeat;
  background-size: cover;
  background-position: right;
}
.burger-totla{
  background: url('../assets/food/Chicken-Burger-two.jpg') no-repeat;
  background-size: cover;
}
.burger-chicken{
  background: url('../assets/food/Chicken-Burger-two.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.fajita{
  background: url('../assets/food/Fajita.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.zinger{
  background: url('../assets/food/Zenker.jpg') no-repeat;
  background-size: cover;
}
.skalop{
  background: url('../assets/food/scalope.jpg') no-repeat;
  background-size: cover;
  /* background-position: right; */
}
.hot-dog{
  background: url('../assets/food/hot-dog.jpg') no-repeat;
  background-size: cover;
  background-position: right;
}
.finger{
  background: url('../assets/food/French-fries-smaill.jpg') no-repeat;
  background-size: cover;
}
.finger-big{
  background: url('../assets/food/French-fries-smaill.jpg') no-repeat;
  background-size: cover;
}
</style>


