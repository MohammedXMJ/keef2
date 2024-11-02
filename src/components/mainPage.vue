<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="full-background"
    v-motion
    :initial="{ opacity: 0, y: 200 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :delay="500"
    :duration="2000"
    >
        <div class="all">
            <div class="det"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="900"
            :duration="2400"
            >
                <h1 class="cafe-name">كــيف</h1>
                <div class="under-title">
                    <hr>
                    <p class="food-det">مقهى و مأكولات </p>
                    <hr>
                </div>
            </div>
            <div class="btn"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="700"
            :duration="1200"
            >
                <router-link class="btn-start" to="/menu">المنيو</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

.full-background{
    background: url('../assets/background.png') no-repeat;
    background-size: cover;
    height: 100vh;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
}
.all{
    margin: 0px 0px 50% 13%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
}
.cafe-name{
    font-size: 6vh;
    font-family: "Noto Kufi Arabic", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    margin-top: -1vh;
    text-decoration: none;
}
.btn{
    margin-top: 3vh;

}
.food-det{
    color : rgba(255, 255, 255, 0.72);
    font-family: "Noto Kufi Arabic", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    margin-top: -1vh;
    text-decoration: none;
}
.btn-start{
    background-color: #c43e2e;
    padding: 1vh 14vh;
    border-radius: 20px;
    border: 0px;
    font-size: 3vh;
    text-decoration: none;
    font-family: "Noto Kufi Arabic", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    /* font-size: 4vh; */
    font-style: normal;
    margin-top: -1vh;
    text-decoration: none;
}
.under-title{
    display: flex;
    gap: 10px;
}
</style>
