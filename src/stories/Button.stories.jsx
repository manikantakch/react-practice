import React from 'react';
import Button from '../components/Button';

export default {
    title:"Button",
    component:Button,
   
    argTypes: {
        backgroundColor: { control: "color" },
        onClick: { action: "clicked" },

       
    }
}

export const primary = {
    render:(args)=><Button {...args} />,
    args: {
        children:"Click me",
        primary:true,
        size:"small",
      
    }
}
// primary.play = async ({ args, canvasElement }) => {
//       const canvas = within(canvasElement);
//       await userEvent.click(canvas.getById("button"));
//       await expect(args.onClick).toHaveBeenCalled();
//      };

export const secondary = {
    render:(args)=><Button {...args} />,
    args: {
        children:"Click me",
        primary:false,
        size:"small",
       
        
        
    }
}
export const small = {
    render:(args)=><Button {...args} />,
    args: {
        children:"Click me",
        primary:false,
        size:"small",
        

        
    }
}
export const medium = {
    render:(args)=><Button {...args} />,
    args: {
        children:"Click me",
        primary:true,
        size:"medium",
       
        
    }
}

export const large = {
    render:(args)=><Button {...args} />,
    args: {
        children:"Click me",
        primary:true,
        size:"large"
        
    }
}