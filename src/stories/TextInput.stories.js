import {TextInput, TextInputError} from "../components/TextInput";

export default{
    title: 'Form/TextInput',
    component: {TextInput, TextInputError},
}

export const TextInputExample  = (args) => <TextInput {...args}/>;

TextInputExample.args ={
    label: "Nombre*",
    id: "Nombre",
    }

export const TextInputErrorExample = (args) => <TextInputError {...args}/>;

TextInputErrorExample.args ={
    label: "Correo electrónico*",
    id: "Correo Electrónico",
    warning: "Recuerda completar este campo."
}

