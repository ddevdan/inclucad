import React from "react";
import { useForm } from "react-hook-form";
import * as s from './style'
import LogoImg from '../../assets/images/logo_inclucad_animated.svg'
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("password")); // watch input value by passing the name of it
  
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
        
        <input type="submit" />
      </form>
      </s.Login>)
};

export default Login