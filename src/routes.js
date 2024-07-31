import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import Cookies from "js-cookie";
import { store } from "./store/index";

export const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
    beforeEnter: () => {
      checkAuth();
    }
  },
  { path: "/signup", name: "signup", component: SignupPage },
  { path: "/login",  name: "login",  component: LoginPage  },
];

const checkAuth = () => {
  const jwtCookie      = Cookies.get('jwt');
  const expirationDate = Cookies.get('tokenExpirationDate');
  const userId         = Cookies.get('UID');

  if (jwtCookie) {
    if (new Date().getTime() < +expirationDate) {
      store.commit("auth/setToken", {
        idToken: jwtCookie,
        expiresIn: expirationDate,
      });
      store.dispatch("auth/getUser", userId);
      return true;
    } else {
      store.commit("auth/setUserLogout");
      return false;
    }
  } else {
    return false;
  }
};
