export const validateEmail = (email: string)=> {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat))
   return true;
else
   return false;
}

export const validateEmpty = (password: string) => {
    if(password === "")
    return true;
    else
    return false;
}