import Tag from "../components/Tag";


export default{
    title: 'Text/Tag',
    component: Tag,
}

const Template = (args) =>  <Tag {...args}/>
  
  export const TagNoIcon = Template.bind({});
  TagNoIcon.args = {
   color: "gray",
   children: "Proyecto inactivo"
  };



