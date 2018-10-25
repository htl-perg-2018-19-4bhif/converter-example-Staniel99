//process.argv[2] == value
//process.argv[3] == unit1
//process.argv[4] == constant "to"
//process.argv[5] == unit2

//known units
//the length units m (meters), cm (centimeters) and mm (millimeters)
//the weight units kg (kilograms) and g (grams)

if(process.argv.length==6 && !isNaN(process.argv[2]) && process.argv[2]>0 && (process.argv[3]=="m" || process.argv[3]=="cm" || process.argv[3]=="mm"  || process.argv[3]=="kg"  || process.argv[3]=="g") && process.argv[4]=="to" && (process.argv[5]=="m" || process.argv[5]=="cm" || process.argv[5]=="mm"  || process.argv[5]=="kg"  || process.argv[5]=="g")){
    if(process.argv[3]==process.argv[5]){
        console.log(process.argv[2]+" "+process.argv[3]+" are "+process.argv[2]+" "+process.argv[5]);
    }else if((process.argv[3]=="m"&&process.argv[5]=="mm")||(process.argv[3]=="kg"&&process.argv[5]=="g")){
        console.log(process.argv[2]+" "+process.argv[3]+" are "+process.argv[2]*1000+" "+process.argv[5]);
    }else if((process.argv[5]=="m"&&process.argv[3]=="mm")||(process.argv[5]=="kg"&&process.argv[3]=="g")){
        console.log(process.argv[2]+" "+process.argv[3]+" are "+process.argv[2]/1000+" "+process.argv[5]);
    }else if(process.argv[3]=="cm"&&process.argv[5]=="mm"){
        console.log(process.argv[2]+" "+process.argv[3]+" are "+process.argv[2]*10+" "+process.argv[5]);
    }else if(process.argv[3]=="cm"&&process.argv[5]=="m"){
        console.log(process.argv[2]+" "+process.argv[3]+" are "+process.argv[2]/100+" "+process.argv[5]);
    }else if(process.argv[3]=="m"&&process.argv[5]=="cm"){
        console.log(process.argv[2]+" "+process.argv[3]+" are "+process.argv[2]*100+" "+process.argv[5]);
    }else if(process.argv[3]=="mm"&&process.argv[5]=="cm"){
        console.log(process.argv[2]+" "+process.argv[3]+" are "+process.argv[2]/10+" "+process.argv[5]);
    }else{
        console.log("Invalid parameters");
    }
}else{
    console.log("Invalid parameters");
}

