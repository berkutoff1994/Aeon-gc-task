
<h1>About The Project</h1>

Это тестовое задание - chart таблица, данные в которую выводятся после получения их с API.
При создании использовались: React, SCSS, TypeScript, Redux.

Для запуска приложения:
* Клонируйте репозиторий на свой локальный компьютер командой "git clone"
* Запустите терминал и выполните команду "npm install"
* После установки зависимостей запустите приложение на localhost командой "npm start"

Примечание: реализован весь функционал по техническому заданию:
- верстка по <a href='https://www.figma.com/file/21A0MpovcIXVKArJJOHook/React-Test?node-id=1%3A3851&t=TJCoyJsVhwOSQX60-0'>макету</a>
- получение данных Get запросом по адресу http://82.202.204.94/tmp/test.php (в настоящее время тестовое APi не функционирует)
- все данные в Gantt Chart берутся через API
- стартовый (слева) месяц для вывода данных определяется на основе минимальной даты тасков из API
- дерево тасков поддерживает свертывание/развертывание при нажатии на стрелочку (на всех уровнях)
- справа от названия таска выводится количество вложенных в него элементов
- цвета блоков определяются в зависимости от уровня вложенности (первый - синий, второй - желтый, 3-4 уровни - зеленый, пятый - желтый)
- блоки дат, которые не влезают справа обрезаются через fade-затенение

