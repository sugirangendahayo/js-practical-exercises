function convertNullableValues(obj){
  for(let key in obj){

    // obj[key] = obj[key] === null ? 0 : obj[key] === undefined ? "" : obj[key];

    if(obj[key] === null){
        obj[key] = 0;
    }
    else if(obj[key] === undefined){
        obj[key] = "";
    }
  }
  return obj;
}

const data = {

    name: "John",
    age: null,
    city: undefined,
    country: "USA"
}

const convertedData = convertNullableValues(data);
console.log(convertedData);