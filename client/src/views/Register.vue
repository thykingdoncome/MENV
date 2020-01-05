<template>
    <section>
        <div class="navbar">

            <div class="links">
                <p> Already have an Joaze account? </p>              
            </div>

            <div class="navBtn">
               <router-link to="/login">
               <button><i class="fas fa-lock"></i>Login</button>
               </router-link>
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
                <form @submit.prevent="registerMeth">
                    <div class="createAcc">
                        <h2>
                            Create a Joaze account
                        </h2>
                    </div>

                     <Errors v-if="error" :msg="error" />

                    <div>
                        <div class="inputs">
                            <label for="name">Name</label>
                            <input id="name" name="name" type="text" required autofocus v-model="name">
                        </div>

                        <div class="inputs">
                            <label for="email">Email Address</label>
                            <input id="email" name="email" type="email" required v-model="email">
                        </div>

                        <div class="inputs">
                            <label for="password">Password</label>
                            <input name="password" id="password" type="password" required v-model="password">
                        </div>
                    </div>

                    <div class="accBtn">
                        <input type="submit" value="Create Account" />
                    </div>

                    <div class="privacy">
                        <p>
                            <em>
                                By clicking Create account, you agree to our <br>
                                <a href="#">Terms</a> and have read and acknowledge our <a href="#"> Privacy Statement</a>.
                            </em>
                        </p>
                    </div>
                </form>
            </div>
        </section>

        <div class="privacy">
            <p>Legal Privacy Security</p>
            <p>© 2019 Joaze, Inc. All rights reserved.</p>
        </div>

    </section>
</template>


<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Errors from '../components/Errors'

export default {
    name: 'Register',

    components: {
        Errors
    },

      computed: {
    ...mapGetters(["error"])
    },

    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },

    methods: {
        ...mapActions(['register']),
        registerMeth() {
            let user = {
                name: this.name,
                email: this.email,
                password: this.password
            }
             this.register(user)
            .then(res => {
            if(res.data.success){
             console.log(res.data);
              this.$router.push('/login')
            }
            })
            .catch(err => {
            console.log(err);
         })
        }
    },
}
</script>

<style scoped>

.navbar {
    width: 100%;
    justify-content: flex-end;
    text-align: right;
    display: flex;
    align-items: center;
}

button {
    cursor: pointer;
    border-radius: 3px;
    color: white;
    background: #0077C5;
    outline: none;
    transition: .5s;
}

.navBtn button {
    padding: 10px 20px 10px 20px;
    margin: 0px 2em;
    border: 1px solid #4c4c4c;
}

button:hover {
    background: rgb(16, 18, 19);
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

.createAcc {
    margin: 1em 0;
    text-align: center;
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