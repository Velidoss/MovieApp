export const validate = value =>{
    if (value) return undefined;

    return "Field is required";
};

export const validateLength = (minLength, maxLength)=>{
    return (value)=>{
        if (value.length < minLength){
            return `Minimal length is ${minLength} symbols`;
        }
        if(value.length > maxLength){
            return `Maximum length is ${maxLength} symbols`;
        }
    }
}