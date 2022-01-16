export const validateForm = (name, value) => {
  let errors = {};
  if (name === "email") {
    if (!value) {
      errors = { [name]: "Поле почта обязательно" };
    } else if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value)) {
      errors = { [name]: "Введите валидный адрес почты" };
    }
  }

  if (name === "password") {
    if (!value) {
      errors = { [name]: "Поле пароль обязательно" };
    }
  }

  if (name === "name") {
    if (!value) {
      errors = { [name]: "Поле имя обязательно" };
    } else if (!/^[a-zA-Z\s-]+$/.test(value)) {
      errors = {
        [name]: "Имя может содержать только латиницу, пробел или дефис",
      };
    } else if (value.length < 1) {
      errors = { [name]: "Имя должно содержать 2 и более символа" };
    }
  }

  if (name === "search") {
    if (!value) {
      errors = { [name]: "Введите данные для поиска" };
    }
  }
  return errors;
};
