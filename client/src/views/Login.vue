<template>
  <div>
    <section>
      <div class="navbar">
        <div class="links">
          <p>Don't have a Joaze account?</p>
         <router-link to="/password-reset">
          I forgot my Email or Password Sign In
         </router-link> 
        </div>

        <div class="navBtn">
          <router-link to="/register"><button id="btn"><i class="fas fa-lock"></i> Create Account</button></router-link>
        </div>
      </div>

      <header class="mainHead">
       

        <h1>
          <router-link to="/">
         J O A Z E
         </router-link> 
        </h1>
      </header>

      <section>
        <div class="form">
           <Errors v-if="error" :msg="error" />
          <form @submit.prevent="loginMeth">
            <div>
              <div class="inputs">
                <label for="email">Email Address</label>
                <input id="email" name="email" type="email" required autofocus v-model="email" />
              </div>

              <div class="inputs">
                <label for="password">Password</label>
                <input id="password" name="password" type="password" required v-model="password"/>
              </div>
            </div>

            <div class="accBtn">
              <input id="btn" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </section>

      <div class="privacy">
        <p>Legal Privacy Security</p>
        <p>© 2019 Joaze, Inc. All rights reserved.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Errors from '../components/Errors'


export default {
    name: 'Login',

    components: {
    Errors
    },

     data() {
       return {
         email: '',
         password: ''
       }
     },

      computed: {
    ...mapGetters(["error"])
    },

     methods: {
       ...mapActions(['login']),
       loginMeth() {
         let user = {
           email: this.email,
           password: this.password
         };

          this.login(user)
          .then(res => {
            if(res.data.success){
            // console.log(res.data);
              this.$router.push('/welcome')
            }
          })
          .catch(err => {
            console.log(err);
          })
    
       }
     },
};
</script>

