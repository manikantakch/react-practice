import TextInput from "../components/Textinput";


export default {

    title:'textinput',
    component:TextInput




}


export const Text = {
    render: (args) => <TextInput {...args}  />,
    args:{
      
        size:"medium",
        placeholder:"Enter Name",
        label:"Enter Name"


    }
  };
  export const Primary = {
    render: (args) => <TextInput {...args}   />,
    args: {
     
        primary:true,
        size:"medium",
        placeholder:"Enter Primary name",
        label:"Label Name"
    }
  };
  export const Secondary = {
    render: (args) => <TextInput {...args}   />,
  };
  export const Medium = {
    render: (args) => <TextInput {...args}   />,
  };

  export const Small = {
    render: (args) => <TextInput {...args}   />,

  }