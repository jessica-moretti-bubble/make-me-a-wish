import { useAuthStore } from "~/stores/auth.store";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  console.log(auth.isAuthenticated);

  if (!auth.isAuthenticated && to.path !== "/") {
    return navigateTo("/");
  }
  if (auth.isAuthenticated && to.path === "/") {
    return navigateTo("/home");
  }
});
