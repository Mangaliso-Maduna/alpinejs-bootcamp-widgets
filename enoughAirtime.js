function enoughAirtime(usage,airtimeAvail){
    var usageItems=usage.split(',');
    var calls=0;
    var smses=0;
    var bundles=0;
    for(var i=0; i<usageItems.length;i++){
      if(usageItems[i].trim()=="call"){
        calls=calls+1.88;
      }else if(usageItems[i].trim()=="data"){
        bundles=bundles+12;
      }else if(usageItems[i].trim()=="sms"){
        smses=smses+0.75;
      }
    }
    var totalusage=calls+bundles+smses;
    airtimeAvail=airtimeAvail-totalusage;
    if(airtimeAvail<=0)
      return "R0.00"
     else
       return "R"+airtimeAvail.toFixed(2);
  }