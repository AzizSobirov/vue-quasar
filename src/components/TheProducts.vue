<template>
  <div class="w-full q-my-xl q-gutter-md my-card">
    <q-card v-for="vacancy in vacancies" :key="vacancy.id" flat bordered>
      <div class="row">
        <q-img
          class="col-12 col-sm-4"
          :src="vacancy.img"
          :class="vacancy.status == 'inactive' ? 'disabled' : ''"
        />

        <q-badge
          class="status"
          :class="
            vacancy.status != 'active' && vacancy.status == 'New'
              ? 'new'
              : 'sale'
          "
          v-if="vacancy.status !== 'active'"
        >
          {{ vacancy.status }}
        </q-badge>

        <q-card-section
          class="q-pl-lg q-gutter-md col-12 col-sm-8"
          :class="vacancy.status == 'inactive' ? 'disabled' : ''"
        >
          <div class="text-h5 text-uppercase text-weight-medium">
            {{ vacancy.title }}
          </div>
          <div class="text-h5 text-uppercase text-primary text-weight-medium">
            {{ vacancy.price }}
          </div>
          <div class="text-body1">
            {{ vacancy.desc }}
          </div>
          <q-btn color="deep-orange" label="в корзину " />
        </q-card-section>

        <q-avatar
          color="red"
          text-color="white"
          icon="favorite"
          class="avatar"
        />
      </div>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { Vacancy } from "../types/index";
// props
const props = defineProps({
  vacancies: {
    type: Array as () => Vacancy[],
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.avatar {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50% !important;
  cursor: pointer;
}

.status {
  position: absolute;
  top: 20px;
  left: 0px;
  height: 25px;
  background: #ffc107;
  border-radius: 0;
  cursor: pointer;

  &.new {
    background: #22a094;
  }
  &.new {
    background: #f44336;
  }
}

@media screen and (max-width: 1280px) {
  .my-card {
    margin-top: 20px;
    padding: 0 16px;

    .q-gutter-md > * {
      margin-top: 10px;
      margin-left: 10px;
    }
  }
}
@media screen and (max-width: 640px) {
  .avatar {
    top: 85px;
    right: 5px;
  }

  .text-subtitle1 {
    font-size: 14px;
    line-height: 16px;
  }
  .text-h5 {
    font-size: 18px;
    line-height: 20px;
  }
  .q-card-section.q-pl-lg {
    padding-left: 10px;
  }

  .my-card .q-gutter-md > * {
    margin: 5px 0 0 !important;
  }

  .my-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
}
</style>
