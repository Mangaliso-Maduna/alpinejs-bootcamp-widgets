function totalPhoneBill(items){
  var bill=items.split(",")
  var sms=0;
  var calls=0;
  var totalCallsSms=0;
  for(var i=0; i<bill.length;i++){
    if(bill[i].trim()=="sms"){
      sms=sms+0.65;
    }else if(bill[i].trim()=="call"){
      calls=calls+2.75;
    }
  }
  totalCallsSms=sms+calls;
  return "R"+totalCallsSms.toFixed(2);
}