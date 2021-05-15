import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import EvaluationCard from "../../components/EvaluationCard";
import api from "../../api/api";
import * as s from "./style";
import StatusNotification from "../../components/StatusNotification";

function Evaluations(props) {
  let match = useRouteMatch();

  const { title, GoBack } = props;

  const [undoneSearch, setUndoneSearch] = useState("");
  const [doneSearch, setDoneSearch] = useState("");
  const [evaluations, setEvaluations] = useState([]);
  const [undone_default_data, set_undone_default_data] = useState([]);
  const [done_default_data, set_done_default_data] = useState([]);
  const [loading, setLoading] = useState(true)
  // const undone_default_data = evaluations.filter(undone_filter)
  // const done_default_data = evaluations.filter(done_filter)

  const [undone, setUndone] = useState(undone_default_data);
  const [done, setDone] = useState(done_default_data);

  function undone_filter(value) {
    return value.done === false;
  }

  function done_filter(value) {
    return value.done === true;
  }

  function searchUndone(e) {
    setUndoneSearch(e.target.value);
    const value = e.target.value;

    if (value.length !== 0) {
      return setUndone(
        undone_default_data.filter((ev) =>
          ev.name && ev.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    return setUndone(undone_default_data);
  }

  function searchDone(e) {
    setDoneSearch(e.target.value);
    const value = e.target.value;
    
    if (value.length !== 0) {
      return setDone(
        done_default_data.filter((ev) =>
          ev.name && ev.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    return setDone(done_default_data);
  }

  useEffect(() => {
    document.title = `INCLUCAD - Avaliações`;
    api.evaluations.get().then((response) => {
      setEvaluations(response.data);
      const data = response.data;
      let done = []
      let undone = []
      data.forEach(element => {
        switch (element.evaluation && element.evaluation.done) {
          case true:
            done.push(element)
            break;
          default:
            undone.push(element)
            break;
        }
        setLoading(!loading)
      });
      // undone = data.filter(undone_filter);
      // done = data.filter(done_filter);
      set_undone_default_data(undone);
      set_done_default_data(done);
      setUndone(undone);
      setDone(done);

      // console.log(undone);
    });
  }, []);

  const NotFound = () => <s.NotFound>NADA ENCONTRADO</s.NotFound>;

  return (
    <s.Evaluations>
      <GoBack></GoBack>

      <s.Title>{title}</s.Title>
      {loading ? <StatusNotification text="Carregando..." marginTop="120px"/> : 
      <>
      <s.WrapECards>
        <h2>Pendentes</h2>
        <input
          name="undone_search"
          value={undoneSearch}
          onChange={searchUndone}
          placeholder="Buscar por nome"
        />
        {undone.length === 0 ? (
          <NotFound />
        ) : (
          undone.map((d, index) => {
            index === 0 && console.log(d)
            return (
              <EvaluationCard
                id={d.evaluation && d.evaluation._id.$oid}
                status={d.evaluation && d.evaluation.done}
                name={d && d.name}
                cpf={d && d.cpf}
                evaluated_at={d.evaluation && d.evaluation.evaluated_at.toUpperCase()}
                key={d.evaluation && d.evaluation._id.$oid}
                match={`${match.url}/${d.evaluation && d.evaluation._id.$oid}`}
              />
            );
          })
        )}
      </s.WrapECards>

      <s.WrapECards>
        <h2>Concluídas</h2>
        <input
          name="done_search"
          value={doneSearch}
          onChange={searchDone}
          placeholder="Buscar por nome"
        />
        {done.length === 0 ? (
          <NotFound />
        ) : (
          done.map((d) => {
            return (
              <EvaluationCard
              id={d.evaluation._id && d.evaluation._id.$oid}
              status={d.evaluation.done}
              name={d && d.name}
              cpf={d && d.cpf}
              evaluated_at={d.evaluation.evaluated_at && d.evaluation.evaluated_at.toUpperCase()}
              key={d.evaluation._id && d.evaluation._id.$oid}
              match={`${match.url}/${d.evaluation._id && d.evaluation._id.$oid}`}
            />
            );
          })
        )}
      </s.WrapECards> 
      </>}
    </s.Evaluations>
  );
}

export default Evaluations;
