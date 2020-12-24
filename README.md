# Веб-приложение «SpaceX» 

## Тестовое задание на должность frontend разработчика (React)

Есть API предоставляющее данные о запусках SpaceX: https://api.spacexdata.com/v3/launches (все данные).
Необходимо вывести список всех запусков в следующем виде:

![alt text](https://cdn.lifehacker.ru/wp-content/uploads/2017/10/Screen-Shot-2017-10-02-at-20.53.54_1506966860.jpg)

## Возможности программы

В каждом запуске
* Изображение нашивки (links > mission_patch_small)
* Название (mission_name)
* Дата в формате дд.мм.гггг (launch_date)
* Детали (details) или upcoming

Реализовать фильтрацию списка при помощи выпадающих списков Launch Site и Rocket (значения должны браться из данных)

## Развёртывание проекта

Вот краткое введение о том, что должен сделать разработчик, чтобы начать дальнейшую разработку проекта:
```
git clone https://github.com/orion55/spacex2.git
cd spacex2/
npm install
npm start
```

### Компиляция и горячая перезагрузка для разработки
```
npm start
```

### Компиляция и минификация для продакшена
```
npm run make-github
```
## Ссылки

- Домашняя страница: https://orion55.github.io/spacex2/
- Repository: https://github.com/orion55/spacex2.git



## Licensing

Код в этом проекте распространяется по лицензии MIT.
