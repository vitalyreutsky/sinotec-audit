import { validateForms } from "../functions/validate-forms";

const rules1 = [
  {
    ruleSelector: ".guide-validate-email",
    rules: [
      {
        rule: "email",
        value: true,
        errorMessage: "Введите ваш e-mail!",
      },
    ],
  },
];

const rules2 = [
  {
    ruleSelector: ".contacts-validate-email",
    rules: [
      {
        rule: "email",
        value: true,
        errorMessage: "Введите ваш e-mail!",
      },
    ],
  },

  {
    ruleSelector: ".form__input-name",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Введите ваше имя!",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Введите минимум 3 символа!",
      },
      {
        rule: "maxLength",
        value: 20,
        errorMessage: "Превышено количество символов!",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".guide-form", rules1, afterForm);
validateForms(".cont-form", rules2, afterForm);
