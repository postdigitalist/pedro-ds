import Toast from "../components/Toast";
import { Info } from "react-feather";

export default{
    title: "Cards/Toast",
    component: Toast,
    argTypes: {
        icon:{
          options: ['Info'],
          mapping: {
            Info: Info,
          },
        },
      },
}

export const ToastExample = (args) => <Toast {...args}/>;

ToastExample.args ={
    title: "Este es el título de una tostada",
    icon: Info,
    children: "Para el proyecto Guía de agricultura Solarpunk 2022 Cooperativa Hermandad pidió 100,000 ARS A continuación, el detalle de cómo se asignarán esos recursos",
}