import noImage from "../images/No_image_available.svg";

// если отсутствует ссылка на картинку - вывести картинку "Изображение недоступно"
export const imageCheck = (imageData) => {
  let imageLink;
  if (imageData) {
    imageLink = `https://api.nomoreparties.co${imageData.url}`;
  } else {
    imageLink = noImage;
  }
  return imageLink;
};

// конвертировать минуты в часы
export const convertMinutesToHours = (minutes) => {
  let time;
  if (minutes >= 60) {
    time = ((minutes / 60) | 0) + "ч " + (minutes % 60) + "м";
  } else {
    time = minutes + "м";
  }
  return time;
};
