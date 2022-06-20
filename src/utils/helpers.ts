export function getTableCellValue(input:any): any {
    if(typeof input === 'object' && input?.hasOwnProperty('switchValue')){
        return input.displays[`${input.switchValue}`]
    }else if(!!input?.name){
        return input?.name;
    }
    return input
}

export function getTableDataValue(input:any): any {
    if(typeof input === 'object' && input?.hasOwnProperty('switchValue')){
        return input.switchValue
    }else if(!!input?.id){
        return input?.id;
    }
    return input
}

export function getFormValueKey(input:string): string {
    let key = lowerCasedFirstLetter(input);
    if(key === "knownErrorTypeId") return "type"
    return key;
}

function lowerCasedFirstLetter(input: string): string {
    return input.charAt(0).toLowerCase() + input.slice(1);
  }