import { useAuthStore } from "~/stores/auth.store";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  if (!auth.isAuthenticated) {
    if (to.path !== "/") {
      return navigateTo("/");
    }
    return;
  }

  if (auth.isAuthenticated && !auth.isCompleted) {
    if (to.path !== "/complete-profile") {
      return navigateTo("/complete-profile");
    }
    return;
  }

  if (auth.isAuthenticated && auth.isCompleted && to.path === "/") {
    return navigateTo("/home");
  }
});
