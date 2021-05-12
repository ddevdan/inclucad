import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import * as s from "./style";
import TypeForm from "react-typeform";
import api from "../../api/api";
import Select from "react-select";

function Visualize(props) {
  const { title } = props;
  

  return (
    <s.Title>{title}</s.Title>
  )
}

export default Visualize;
