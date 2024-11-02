
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';


const isAnimationDelayed = ref(false);

onMounted(() => {
  window.scrollTo(0, 0); // التأكد من بقاء التمرير عند الأعلى
  setTimeout(() => {
    isAnimationDelayed.value = true;
  }, 300); // تأخير الرسوم المتحركة لمدة نصف ثانية (يمكنك ضبط هذه المدة)
});


</script>
<template>

<section class="all-det">
      <div class="top"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="100"
          :duration="1000"
          >
            <h1 class="main-text">ما الذي تريد ان </h1>
            <h1 class="main-text-down">تطلب ؟ </h1>
          </div>
          <section class="continer">
            <div class="t-line"
          v-if="isAnimationDelayed"
          
          >
          <Router-Link class="link" to="/hooka"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="200"
          :duration="1000"
          >
            <div class="img hooka"></div>
            <p class="text-under-img">اراكيل</p>
          </Router-Link>
          <Router-Link class="link" to="/food"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="400"
          :duration="1200"
          >
            <div class="img food"></div>
            <p class="text-under-img">مأكولات</p>
          </Router-Link>
        </div>
        <div class="t-line">
          <Router-Link class="link" to="/sjs"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="600"
          :duration="1400"
          >
            <div class="img soft-d"></div>
            <p class="text-under-img">عصائر</p>
          </Router-Link>
          <Router-Link class="link" to="/hotd"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="800"
          :duration="1600"
          >
            <div class="img d-hot"></div>
            <p class="text-under-img">مشروبات ساخنه</p>
          </Router-Link>
        </div>
        <div class="t-line">
          <Router-Link class="link" to="d"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1000"
          :duration="1800"
          >
            <div class="img dr"></div>
            <p class="text-under-img">مشروبات غازية</p>
          </Router-Link>
          <Router-Link class="link" to="/mojito"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1200"
          :duration="2000"
          >
            <div class="img mojito"></div>
            <p class="text-under-img">موهيتو</p>
          </Router-Link>
        </div>
        <div class="t-line">
          <Router-Link class="link" to="mcold"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1400"
          :duration="2200"
          >
            <div class="img soon"></div>
            <p class="text-under-img">معجنات باردة</p>
          </Router-Link>
          <Router-Link class="link" to="mhot"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1600"
          :duration="2400"
          >
            <div class="img soon"></div>
            <p class="text-under-img">معجنات حارة</p>
          </Router-Link>
        </div>
</section>
<footer class="footer">
<div 
          class="cop" v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="1200"
          :duration="2400">            
  @ Mohammed Alzubaidy
</div>
</footer>
</section>
</template>
<style scoped>

.cop{
  color: #c43e2e;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.3vh;
}
.footer{
  color: #c43e2e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;
  padding-bottom: 1vh;
}
  .all-det{
    background-color: #f4f1ee;
    /* height: 100vh; */
  }
  .top{
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 3vh 4vh;
  }
  .main-text{
    color: #5d5b5b;
    font-family: "Noto Sans Arabic", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-size: 4vh;
    font-style: normal;
    text-decoration: none;
}
  .main-text-down{
    color: #c43e2e;
    font-family: "Noto Kufi Arabic", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-size: 4vh;
    font-style: normal;
    margin-top: -1vh;
    text-decoration: none;
}
.continer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
}
.t-line{
  display: flex;
  gap: 5%;
}
.img{
  height: 15vh;
  width: 15vh;
  border-radius: 100%;
}
.text-under-img{
  color: #c43e2e;
  font-family: "Noto Kufi Arabic", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-size: 1.5vh;
  font-style: normal;
  margin-top: 1vh;
}
.link{
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-decoration: none;
}
.hooka{
  background: url('../assets/Hookah.jpg') no-repeat;
  background-size: cover;
  /* background-position: center;  */
}
.food{
  background: url('../assets/food/Beef-Burger.jpg') no-repeat;
  background-size: cover;
  background-position: center; 
}
.mojito{
  background: url('../assets/Mojito/Mojito-strawberries.jpg') no-repeat;
  background-size: cover;
  background-position: center; 
}
.d-hot{
  background: url('../assets/hot-d/coffe-three.jpg') no-repeat;
  background-size: cover;
  background-position: center; 
}
.dr{
  background: url('../assets/dri/cola.jpg') no-repeat;
  background-size: cover;
  background-position: center; 
}
.soon{
  background: url('../assets/soon.jpg') no-repeat;
  background-size: cover;
  background-position: center; 
}
.soft-d{
  background: url('../assets/jus/oringe-jus.jpg') no-repeat;
  background-size: cover;
  background-position: bottom; 
}
</style>
  