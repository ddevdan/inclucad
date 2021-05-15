import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import * as s from "./style";
import TypeForm from "react-typeform";
import api from "../../api/api";
import Select from "react-select";
import StatusNotification from '../../components/StatusNotification'

function Evaluate(props) {
  const { title, GoBack } = props;
  let { id } = useParams();
  const [toSendData, setToSendData] = useState({});
  const [loading, setLoading] = useState(true);
  const [disabledPerson, setDisabledPerson] = useState({});
  const [evaluation, setEvaluation] = useState({});
  const [cifCodes, setCifCodes] = useState({});
  const [cifCodesEvaluation, setCifCodesEvaluation] = useState([]);
  const history = useHistory();
  
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const searchCode = (pass) => {
    api.cif_codes.search(pass).then((response) => {
      console.log(response);
    });
  };
  const onSubmit = (data) => {
    console.log(data["evaluation"] && data["evaluation"]["deficiency_type"]);
    const born_with = data.evaluation && data.evaluation.born_with;
    const cif_codes = data.evaluation && data.evaluation.cif_codes;
    console.log(cif_codes)
    const deficiency_type = data.evaluation && data.evaluation.deficiency_type;
    let structure = {
      evaluation: {
        disabled_type: deficiency_type,
        born_with: born_with,
        cif_codes: cif_codes,
      },
    };

    const payload = { id: id, data: structure };
    
    if (data.target){
      console.log("IF", data)
      let data_send = toSendData;
      console.log(data_send)
      api.evaluations.update(data_send).then(response => {
        console.log(response)
        history.push("/?status=true")
      }).catch(err => console.log("ERROR", err));
    }else{
      setToSendData(payload)
      console.log("ELSE", data)
    }

  };

  useEffect(() => {
    document.title = `INCLUCAD - Avaliações`;
    api.evaluations.show(id).then((response) => {
      const data = response.data;
      console.log(data)
      setDisabledPerson(data && data.disabled_person);
      setEvaluation(data);
      // setCifCodesEvaluation(data.cif_codes && data.cif_codes);
      setCifCodesEvaluation(data.cif_codes)
      console.log(data)
      setLoading(!loading)
      
    });
    

    api.cif_codes
      .get()
      .then((response) => {
        const codes = response.data;
        let codes_filtred_array = [];
        codes.forEach((code) => {
          let codeHash = { value: "", label: "" };
          codeHash.value = code.code;
          codeHash.label = `${code.code} - ${code.description}`;
          codes_filtred_array.push(codeHash);
        });
        setCifCodes(codes_filtred_array);
      })
      .catch((err) => console.log(err));
  }, []);

  const defiency_type = [
    ["VISUAL", "visual"],
    ["FÍSICA", "física"],
    ["INTELECTUAL", "intelectual"],
    ["AUDITIVA", "auditiva"],
    ["OSTOMIA", "ostomia"],
    ["MULTIPLAS DEFICIÊNCIAS", "multiplas"],
  ];

  return (
    <s.Form>
      <GoBack />
      <s.wrapTitle>
        <s.Title>{title}</s.Title>
        {loading ? <></> :
        <>
        <s.PacientName className="title__name">
          {disabledPerson && disabledPerson.name} -{disabledPerson && disabledPerson.cpf}
        </s.PacientName>
        </>}
      </s.wrapTitle>
      {loading ? <StatusNotification text="Carregando..." marginTop="120px"/> :
      <>
      {evaluation && !evaluation.done ? <form onSubmit={handleSubmit(onSubmit)}>
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
            <s.Field key={evaluation && evaluation.cif_codes}>
              <label>Código CIF</label>
              <Controller
                name="evaluation.cif_codes"
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    key={field.value}
                    options={cifCodes}
                    {...field}
                    required
                    defaultValue={""}
                    className="select__search"
                    closeMenuOnSelect={false}
                    isMulti
                  />
                )}
              />

              <s.Errors>
                {errors.name && <span>Não pode ficar em branco.</span>}
              </s.Errors>
            </s.Field>
          </s.WraperFields>

          <s.WraperFields>
            <s.Field key={evaluation && evaluation.disabled_type}>
              <label>Tipo de Deficiência</label>
              <select
                className="select-custom"
                defaultValue={evaluation && evaluation.disabled_type}
                {...register("evaluation.deficiency_type", { required: true })}
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

            <s.Field key={evaluation && evaluation.born_with}>
              <label>Adquirida?</label>
              <select
                className="select-custom"
                defaultValue={evaluation && evaluation.born_with}
                {...register("evaluation.born_with", { required: true })}
              >
                <option value="">Selecionar</option>
                {[
                  ["SIM", true],
                  ["NÃO", false],
                ].map((def) => {
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

      </form> : 
      <s.ReadOnlyInfos>
      <s.ReadOnlyField><span>CIF CODE:</span> 
      {cifCodesEvaluation && cifCodesEvaluation.map( element => {
         
           return <s.CodeCif>{`${element.code} - ${element.description}`}</s.CodeCif>
      })}
          </s.ReadOnlyField>
      <s.ReadOnlyField><span>TIPO DE DEFICIÊNCIA: </span>{evaluation && evaluation.disabled_type.toUpperCase()}</s.ReadOnlyField>
      <s.ReadOnlyField><span>ADQUIRIDA?</span> {evaluation && evaluation.born_with ? "SIM" : "NÃO"}</s.ReadOnlyField>
      
      </s.ReadOnlyInfos>
     
      }</>}
    </s.Form>
  );
}

export default Evaluate;
