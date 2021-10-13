import React from 'react';


export const withConponentForm = (ComponentForm)=>{
	class FormComponentClass extends React.Component{
		render=()=>{
			// какая-то логика которая нужна всем этим компоненртам
			return (

				<ComponentForm {...props}  />
			)
		}

	}	
	return  FormComponentClass
}