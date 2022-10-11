import Tag from "../components/Tag";
import { Star, XOctagon } from "react-feather";

export default{
    title: 'Text/Tag',
    component: Tag,
    argTypes: {
      icon:{
        options: ['XOctagon', 'Star'],
        mapping: {
          XOctagon: XOctagon,
          Star: Star
        },
      },
    },
}

const Template = (args) =>  <Tag {...args}/>
  
  export const TagNoIcon = Template.bind({});
  TagNoIcon.args = {
   color: "gray",
   children: "Proyecto inactivo"
  };

  export const TagWithIcon = Template.bind({});

  TagWithIcon.args = {
   color: "green",
   children: "Novedad",
   icon: Star
  };



