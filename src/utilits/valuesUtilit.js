export const required = (value) =>{
	if(value) return undefined;
	return 'обязательное поле';
}


export const maxLengthCreate = (maxLength) => (value = 0 ) =>{  
	if ( value.length >= maxLength) return `Максимальная длина сообщения ${maxLength}`
	return undefined 
}



