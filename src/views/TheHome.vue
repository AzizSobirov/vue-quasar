<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="q-py-lg">
      <!-- navigation -->
      <the-navigation></the-navigation>

      <!-- title -->
      <div
        class="text-h4 text-center text-weight-medium text-uppercase q-my-xl"
      >
        Мое Избранное
      </div>

      <!-- Segment -->
      <q-btn-group dense flat class="segment">
        <q-btn
          :label="`Объявления (${store.vacancies.length})`"
          :class="vacancies ? 'bg-primary text-white' : ''"
          @click="vacancies = true"
        />
        <q-btn
          :label="`Товары (${store.products.length})`"
          :class="!vacancies ? 'bg-primary text-white' : ''"
          @click="vacancies = false"
        />
      </q-btn-group>

      <!-- vacancies -->
      <the-vacancies
        v-if="vacancies"
        :vacancies="store.vacancies"
      ></the-vacancies>

      <!-- products -->
      <the-products v-else :vacancies="store.products"></the-products>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TheNavigation from "../components/TheNavigation.vue";
import TheVacancies from "../components/TheVacancies.vue";
import TheProducts from "../components/TheProducts.vue";
import { useStore } from "../stores/store";

const store = useStore();

const vacancies = ref(true);
</script>
<style lang="scss" scoped>
.segment {
  width: 100%;
  button {
    height: 50px;
    width: 320px;
    background: #e9e9e9;
    transition: 0.2s;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}

@media screen and (max-width: 640px) {
  .text-h4 {
    margin: 20px 0;
    font-size: 24px;
  }
  .segment button {
    height: 40px;
  }
}
</style>
