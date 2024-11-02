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
          <p class="main-text">اطلب نركيلتك </p>
          <p class="main-text-color">مع كـيـف</p>
        </div>
        <router-link class="back" to="menu"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="300"
        :duration="1200"
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
          <div class="img-fisrt"></div>
          <ProductCard 
          name="خلطة كـيـف" 
          price="5,000 IQD" 
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
            <div class="img-fisrt"></div>
            <ProductCard 
            name="ليمون وخوخ" 
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
          :delay="1000"
          :duration="1600"
          >
          <div class="img-fisrt"></div>
          <ProductCard 
          name="ليمون ونعناع" 
          price="5,000 IQD" 
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
            <div class="img-fisrt"></div>
            <ProductCard 
            name="حمضيات" 
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
          <div class="img-fisrt"></div>
          <ProductCard 
          name="شامية" 
          price="5,000 IQD" 
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
            <div class="img-fisrt"></div>
            <ProductCard 
            name="علج ونعناع" 
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
          :delay="1800"
          :duration="2400"
          >
          <div class="img-fisrt"></div>
          <ProductCard 
          name="تفاحتين" 
          price="5,000 IQD" 
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
            <div class="img-fisrt"></div>
            <ProductCard 
            name="عنب" 
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
          :delay="2200"
          :duration="2800"
          >
          <div class="img-fisrt"></div>
          <ProductCard 
          name="انكليزي" 
          price="5,000 IQD" 
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
            <div class="img-fisrt"></div>
            <ProductCard 
            name="علج" 
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
          :delay="2600"
          :duration="3200"
          >
          <div class="img-fisrt"></div>
          <ProductCard 
          name="باونتي" 
          price="5,000 IQD" 
          />
        </div>
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="2800"
          :duration="3400"
          >
            <div class="img-fisrt"></div>
            <ProductCard 
            name="علج وقرفة" 
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
          :delay="3000"
          :duration="3600"
          >
          <div class="img-fisrt"></div>
          <ProductCard 
          name="باونتي" 
          price="5,000 IQD" 
          />
        </div>
        <div class="table"
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="3200"
          :duration="3800"
          >
            <div class="img-fisrt"></div>
            <ProductCard 
            name="علج وقرفة" 
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
          :delay="3400"
          :duration="4000"
          >
          <div class="img-fisrt"></div>
          <ProductCard 
          name="طبيعي" 
          price="8,000 IQD" 
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
.img-fisrt{
  background: url('../assets/Hookah.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  height: 15vh;
  width: 15vh;
  border-radius: 100%;
}



</style>


