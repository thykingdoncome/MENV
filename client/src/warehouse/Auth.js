 import axios from 'axios';
 import router from '../router/index';

 const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null   
 };

 const getters = {
    isLogged: state => state.token ? true : false,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
 };

 const actions = {
    // Login Action
    async login({
        commit
    }, user) {
        commit('auth_request');
        try {
            let res = await axios.post('/users/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store token into the localstorage
                localStorage.setItem('token', token);
                // Set axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },

    async register({
        commit
    }, userData) {
        try {
            commit('register_request');
            let res = await axios.post('/users/register', userData);
            if (res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
        } catch(err) {
            commit('register_error', err)
        }
    },

    //user logout
    async logout({ commit }) {
        await  localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login')
        return
    },

    // user welcome page
    async welcomeProfile({ commit }) {
        commit('welcome_req')
        let res = await axios.get('/users/welcome');
        commit('welcome_user', res.data.user)
        return res;
    }

 }

 const mutations = {
    auth_request(state) {
        state.status = 'loading'
        state.error = null
    },

    auth_success(state, token, user){
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },

    auth_error(state, err) {
        state.error = err.response.data.msg
    },

    register_request(state) {
        state.status = 'loading'
        state.error = null
    },

    register_success(state){
        state.status = 'success'
        state.error = null
    },

    register_error(state, err) {
        state.error = err.response.data.msg   
    },

    logout(state){
        state.token = ''
        state.user = ''
        state.status = ''
        state.error = null
    },

    welcome_req(state) {
        state.status = 'loading'
    },

    welcome_user(state, user) {   
        state.user = user       
    }
 };


 export default {
     state, getters, actions, mutations
 }