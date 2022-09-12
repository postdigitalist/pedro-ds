import ProgressBar from "../components/Progress";
export default{
    title: 'Progress/ProgressBar',
    component: ProgressBar,
}
const Template = (args) => <ProgressBar {...args}/>

export const ProgressBarExample = Template.bind({});

ProgressBarExample.args={
    progress: 80,
}