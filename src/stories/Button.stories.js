import Button from '../components/Button'
import { MoreHorizontal, PlusCircle, Trash} from 'react-feather';
export default {
    title: "Navigation/Button",
    component: Button,
    argTypes: {
        icon:{
          options: ['PlusCircle', 'Trash', 'MoreHorizontal'],
          mapping: {
            PlusCircle: PlusCircle,
            Trash: Trash,
            MoreHorizontal: MoreHorizontal,
          },
        },
      },
}

const Template = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  primary: true,
   square: false,
   small: false,
   disabled: false,
   children: "Hello",
   icon: PlusCircle,
};

Secondary.args = {
secondary: true,
   square: false,
   small: false,
   disabled: false,
   children: "Hello",
   icon: PlusCircle,
};

