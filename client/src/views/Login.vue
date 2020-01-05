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
          <router-link to="/register"><button><i class="fas fa-lock"></i> Create Account</button></router-link>
        </div>
      </div>

      <header class="mainHead">
       

        <h1>
          <a href="index.html">
            J O A Z E
          </a>
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
              <input type="submit" value="Login" />
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
// import axios from 'axios';
// import router from '../router/index';
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

<style scoped>
.navbar {
    width: 100%;
    justify-content: flex-end;
    text-align: right;
    display: flex;
    align-items: center;
}

.navBtn button {
    padding: 10px 20px 10px 20px;
    margin: 0px 2em;
    border: 1px solid #4c4c4c;
}

.links {
    font-size: .7em;
    line-height: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

.navBtn {
    margin-top: .4em;
}

a {
    text-decoration: none;
    color: #0077C5;
}

.mainHead {
    width: 100%;
    margin: 3em auto 1em;
    text-align: center; 
    font-family: cursive;
}

.mainHead a {
    color: #8b8686;
}

.form {
    background: rgba(153, 150, 150, 0.226);
    max-width: 400px;
    margin: 0 auto;
    padding: 1em 1.5em;
    border-radius: 4px;
    box-shadow: 2px 3px 3px 2px rgb(0, 0, 0, 0.6);
    font-weight: 700;
}

.inputs {
    margin-bottom: 2em;
    max-width: 100%;
}

input {
    width: 100%; 
    margin: .5em 0;
    padding:1em 5px;
    outline: 0;
    font-size: 1em;
    border-radius: 3px;
    border: none;
    background: #f3f4f5;
}

.accBtn {
    width: 100%;
}

.accBtn button {
    width: 100%;
    padding: 1.2em 0;
    box-shadow: 1px 1px 2px black;
    border: none;
}

.privacy {
    text-align: center;
    margin: 3em 0;
}
</style>
