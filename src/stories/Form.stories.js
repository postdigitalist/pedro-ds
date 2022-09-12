import { RadioField, CheckboxField } from "../components/RadiosCheckboxes";
export default {
    title: 'Form',
    component: {RadioField, CheckboxField},
}

export const RadioFieldExample = (args) => <RadioField {...args}/>;

RadioFieldExample.args ={
    label: "Él/Elle",
    id: "PronombreEl",
}

export const CheckboxFieldExample = (args) => <CheckboxField {...args}/>;

CheckboxFieldExample.args ={
    label: "Acepto los términos y condiciones",
    id: "TerminosCondiciones",
}

export const SelectorExample = (args) => <select name="cars" id="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>
</select>

export const InputExample = (args) => <input id="exampleInput" className="formInput" />