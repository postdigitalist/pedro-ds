import { RadioField, CheckboxField } from "../components/RadiosCheckboxes";
export default {
    title: 'Form/Radio & Checkbox Fields',
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

