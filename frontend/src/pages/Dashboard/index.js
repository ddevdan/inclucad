import React, { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import * as s from "./style";
import TypeForm from "react-typeform";
import api from "../../api/api";
import Select from "react-select";
import VerticalBar from "../../components/graphs/VerticalBar";
import AuthContext from "../../contexts/auth";
import StatusNotification from "../../components/StatusNotification";

function Dashboard(props) {
  const { title, GoBack} = props;
  const [charts, setCharts] = useState({})
  const [currentCity, setCurrentCity] = useState("paulista")
  const [currentState, setCurrentState] = useState("recife")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = `INCLUCAD - Dashboard`;
    api.graph.barChart.get(currentCity)
    .then((res)=>{
      let charts_data = {}
      const charts = res.data

      charts.forEach(chart => {
        switch (chart.type) {
          case "bar_chart":
            charts_data[chart.type] = chart.data[0]
            break;
        
          default:
            break;
        }
      }
      );
      setLoading(!loading)
      setCharts(charts_data)



    })
    .catch(err=> console.log(err))

    
  },[currentCity]);

  const changeCity = (e) =>{
    const value = e.target.value
    setCurrentCity(value)
    setLoading(!loading)
  }
  return (
  
    <s.Dashboard>
      <GoBack/>
      <s.Title>Painel de Controle</s.Title>
      {loading ? <StatusNotification text="Carregando..." marginTop="120px"/> :
      <>
      <s.WraperFields>
        <s.Field>
      <label>Cidade</label>
      <s.Select className="select-custom" onChange={changeCity} value={currentCity}>
        <option value="paulista">Paulista</option>
        <option value="recife">Recife</option>
      </s.Select>
      </s.Field>
      </s.WraperFields>
      {loading ? <p>Carrengando...</p> : 
      <VerticalBar currentCity={currentCity} data={charts.bar_chart}/>}
   </> }
    </s.Dashboard> 
  )
}

export default Dashboard;


