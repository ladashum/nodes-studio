# Nodes — сайт-визитка веб-студии

Адаптивный сайт-визитка на React + Vite, реализованный по макету Figma.

## Стек

- React 18 + Vite
- react-router-dom (маршрутизация, `React.lazy` + `Suspense` для `/contacts`)
- motion (анимация появления Hero-блока)
- CSS Modules (стили на основе токенов из Figma: `src/styles/tokens.css`)

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Структура

```
src/
├── components/       # Header, Footer, Button, StatItem, ContactForm, HeroSection, AboutSection, Logo, NavLinkItem
├── data/
│   └── statistics.js # массив показателей блока «О студии»
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ContactsPage.jsx
│   └── NotFoundPage.jsx
├── styles/
│   └── tokens.css    # CSS-переменные (цвета, отступы, радиусы) — соответствуют переменным в Figma
├── App.jsx
└── main.jsx
```

## Маршруты

| Адрес | Страница |
|---|---|
| `/` | Главная |
| `/contacts` | Контакты (ленивая загрузка) |
| `*` | 404 |

## Figma

Макет: дизайн-система (токены, компоненты Button/Form Field/Nav Item/StatItem/Logo) и экраны главной страницы + страницы контактов подготовлены в отдельном файле Figma, на который ориентирована вёрстка.
