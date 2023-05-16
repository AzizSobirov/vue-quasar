import { ref } from "vue";
import { defineStore } from "pinia";
import type { Vacancy } from "../types/index";
import dog from "../assets/dog.png";

export const useStore = defineStore("store", () => {
  const vacancies = ref<Vacancy[]>([
    {
      id: 0,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "active",
    },
    {
      id: 1,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "inactive",
    },
    {
      id: 2,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "active",
    },
    {
      id: 3,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "active",
    },
  ]);

  const products = ref<Vacancy[]>([
    {
      id: 0,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "New",
    },
    {
      id: 1,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "active",
    },
    {
      id: 2,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "Sale",
    },
    {
      id: 3,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "active",
    },
    {
      id: 4,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "New",
    },
    {
      id: 5,
      img: dog,
      title: "Продается собака породы",
      time: "23 марта 2023",
      location: "Москва",
      desc: "Описание",
      price: "5 000 ₽",
      status: "Sale",
    },
  ]);

  return { vacancies, products };
});
