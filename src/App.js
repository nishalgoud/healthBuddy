import { LoginPage } from "./components/LoginPage";
import { NavigationBar } from "./components/NavigationBar";
import { SignUpPage } from "./components/SignUpPage";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

import {
  SIGNUP_PATH,
  LOGIN_PATH,
  HOME_PATH,
  CAREER_PATH,
  USERS_PATH,
  RESET_PASSWORD_PATH,
  PROFILE_PATH,
  MY_HEALTH_PATH,
  CONTACT_PATH,
} from "./constants";
import { Careers } from "./components/Careers";
import { UsersList } from "./components/UsersList";
import { ProfilePage } from "./components/ProfilePage";
import { Footer } from "./components/Footer";
import { MyHealth } from "./components/MyHealth";
import { Contact } from "./components/Contact";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import AutoLogout from "./components/AutoLogout";
import { ResetPasswordPage } from "./components/ResetPasswordPage";

function App() {
  const getComponentWithAutoLogout = (component) => {
    return <AutoLogout>{component}</AutoLogout>;
  };
  return (
    <div>
      <Routes>
        <Route path={HOME_PATH} element={<NavigationBar />}>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={getComponentWithAutoLogout(<Home />)} />

            <Route
              path={CAREER_PATH}
              element={getComponentWithAutoLogout(<Careers />)}
            />
            <Route
              path={USERS_PATH}
              element={getComponentWithAutoLogout(<UsersList />)}
            />

            <Route
              path={PROFILE_PATH}
              element={getComponentWithAutoLogout(<ProfilePage />)}
            />
            <Route
              path={MY_HEALTH_PATH}
              element={getComponentWithAutoLogout(<MyHealth />)}
            />
          </Route>

          <Route path={LOGIN_PATH} element={<LoginPage />} />
          <Route path={SIGNUP_PATH} element={<SignUpPage />} />
          <Route path={RESET_PASSWORD_PATH} element={<ResetPasswordPage />} />
          <Route path={CONTACT_PATH} element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
