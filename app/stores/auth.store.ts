import { defineStore } from "pinia";
import type { AuthData } from "~/model/stores/auth-store.model";

interface State {
  authData: AuthData;
}

export const useAuthStore = defineStore("auth", {
  state: (): State => ({
    authData: {
      username: undefined,
      email: undefined,
      accessToken: undefined,
      refreshToken: undefined,
    },
  }),

  getters: {
    userEmail: (state) => state.authData.email,
    userName: (state) => state.authData.username,
  },

  actions: {
    setUser(email: string, username?: string) {
      this.authData.email = email;
      this.authData.username = username;
    },

    setTokens(accessToken: string, refreshToken: string) {
      this.authData.accessToken = accessToken;
      this.authData.refreshToken = refreshToken;
    },

    clearUser() {
      this.authData = {
        username: undefined,
        email: undefined,
        accessToken: undefined,
        refreshToken: undefined,
      };
    },
  },
});
