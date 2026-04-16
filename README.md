# LEXCARGO GROUP

Статичний багатосторінковий сайт на чистому `HTML`, `CSS` і `JavaScript`.

## Структура

- `index.html` — головна сторінка
- `mizhnarodni-perevezennya.html` — сторінка міжнародних перевезень
- `perevezennya-po-ukrayini.html` — сторінка перевезень по Україні
- `mytne-oformlennya.html` — сторінка митного оформлення
- `assets/styles.css` — спільні стилі
- `assets/app.js` — калькулятор, demo-форма, кнопки поширення та дрібна взаємодія
- `robots.txt` і `sitemap.xml` — базові SEO-файли

## Локальний перегляд

Сайт можна відкрити напряму через `index.html`, але для коректної перевірки краще підняти простий локальний сервер.

Приклад через Python:

```bash
python -m http.server 3000
```

Після цього відкрийте:

`http://localhost:3000`

## Примітка

Форма заявки зараз працює в demo-режимі на фронтенді. Для бойового використання її можна підключити до:

- CRM
- email-обробника
- webhook
- Telegram-бота

## Деплой

Сайт підготовлено як статичний проєкт без етапу збірки.

### Vercel

- Framework preset: `Other`
- Build command: залишити порожнім
- Output directory: `.`

У репозиторії вже додано `vercel.json` для коректного статичного деплою.

### Netlify

- Base directory: залишити порожнім
- Build command: залишити порожнім
- Publish directory: `.`

У репозиторії вже додано `netlify.toml`.

### Звичайний хостинг

Завантажте вміст репозиторію на сервер так, щоб у веб-корені були:

- `index.html`
- HTML-сторінки послуг
- папка `assets`
- `robots.txt`
- `sitemap.xml`
