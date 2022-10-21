/**
* @name localstorage
* @description donne persistante dans le navigateur 
* @author ael
* @version 1.0
**/
export default {

    save(key, value){
        // on converti les données avant l insertion 
        localStorage.setItem(key,JSON.stringify(value) )
    },
    load(key){

        const value = localStorage.getItem(key);
        if(value != null ){
            //reconvertir le string json en valeur javascript 
            return JSON.parse(value);

        }
        return null;

    },
    delete(){}

    

}