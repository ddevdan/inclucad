import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import * as s from "./style";
import TypeForm from "react-typeform";
import api from "../../api/api";

function Evaluate(props) {
  const { title } = props;
  let { id } = useParams();
  const [toSendData, setToSendData] = useState({});
  const [disabledPerson, setDisabledPerson] = useState({});
  const [evaluation, setEvaluation] = useState({});
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    console.log(data);
    // if (data.target) {
    //   let data_send = toSendData;
    //   data_send["disabled_person"]["phones_attributes"] = [
    //     toSendData["disabled_person"]["phones_attributes"],
    //   ];
    //   api.disabled_person
    //     .register(data_send)
    //     .then((e) => history.push("/"))
    //     .catch((err) => alert(err));
    // } else {
    //   setToSendData(data);
    // }
  };

  useEffect(() => {
    document.title = `INCLUCAD - Avaliações`;
    api.evaluations.show(id).then((response) => {
      const data = response.data;
      setDisabledPerson(data.disabled_person);
      setEvaluation(data);
    });
  }, []);

  const defiency_type = [
    ["VISUAL", "visual"],
    ["FÍSICA", "fisica"],
    ["INTELECTUAL", "intelectual"],
    ["AUDITIVA", "auditiva"],
    ["OSTOMIA", "ostomia"],
    ["MULTIPLAS DEFICIÊNCIAS", "multiplas"],
  ];



  return (
    <s.Form>
      <s.wrapTitle>
        <s.Title>{title}</s.Title>
        <s.PacientName className="title__name">
          {disabledPerson.name} - 
          {disabledPerson.cpf}
        </s.PacientName>
      </s.wrapTitle>
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
              <label>Código CIF</label>
              <input
                placeholder="Pesquisar..."
                name="name"
                defaultValue={evaluation.cif_code}
                {...register("evaluation.cif_code")}
              />
              <s.Errors>
                {errors.name && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>

          </s.WraperFields>

          <s.WraperFields>
          <s.Field>
              <label>Tipo de Deficiência</label>
              <select
                className="select-custom" defaultValue={evaluation.disabled_type}
                {...register("evaluation.deficiency_type")}
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

            <s.Field>
              <label>Adquirida?</label>
              <select
                className="select-custom" defaultValue={evaluation.disabled_type}
                {...register("evaluation.born_with")}
              >
                <option value="">Selecionar</option>
                {[["SIM", true], ["NÃO", false]].map((def) => {
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

          
        </TypeForm>

        {/* <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="submit" /> */}
      </form>
    </s.Form>
  );
}

export default Evaluate;
