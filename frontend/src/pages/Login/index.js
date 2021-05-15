import React, {useEffect, useState, useContext} from "react";
import { useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as s from './style'
import LogoImg from '../../assets/images/logo_inclucad_animated.svg'
import api from '../../api/api'
import AuthContext from '../../contexts/auth'


const Login = (props) => {
    const {setLoggedIn} = props
    const context = useContext(AuthContext);
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('')
    const [data, setData] = useState({})
    
    const onSubmit = data => {
        setData(data)
        api.auth.userLogin(data).then(res=> { 
            const header = JSON.stringify(res.headers)  
            const data = res.data
            console.log(res.headers)
            setLoggedIn({data:data, status:true})      
            localStorage.setItem('headers', header);
            history.push("/home")
            setLoginError("")
        }).catch(e=>{
            setLoginError(`Email ou Senha incorretos. ${e}`);
            alert(e);
        })
    };
  
    useEffect(() => {
        document.title = `INCLUCAD - Login`;
        if(context.loggedIn.status){
            history.push("/home")
        }
      },[]);
    return (
      <s.Login>
        <s.Logo>
        <img src={LogoImg} alt="Logo do INCLUCAD"/>
        </s.Logo>

      <form onSubmit={handleSubmit(onSubmit)}>
        <s.Field>
        <label>Email</label>
        <input 
        name="email" type="email" {...register("email",  { required: true })} />
        <s.Errors>
        {errors.email && <span>O campo Email não pode ficar em branco.</span>}
        </s.Errors>
        </s.Field>
        <s.Field>
            <label>Senha</label>
            <input name="password" type="password" {...register("password", { required: true })} />
        
        <s.Errors>
        {errors.password && <span>O campo Senha não pode ficar em branco.</span>}
        </s.Errors>
        </s.Field>
        
        <input type="submit" value="ENTRAR" />
        <s.Errors>
        {loginError}
        </s.Errors>
      </form>
      </s.Login>)
};

export default Login