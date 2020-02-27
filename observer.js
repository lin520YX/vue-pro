
let arrayProto = Array.prototype;
let proto = Object.create(arrayProto);
['push','shift','splice'].forEach(method=>{
    proto[method]=function(...params){
        let inserted;
        switch(method){
            case 'push':
            case 'unshift':
                inserted = params;
                break;
            case 'splice':
                inserted = args.slice(2);
            default:break;
        }
        ArrayObserver(inserted);
        arrayProto[method].call(this,...params);
    }
})
function ArrayObserver(value){
    for(let i = 0;i<value.length;i++){
        let item = value[i];
        observer(item)
    }
}
function observer(value){
    if(typeof value !== 'object'|| value == null){
        return value
    }
    if(Array.isArray(value)){
        Object.setPrototypeOf(value,proto);
        ArrayObserver(value)
    }else{
        for(let key of value){
            defineReactive(value,key,value[key])
        }
    }
    
}
function defineReactive(obj,key,value){
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            return value;
        },
        set(newValue){
            if(newValue!==value){
                observer(newValue)
                console.log('refresh view');
                value  = newValue;
            }
        }
    })
}