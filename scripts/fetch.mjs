export const getDegreeList = async  (url) =>{
    try{
        let response =  await fetch(url);

        let result = new Result( response.ok, response.status, response.statusText);

        if (response.ok)
            result.data = await response.json();

        return result;
    } catch (err){
        return err;
    }




}

class Result {
    constructor(isValid, statusCode, message) {
        this.isValid = isValid;
        this.statusCode = statusCode;
        this.message = message;
    }
}