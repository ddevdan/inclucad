import React, { useState, useEffect } from "react";
import * as s from "./style";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import TypeForm from "react-typeform";
import api from "../../api/api";
export default function RegisterPerson({ title, GoBack }: props) {
  const [toSendData, setToSendData] = useState({});
  const [valueHealthCenter, setValueHealthCenter] = useState("");
  const [heatlh_centers, setHealthCenter] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    // se o data tem target, isso quer dizer que ele é o botão de submit
    if (data.target) {
      let data_send = toSendData;
      data_send["disabled_person"]["phones_attributes"] = [
        toSendData["disabled_person"]["phones_attributes"],
      ];
      api.disabled_person
        .register(data_send)
        .then((e) => history.push("/"))
        .catch((err) => alert(err));
    } else {
      setToSendData(data);
    }
  };

  function getHealthCenter() {
    heatlh_centers
      ? console.log("CONSOLE")
      : api.health_center
          .get()
          .then((res) => {
            setHealthCenter(res.data);
            const first_id = res.data[0]["_id"]["$oid"];
            console.log("first_id", typeof first_id);
            console.log("RESSSS", res.data[0]["_id"]["$oid"]);
          })
          .catch((err) => console.log(err));
  }

  const scholarity = [
    ["Ensino Fundamental Incompleto", "fundamental_incompleto"],
    ["Ensino Fundamental Completo", "fundamental_completo"],
    ["Ensino Médio Incompleto", "medio_incompleto"],
    ["Ensino Médio Completo", "medio_completo"],
    ["Ensino Superior Incompleto", "superior_incompleto"],
    ["Ensino Superior Completo", "superior_completo"],
  ];

  const defiency_type = [
    ["VISUAL", "visual"],
    ["FÍSICA", "fisica"],
    ["INTELECTUAL", "intelectual"],
    ["AUDITIVA", "auditiva"],
    ["OSTOMIA", "ostomia"],
    ["MULTIPLAS DEFICIÊNCIAS", "multiplas"],
  ];

  const social_situation = [
    ["A", "a"],
    ["B", "b"],
    ["C", "c"],
    ["D", "d"],
    ["E", "e"],
  ];


  const tel_type = [
    ["Celular", "celular"],
    ["Telefone", "telefone"]
  ];
  useEffect(() => {
    document.title = `INCLUCAD - Registrar`;
    getHealthCenter();
  }, []);

  return (
    <s.RegisterPerson>
      <GoBack></GoBack>
      <s.Title>{title}</s.Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TypeForm
          backBtnClass="back"
          backBtnText="Anterior"
          nextBtnClass="next"
          nextBtnText="Próximo"
          submitBtnClass="register"
          submitBtnText="Cadastrar"
          onSubmit={onSubmit}
        >
          <s.WraperFields>
            <s.Field>
              <label>Posto de Saúde</label>

              <select
                className="select-custom"
                {...register("disabled_person.health_center_attributes.id")}
              >
                <option value={valueHealthCenter}>Selecionar</option>
                {heatlh_centers ? (
                  heatlh_centers.map((center) => {
                    return (
                      <option key={center._id.$oid} value={center._id.$oid}>
                        {center.name}
                      </option>
                    );
                  })
                ) : (
                  <option value={valueHealthCenter}>Selecionar</option>
                )}
              </select>
            </s.Field>
            .
          </s.WraperFields>

          <s.WraperFields>
            <s.Field>
              <label>Nome</label>
              <input
                placeholder="Digite seu nome"
                name="name"
                {...register("disabled_person..name")}
              />
              <s.Errors>
                {errors.name && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>CPF</label>
              <input
                name="cpf"
                placeholder="xxx.xxx.xxx-xx"
                {...register("disabled_person..cpf")}
              />
              <s.Errors>
                {errors.cpf && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Email</label>
              <input
                placeholder="example@example.com"
                name="email"
                {...register("disabled_person..email")}
              />
              <s.Errors>
                {errors.email && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>
          </s.WraperFields>

          <s.WraperFields>
            <s.Field>
              <label>Data de Nascimento</label>
              <input
                type="date"
                name="born_date"
                className="select-custom"
                {...register("disabled_person..born_date")}
              />
              <s.Errors>
                {errors.born_date && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Nome do Pai</label>
              <input
                name="father_name"
                {...register("disabled_person..father_name")}
              />
              <s.Errors>
                {errors.father_name && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Nome da Mãe</label>
              <input
                name="mother_name"
                {...register("disabled_person..mother_name")}
              />
              <s.Errors>
                {errors.mother_name && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>
          </s.WraperFields>

          <s.WraperFields>
            <s.Field>
              <label>Número R.G</label>
              <input
                placeholder="Somente números"
                name="card_id"
                {...register("disabled_person.card_id")}
              />
              <s.Errors>
                {errors.card_id && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Carteira do SUS</label>
              <input name="sus_id" {...register("disabled_person.sus_id")} />
              <s.Errors>
                {errors.sus_id && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Escolaridade</label>
              <select
                className="select-custom"
                {...register("disabled_person.scholarity")}
              >
                <option value="">Selecionar</option>
                {scholarity.map((nivel) => {
                  return (
                    <option key={nivel[1]} value={nivel[1]}>
                      {nivel[0]}
                    </option>
                  );
                })}
              </select>
              <s.Errors>
                {errors.scholarity && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>
          </s.WraperFields>

          <s.WraperFields>
            <s.Field>
              <label>Carteira de Trabalho</label>
              <input
                name="work_card_id"
                {...register("disabled_person.work_card_id")}
              />
              <s.Errors>
                {errors.work_card_id && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Forma de Aquisição</label>
              <input
                name="acquisition_form"
                {...register("disabled_person.acquisition_form")}
              />
              <s.Errors>
                {errors.acquisition_form && (
                  <span>Não pode ficar em branco.</span>
                )}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Limitação da Sociedade</label>
              <input
                name="society_limitation"
                {...register("disabled_person.society_limitation")}
              />
              <s.Errors>
                {errors.society_limitation && (
                  <span>Não pode ficar em branco.</span>
                )}
              </s.Errors>
            </s.Field>
          </s.WraperFields>

          <s.WraperFields>
            <s.Field>
              <label>Situação Social</label>
              <select
                className="select-custom"
                {...register("disabled_person.social_situation")}
              >
                <option value="">Selecionar</option>
                {social_situation.map((nivel) => {
                  return (
                    <option key={nivel[1]} value={nivel[1]}>
                      {nivel[0]}
                    </option>
                  );
                })}
              </select>
              <s.Errors>
                {errors.social_situation && (
                  <span>Não pode ficar em branco.</span>
                )}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Informações Adicionais</label>
              <input
                name="infos_add"
                {...register("disabled_person.infos_add")}
              />
              <s.Errors>
                {errors.infos_add && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Tipo de Deficiência</label>
              <select
                className="select-custom"
                {...register("disabled_person.deficiency_type")}
              >
                <option value="">Selecionar</option>
                {defiency_type.map((def) => {
                  return (
                    <option key={def[1]} value={def[1]}>
                      {def[0]}
                    </option>
                  );
                })}
              </select>

              <s.Errors>
                {errors.deficiency_type && (
                  <span>Não pode ficar em branco.</span>
                )}
              </s.Errors>
            </s.Field>
          </s.WraperFields>
          <s.WraperFields>
            <h2>Endereço</h2>
            <s.Field>
              <label>CEP</label>
              <input
                name="cep"
                {...register("disabled_person.address_attributes.cep")}
              />
              <s.Errors>
                {errors.cep && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>
            <s.Field>
              <label>Rua</label>
              <input
                name="street"
                {...register("disabled_person.address_attributes.street")}
              />
              <s.Errors>
                {errors.street && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Número</label>
              <input
                name="number"
                {...register("disabled_person.address_attributes.number")}
              />
              <s.Errors>
                {errors.number && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Bairro</label>
              <input
                name="neighborhood"
                {...register("disabled_person.address_attributes.neighborhood")}
              />
              <s.Errors>
                {errors.neighborhood && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Cidade</label>
              <input
                name="city"
                {...register("disabled_person.address_attributes.city")}
              />
              <s.Errors>
                {errors.city && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Estado</label>
              <input
                name="state"
                {...register("disabled_person.address_attributes.state")}
              />
              <s.Errors>
                {errors.state && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>País</label>
              <input
                name="country"
                {...register("disabled_person.address_attributes.country")}
              />
              <s.Errors>
                {errors.country && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Complemento</label>
              <input
                name="complement"
                {...register("disabled_person.address_attributes.complement")}
              />
              <s.Errors>
                {errors.complement && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>
          </s.WraperFields>
          <s.WraperFields>
            <h2>Telefone</h2>
            <s.Field>
              <label>Número</label>
              <input
                name="phone_number"
                {...register("disabled_person.phones_attributes.number")}
              />
              <s.Errors>
                {errors.phone_number && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

            <s.Field>
              <label>Tipo</label>
              <select
                className="select-custom"
                {...register("disabled_person.phones_attributes.type")}
              >
                <option value="">Selecionar</option>
                {tel_type.map((type) => {
                  return (
                    <option key={type[1]} value={type[1]}>
                      {type[0]}
                    </option>
                  );
                })}
              </select>
             
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
  );
}
