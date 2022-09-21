import Task from "../components/Task";

export default{
    title: 'Task',
    component: Task,
}

const Template = (args) => <Task {...args}/>

export const TaskExample = Template.bind({});

TaskExample.args ={
    id: 'exampleTask',
    title: 'Esta es una task de ejemplo',
    description: 'Esta es la descripción de mi tarea de ejemplo',
    tag: 'Proyecto A'
}