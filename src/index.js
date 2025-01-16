import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Use_effect_basic1 from "./Use_effect_hook/Use_effect_basic1";
import Use_effect_task2 from "./Use_effect_hook/Use_effect_task2";
import Basic1 from "./Mapping/Basic1";
import Use_state_basic1 from "./Use_state/Use_state_basic1";
import Use_state_basic2 from "./Use_state/Use_state_basic2";
import Use_state_basic3 from "./Use_state/Use_state_basic3";
import Mapping_task1 from "./Mapping/Mapping_task1";
import Mapping_task2 from "./Mapping/Mapping_task2";
import Mapping_Task3 from "./Mapping/Mapping_Task3";
import Mapping_task4 from "./Mapping/Mapping_task4";
import Mapping_task5 from "./Mapping/Mapping_task5";
import Props_task1 from "./Props/Props_task1";
import Props_task2 from "./Props/Props_task2";
import Prop_task2_3 from "./Props/Prop_task2_3";
import Props_task_4 from "./Props/Props_task_4";
import Prop_task_3 from "./Props/Prop_task_3";
import Props_task5 from "./Props/Props_task5";
import Appp from "./Single_Page_applications/Appp";
import Task1 from "./Single_Page_applications/Task1";
import Ternarybasic1 from "./Ternary/Ternarybasic1";
import Terinary_form from "./Ternary/Terinary_form";
import App_parent from "./Usecontext_hook/App_parent";
import Form_data_task from "./Form_data_getting/Form_data_task";
import Ternary_basic2 from "./Ternary/Ternary_basic2";
import Form_data_using_spreadoperator from "./Form_data_getting/Form_data_using_spreadoperator";
import Api_integration1 from "./Api_integration/Api_integration1";
import CityInput from "./Form_data_getting/CityInput";
import Api_integration_using_card from "./Api_integration/Api_integration_using_card";
import Api_using_carousel from "./Api_integration/Api_using_carousel";
import { Provider } from "react-redux";
import { store } from "./Redux_toolkit/store";
import UseReducer1 from "./Usereducer/UseReducer1";
import Usereducer2 from "./Usereducer/Usereducer2";
import UseReducer3 from "./Usereducer/UseReducer3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <div>
      <Provider store={store}>
        {/* <App /> */}
      </Provider>
    </div>
    {/* <Use_effect_basic1/> */}
    {/* <Use_effect_task2/> */}
    {/* <Basic1 /> */}
    {/* <Use_state_basic1/> */}
    {/* <Use_state_basic2/> */}
    {/* <Use_state_basic3/> */}
    {/* <Mapping_task1/> */}
    {/* <Mapping_task2/> */}
    {/* <Mapping_Task3/>
    <Mapping_task4/>
    <Mapping_task5/> */}
    {/* <Props_task1/> */}
    {/* <Props_task2/> */}
    {/* <Prop_task2_3/> */}
    {/* <Props_task_4/> */}
    {/* <Prop_task_3/> */}
    {/* <Props_task5/> */}
    {/* <Appp/> */}
    {/* <Task1/> */}
    {/* <Ternarybasic1/> */}
    {/* <Ternary_basic2/> */}
    {/* <Terinary_form/> */}
    {/* <App_parent/> */}
    {/* <Form_data_task/> */}
    {/* <Form_data_using_spreadoperator/> */}
    {/* <Api_integration1/> */}
    {/* <CityInput/> */}
    {/* <Api_integration_using_card/> */}
    {/* <Api_using_carousel/> */}
    {/* <UseReducer1/> */}
    {/* <Usereducer2/> */}
    <UseReducer3/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
