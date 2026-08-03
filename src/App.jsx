import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// Страница контактов подключается лениво — react-router покажет
// запасное содержимое из Suspense, пока чанк не загрузится.
const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));

function RouteFallback() {
  return (
    <div style={{ padding: "96px 0", textAlign: "center", color: "var(--color-text-muted)" }}>
      Загрузка страницы…
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ContactsPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
