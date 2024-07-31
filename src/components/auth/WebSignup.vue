<script setup>
import BaseInput from "./../ui/BaseInput.vue";
import BaseButton from "./../ui/BaseButton.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const signupData = reactive({
  fullName: "",
  username: "",
  email: "",
  password: "",
  confirmationPassword: "",
  isLogin: false,
  imageLink: ""
});

const passwordStatusDisplay = ref("none");

const passwordCheck = () => {
  if (signupData.password.length < 8) {
    passwordStatusDisplay.value = "block";
  } else {
    passwordStatusDisplay.value = "none";
  }
}

const confirmPasswordDoesNotMatch = ref("none");
const confirmPasswordMatch        = ref("none");

const confirmationPasswordCheck = () => {
  if (signupData.confirmationPassword === "") {
    confirmPasswordDoesNotMatch.value = "none";
    confirmPasswordMatch.value        = "none";
    return;
  }

  if (signupData.password !== signupData.confirmationPassword) {
    confirmPasswordDoesNotMatch.value = "block";
    confirmPasswordMatch.value        = "none";
    return;
  }

  confirmPasswordDoesNotMatch.value = "none";
  confirmPasswordMatch.value        = "block";
};

const store  = useStore();
const router = useRouter();

const register = async () => {
  if (signupData.password !== signupData.confirmationPassword || signupData.password.length < 8) {
    signupData.confirmationPassword   = "";
    signupData.password               = "";
    confirmPasswordDoesNotMatch.value = "none";
    confirmPasswordMatch.value        = "none";
  } else {
    await store.dispatch("auth/getRegisterData", signupData);
    router.push("/");
  }
};
</script>

<template>
  <div class="container-fluid signup-form-container">
    <div class="p-4 m-auto signup-form card shadow">
      <div class="mb-2">
        <div class="d-flex justify-content-between mb-2">
          <h4 class="m-0">Sign up</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </div>
        <p class="mb-2">Enter your details below</p>
      </div>
      <form @submit.prevent="register">
        <div class="mb-4">
          <base-input
            type="text"
            identity="fullName"
            placeholder="Ex: Daniel"
            label="Full Name"
            v-model="signupData.fullName"
          ></base-input>
        </div>
        <div class="mb-4">
          <base-input
            type="text"
            identity="username"
            placeholder="Your username"
            label="Username"
            v-model="signupData.username"
          ></base-input>
        </div>
        <div class="mb-4">
          <base-input
            type="email"
            identity="email"
            placeholder="Your email address"
            label="Email"
            v-model="signupData.email"
          ></base-input>
        </div>
        <div class="mb-4">
          <base-input
            type="password"
            identity="password"
            placeholder="Your password"
            label="Password"
            v-model="signupData.password"
            @keyInput="passwordCheck"
          ></base-input>
          <p class="text-danger mt-1 fw-medium" style="font-size: 11px"
            :style="{ display: passwordStatusDisplay }"
          >
            The password field must be at least 8 characters
          </p>
        </div>
        <div class="mb-4">
          <base-input
            type="password"
            identity="confirmationPassword"
            placeholder="Same with password"
            label="Confirmation Password"
            v-model="signupData.confirmationPassword"
            @keyInput="confirmationPasswordCheck"
          ></base-input>
          <p class="text-danger mt-1 fw-medium" style="font-size: 11px" :style="{ display: confirmPasswordDoesNotMatch }">
            The password confirmation does not match
          </p>
          <p class="text-success mt-1 fw-medium" style="font-size: 11px" :style="{ display: confirmPasswordMatch }">
            The password confirmation does match
          </p>
        </div>
        <base-button class="btn-secondary w-100 my-3">Register</base-button>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have account?
          <span>
            <router-link to="/login" class="text-decoration-none text-secondary">
              Login
            </router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
