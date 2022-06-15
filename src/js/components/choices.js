import Choices from "choices.js";

const defaultSelect = () => {
  const element = document.querySelector(".calc__select");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
  const result = document.querySelector(".calc__result");
  result.textContent = 0 + " $";
  element.addEventListener("change", () => {
    if (element.value === "City") {
      result.textContent = 0 + " $";
    }
    if (element.value === "Shenzhen") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Guangzhou") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Dongguan") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Shantou") {
      result.textContent = 22.9 + " $";
    }
    if (element.value === "Yiwu") {
      result.textContent = 22.9 + " $";
    }
    if (element.value === "YongKang") {
      result.textContent = 22.9 + " $";
    }
    if (element.value === "Jinhua") {
      result.textContent = 22.9 + " $";
    }
    if (element.value === "Taizhou") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Ningbo") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Fuzhou") {
      result.textContent = 22.9 + " $";
    }
    if (element.value === "Longyan") {
      result.textContent = 22.9 + " $";
    }
    if (element.value === "Xiamen") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Quanzhou") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Nanping") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Sanming") {
      result.textContent = 23.9 + " $";
    }
    if (element.value === "Wuwei") {
      result.textContent = 24.0 + " $";
    }
    if (element.value === "Yumen") {
      result.textContent = 25.0 + " $";
    }
    if (element.value === "Jiangmen") {
      result.textContent = 24.0 + " $";
    }
    if (element.value === "Maoming") {
      result.textContent = 24.0 + " $";
    }
    if (element.value === "Shantou") {
      result.textContent = 22.9 + " $";
    }
    if (element.value === "Zhongshan") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Guilin") {
      result.textContent = 22.9 + " $";
    }
    if (element.value === "Wuzhou") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Anshun") {
      result.textContent = 25.0 + " $";
    }
    if (element.value === "Jixi") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Hulan") {
      result.textContent = 22.0 + " $";
    }
    if (element.value === "Xuchang") {
      result.textContent = 21.9 + " $";
    }
    if (element.value === "Wuhan") {
      result.textContent = 25.0 + " $";
    }
    if (element.value === "Hanyang") {
      result.textContent = 23.0 + " $";
    }
    if (element.value === "Hankou") {
      result.textContent = 23.0 + " $";
    }
    if (element.value === "Huangshi") {
      result.textContent = 25.0 + " $";
    }
    if (element.value === "Suzhou") {
      result.textContent = 22.0 + " $";
    }
    if (element.value === "Jilin") {
      result.textContent = 23.9 + " $";
    }
    if (element.value === "Fushun") {
      result.textContent = 23.9 + " $";
    }
    if (element.value === "Benxi") {
      result.textContent = 25.0 + " $";
    }
    if (element.value === "Linzi") {
      result.textContent = 25.0 + " $";
    }
    if (element.value === "Zibo") {
      result.textContent = 25.0 + " $";
    }
    if (element.value === "Chengdu") {
      result.textContent = 23.9 + " $";
    }
    if (element.value === "Hangzhou") {
      result.textContent = 22.9 + " $";
    }
  });
};

defaultSelect();
