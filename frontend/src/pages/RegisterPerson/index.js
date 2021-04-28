import React, { useState } from "react";
import * as s from './style'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import TypeForm from 'react-typeform';
import api from '../../api/api'
export default function RegisterPerson({ title }: props) {
    const [toSendData, setToSendData] = useState({})
    const [heatlh_centers, setHealthCenter] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = data => {

        if (data.target) {
            let data_send = toSendData
            data_send["disabled_person"]["phones_attributes"] = [toSendData["disabled_person"]['phones_attributes']]
            // console.log('PHONE ATTRIBUTES', data_send["disabled_person"]["phones_attributes"])
            api.disabled_person.register(data_send).then((e) => history.push("/"))
                .catch(err => alert(err))
        }
        else {
            setToSendData(data)
        }


    }

    function getHealthCenter() {
        heatlh_centers ? console.log() :
        api.health_center.get().then((res) => {
            console.log(res.data)
            setHealthCenter(res.data)
            
        })
            .catch(err => console.log(err))
    }
    return <s.RegisterPerson>
        <s.Title>{title}</s.Title>

        <form onSubmit={handleSubmit(onSubmit)}>
            <TypeForm
                backBtnClass="back" backBtnText="Anterior"
                nextBtnClass="next" nextBtnText="Próximo"
                submitBtnClass="register" submitBtnText="Cadastrar"
                onSubmit={onSubmit}>

                <s.WraperFields>
                <s.Field>
                <label>Posto de Saúde</label>

                    <select className="select-custom" onClick={getHealthCenter} {...register("disabled_person.health_center_attributes.id")}>
                        {heatlh_centers ? heatlh_centers.map(center=>{
                            console.log(center._id.$oid)
                            return <option key={center._id.$oid} value={center._id.$oid}>{center.name}</option>
                        })
                    : <option value="caregando">Selecionar</option>}
                        
                    </select>
                    </s.Field>.
                </s.WraperFields>


                <s.WraperFields>
                    <s.Field>

                        <label>name</label>
                        <input name="name"
                            {...register("disabled_person..name")} />
                        <s.Errors>
                            {errors.name && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>CPF</label>
                        <input name="cpf"
                            {...register("disabled_person..cpf")} />
                        <s.Errors>
                            {errors.cpf && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>Email</label>
                        <input name="email"
                            {...register("disabled_person..email")} />
                        <s.Errors>
                            {errors.email && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>
                </s.WraperFields>

                <s.WraperFields>
                    <s.Field>

                        <label>born_date</label>
                        <input name="born_date"
                            {...register("disabled_person..born_date")} />
                        <s.Errors>
                            {errors.born_date && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>father_name</label>
                        <input name="father_name"
                            {...register("disabled_person..father_name")} />
                        <s.Errors>
                            {errors.father_name && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>mother_name</label>
                        <input name="mother_name"
                            {...register("disabled_person..mother_name")} />
                        <s.Errors>
                            {errors.mother_name && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>
                </s.WraperFields>

                <s.WraperFields>
                    <s.Field>

                        <label>card_id</label>
                        <input name="card_id"
                            {...register("disabled_person.card_id")} />
                        <s.Errors>
                            {errors.card_id && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>sus_id</label>
                        <input name="sus_id"
                            {...register("disabled_person.sus_id")} />
                        <s.Errors>
                            {errors.sus_id && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>scholarity</label>
                        <input name="scholarity"
                            {...register("disabled_person.scholarity")} />
                        <s.Errors>
                            {errors.scholarity && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>
                </s.WraperFields>



                <s.WraperFields>
                    <s.Field>

                        <label>work_card_id</label>
                        <input name="work_card_id"
                            {...register("disabled_person.work_card_id")} />
                        <s.Errors>
                            {errors.work_card_id && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>acquisition_form</label>
                        <input name="acquisition_form"
                            {...register("disabled_person.acquisition_form")} />
                        <s.Errors>
                            {errors.acquisition_form && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>society_limitation</label>
                        <input name="society_limitation"
                            {...register("disabled_person.society_limitation")} />
                        <s.Errors>
                            {errors.society_limitation && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>
                </s.WraperFields>




                <s.WraperFields>
                    <s.Field>

                        <label>social_situation</label>
                        <input name="social_situation"
                            {...register("disabled_person.social_situation")} />
                        <s.Errors>
                            {errors.social_situation && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>infos_add</label>
                        <input name="infos_add"
                            {...register("disabled_person.infos_add")} />
                        <s.Errors>
                            {errors.infos_add && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>deficiency_type</label>
                        <input name="deficiency_type"
                            {...register("disabled_person.deficiency_type")} />
                        <s.Errors>
                            {errors.deficiency_type && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>
                </s.WraperFields>
                <s.WraperFields>
                    <h2>Endereço</h2>
                    <s.Field>

                        <label>cep</label>
                        <input name="cep"
                            {...register("disabled_person.address_attributes.cep")} />
                        <s.Errors>
                            {errors.cep && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>
                    <s.Field>

                        <label>street</label>
                        <input name="street"
                            {...register("disabled_person.address_attributes.street")} />
                        <s.Errors>
                            {errors.street && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>number</label>
                        <input name="number"
                            {...register("disabled_person.address_attributes.number")} />
                        <s.Errors>
                            {errors.number && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>neighborhood</label>
                        <input name="neighborhood"
                            {...register("disabled_person.address_attributes.neighborhood")} />
                        <s.Errors>
                            {errors.neighborhood && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>city</label>
                        <input name="city"
                            {...register("disabled_person.address_attributes.city")} />
                        <s.Errors>
                            {errors.city && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>state</label>
                        <input name="state"
                            {...register("disabled_person.address_attributes.state")} />
                        <s.Errors>
                            {errors.state && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>


                    <s.Field>
                        <label>country</label>
                        <input name="country"
                            {...register("disabled_person.address_attributes.country")} />
                        <s.Errors>
                            {errors.country && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>



                    <s.Field>
                        <label>complement</label>
                        <input name="complement"
                            {...register("disabled_person.address_attributes.complement")} />
                        <s.Errors>
                            {errors.complement && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>


                </s.WraperFields>
                <s.WraperFields>
                    <h2>Telefone</h2>
                    <s.Field>

                        <label>number</label>
                        <input name="phone_number"
                            {...register("disabled_person.phones_attributes.number")} />
                        <s.Errors>
                            {errors.phone_number && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>

                    <s.Field>
                        <label>type</label>
                        <input name="number"
                            {...register("disabled_person.phones_attributes.type")} />
                        <s.Errors>
                            {errors.number && <span>Não pode ficar em branco.</span>}
                        </s.Errors>
                    </s.Field>



                </s.WraperFields>


            </TypeForm>






            {/* <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="submit" /> */}
        </form>
    </s.RegisterPerson>
}