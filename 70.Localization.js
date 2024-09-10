//Section 70.1: Number formatting
//This is us method---jisse number ko find kiya gya hai.
const usNumberFormat = new Intl.NumberFormat('en-US');
const usNuber = usNumberFormat.format(98854889523655.25533);
//console.log(usNuber);

//This is es method ----jisse number ko find kiya gya hai.
const esNumberFormat = new Intl.NumberFormat('es-ES');
const esNuber = esNumberFormat.format(98854889523655.25533);
//console.log(esNuber);

//Section 70.2: Currency formatting
 const usCurrencyFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"});
 const usCurrency = usCurrencyFormat.format(100.10);
 //console.log(usCurrency);


 const esCurrencyFormat = new Intl.NumberFormat('es-ES', {style: 'currency', currency: "EUR"});
 const esCurrency = esCurrencyFormat.format(100.10);
 //console.log(esCurrency);

 //Section 70.3: Date and time formatting
 const usDateFormate = new Intl.DateTimeFormat('en-US');
 const usDate = usDateFormate.format(new Date('2024-08-11'));
 //console.log(usDate);


 const esDateFormate = new Intl.DateTimeFormat('es-ES');
 const esDate = esDateFormate.format(new Date('2024-08-11'));
 //console.log(esDate);

 //=================================================================================
 