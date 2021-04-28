import axios from 'axios'


const apiBase = axios.create({
    baseURL: 'http://10.0.0.116:3000'
})

function getHeaders() {
    let token = JSON.parse(localStorage.getItem('headers'));

    return {
        headers: {
            "access-token": token ? token["access-token"] : "",
            "token-type":token ? token["token-type"] : "",
            client:token ? token["client"] : "",
            expiry:token ? token["expiry"] : "",	
            uid:token ? token["uid"] : "",
            uid:token ? token["uid"] : "",
            "Content-Type": "application/json; charset=utf-8"
        }
    }
}

export default {
    
    
    auth: {
        userLogin(payload) {
            return apiBase.post('/auth/sign_in', payload);
        },
        userLogOut(payload) {
            console.log(payload)
            console.log(payload.data.id)
            return apiBase.delete('/auth/sign_out', {data:{"user":{id:payload.data.id}}}, getHeaders());
        }
    },

    disabled_person:{
        register(payload){
            return apiBase.post('/disabled_people', payload, getHeaders())
        }
    },

    evaluation:{
        get(){
            console.log(getHeaders())
            return apiBase.get('/evaluations', getHeaders())
        }
    },
    health_center:{
        get(){
            return apiBase.get('/health_centers', getHeaders())
        }
    },
    currentUser: function() {
        return apiBase.get('/auth/validate_token', getHeaders());
    },

} 