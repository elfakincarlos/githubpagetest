//Menu desplegable
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Si el menú está abierto, lo colapsamos
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();  // Cierra el menú
      });
    });
  });
  

//Tabla de cambios
const tbody = document.getElementById("exchange_tbody");
const Exchanges = {
  "USD": 1,
  "AUD": 1.4817,
  "BGN": 1.7741,
  "CAD": 1.3168,
  "CHF": 0.9774,
  "CNY": 6.9454,
  "EGP": 15.7361,
  "EUR": 0.9013,
  "GBP": 0.7679
}

const currencies = {
  AED: "UAE Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillian Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia and Herzegovina Mark",
  BBD: "Barbados Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswana Pula",
  BYN: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLP: "Chilean Peso",
  CNY: "Chinese Renminbi",
  COP: "Colombian Peso",
  CRC: "Costa Rican Colon",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fiji Dollar",
  FKP: "Falkland Islands Pound",
  FOK: "Faroese Króna",
  GBP: "Pound Sterling",
  GEL: "Georgian Lari",
  GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  IMP: "Manx Pound",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Króna",
  JEP: "Jersey Pound",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgyzstani Som",
  KHR: "Cambodian Riel",
  KID: "Kiribati Dollar",
  KMF: "Comorian Franc",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Lao Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lanka Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Burmese Kyat",
  MNT: "Mongolian Tögrög",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan Córdoba",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Złoty",
  PYG: "Paraguayan Guaraní",
  QAR: "Qatari Riyal",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLE: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SSP: "South Sudanese Pound",
  STN: "São Tomé and Príncipe Dobra",
  SYP: "Syrian Pound",
  SZL: "Eswatini Lilangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistan Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Paʻanga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TVD: "Tuvaluan Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistani So'm",
  VES: "Venezuelan Bolívar Soberano",
  VND: "Vietnamese Đồng",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tālā",
  XAF: "Central African CFA Franc",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "West African CFA franc",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar"
};

/* Table Method 1 */
function showFiveExchanges() {
  clearTable();
  let count = 0;
  for (let [currency, value] of Object.entries(Exchanges)) {
      // Incrementar el contador
      count++;
      
      // Verificar si el contador es mayor que 5
      if (count > 5) break;

      // Crear una nueva fila
      let newRow = tbody.insertRow();

      // Crear una celda para la moneda
      let currencyCell = newRow.insertCell(0);
      currencyCell.textContent = currency;

      // Crear una celda para el valor
      let valueCell = newRow.insertCell(1);
      let value2 = value.toFixed(2);
      valueCell.textContent = value2;
  }
}
showFiveExchanges();

/* Table Method 2 */
function showAllExchanges() {
  clearTable();
  for(let [currency, value] of Object.entries(Exchanges)) {{
    if (Exchanges.hasOwnProperty(currency)) {
      let newRow = tbody.insertRow();

      let currencyCell = newRow.insertCell(0);
      currencyCell.textContent = currency;

      let valueCell = newRow.insertCell(1);
      let value2 = value.toFixed(2);
      valueCell.textContent = value2;
    }
  }}
}

/* Buttom Handler */
const tableBtn = document.getElementById("table_btn");
let isClicked = false;
function tblBtnHandler() {
  if (!isClicked) {
    showAllExchanges();
    isClicked = true;
    tableBtn.innerText = "Show Less";
  } else {
    showFiveExchanges();
    isClicked = false;
    tableBtn.innerText = "Show More";
  }
}

/* Table Cleaner */
function clearTable() {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

/* Currency Options*/
function setOptions(selectTag) {
  for (let code in currencies) {
    const option = document.createElement("option");
    option.value = code;
    option.text = `${code} - ${currencies[code]}`;
    selectTag.add(option);
  }
} 

function setCurrencyOptions() {
  const orderCurrSelect = document.getElementById("orderCurrSelect");
  const fromCurrency = document.getElementById("currency1");
  const toCurrency = document.getElementById("currency2");

  setOptions(orderCurrSelect);
  setOptions(fromCurrency);
  setOptions(toCurrency);

  // Establecer valores predeterminados
  orderCurrSelect.value = "USD";
  fromCurrency.value = "USD";
  toCurrency.value = "EUR";
}
setCurrencyOptions();

function calculateEx() {
  const respParr = document.querySelector(".resp_p_form");
  const amount = document.getElementById("amount");
  const curr1 = document.getElementById("currency1");
  const curr2 = document.getElementById("currency2");

  /* check the content of the amount input */
  if (/^\d+$/.test(amount.value)) {
    respParr.innerText = `${amount.value} ${curr1.value} = 10 ${curr2.value}`;
  } else {
    respParr.innerText = 'The "Amount" field contains invalid characters or is empty';
}
  /* peticion fetch */

}
