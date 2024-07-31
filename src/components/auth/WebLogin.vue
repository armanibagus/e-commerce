<script setup>
import BaseInput from "./../ui/BaseInput.vue";
import BaseButton from "./../ui/BaseButton.vue";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const loginData = reactive({
  email: "",
  password: "",
  isLogin: true,
});

const store = useStore();
const router = useRouter();

const login = async () => {
  await store.dispatch("auth/getLoginData", loginData);
  router.push("/");
};
</script>

<template>
  <div class="container-fluid login-form-container">
    <div class="p-4 m-auto login-form card shadow">
      <div class="mb-2">
        <h4 class="mb-2">Log in to your account</h4>
        <p class="mb-2">Enter your details below</p>
      </div>
      <form @submit.prevent="login">
        <div class="mb-4">
          <base-input
            type="email"
            identity="email"
            placeholder="Your email"
            label="Email"
            v-model="loginData.email"
          ></base-input>
        </div>
        <div class="mb-4">
          <base-input
            type="password"
            identity="password"
            placeholder="Your password"
            label="Password"
            v-model="loginData.password"
          ></base-input>
        </div>
        <base-button class="btn-secondary w-100 my-3">Continue</base-button>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Don’t have an account?
          <span style="color: #4c4ddc">
            <router-link to="/signup" class="text-decoration-none text-secondary">Sign up</router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
