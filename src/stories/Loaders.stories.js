import { SavingProgress, SavedProgress, GenericWheel } from "../components/Loaders";
export default {
    title: "Progress/Loaders",
    component: {SavingProgress, SavedProgress, GenericWheel},
}

export const SavingInProgress = (args) => 
<SavingProgress {...args}/>
;

SavingInProgress.args ={
    content: 'Cargando',
}
export const ProgressIsSaved = (args) => 
    <SavedProgress {...args}/>
    ;
ProgressIsSaved.args ={
    content: 'Progreso guardado',
}
    export const Wheel = () => 
        <GenericWheel/>
        ;