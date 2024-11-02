<script setup>
import ProductCard from './ProductCard.vue';
import { RouterLink } from 'vue-router';


</script>
<template>
<section class="all-sec">
  <div class="tital-with-home"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="200"
        :duration="1000"
        >
        <div class="tital">
          <p class="main-text">العصائر الطبيعية</p>
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
          <div class="img portgal"></div>
          <ProductCard 
          name="برتقال" 
          price="3,000 IQD" 
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
            <div class="img limon-nani"></div>
            <ProductCard 
            name="ليمون ونعناع" 
            price="3,000 IQD" 
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
          <div class="img muz"></div>
          <ProductCard 
          name="موز" 
          price="3,000 IQD" 
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
            <div class="img limon"></div>
            <ProductCard 
            name="ليمون" 
            price="3,000 IQD" 
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
          <div class="img milon"></div>
          <ProductCard 
          name="بطيخ" 
          price="3,000 IQD" 
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
            <div class="img muz-portgal"></div>
            <ProductCard 
            name="موز وبرتقال" 
            price="3,000 IQD" 
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
          <div class="img portga-milk"></div>
          <ProductCard 
          name="برتقال وحليب" 
          price="3,000 IQD" 
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
            <div class="img mdiat"></div>
            <ProductCard 
            name="حمضيات" 
            price="3,000 IQD" 
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
          <div class="img koktil"></div>
          <ProductCard 
          name="كوكتيل" 
          price="4,000 IQD" 
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
            <div class="img stwb"></div>
            <ProductCard 
            name="فراولة" 
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
          :delay="2600"
          :duration="3000"
          >
          <div class="img muz-notila"></div>
          <ProductCard 
          name="موز ونوتيلا" 
          price="4,000 IQD" 
          />
        </div>
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="2800"
          :duration="3200"
          >
            <div class="img muz-stwb"></div>
            <ProductCard 
            name="موز وفرولة" 
            price="4,000 IQD" 
            />
        </div>
      </div>

  </section>
</section>
</template>

<style scoped>
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
.all-sec{
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
.portgal{
  background: url('../assets/jus/oringe-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.limon-nani{
  background: url('../assets/jus/limon-nani-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.muz{
  background: url('../assets/jus/muz-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.limon{
  background: url('../assets/jus/limon-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.milon{
  background: url('../assets/jus/Melon-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.muz-portgal{
  background: url('../assets/jus/muz-oringe-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.portga-milk{
  background: url('../assets/jus/oringe-milk-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.mdiat{
  background: url('../assets/jus/7mdeat-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.koktil{
  background: url('../assets/jus/koktel-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.stwb{
  background: url('../assets/jus/Strawberry-jus.jpg') no-repeat;
  background-size: cover;
}
.muz-notila{
  background: url('../assets/jus/muz-notila-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}
.muz-stwb{
  background: url('../assets/jus/muz-strawberry-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
}





</style>


