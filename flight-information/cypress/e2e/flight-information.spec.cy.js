/// <reference types="cypress" />

import { TodoPage } from './page-objects/todo-page';
const FLIGHT_INFORMATION_URL = "https://flight-information.vercel.app/";

const NON_EXISTENT_AIRPORT = 'XXX';
const LHR_AIRPORT = "LHR";
const LHR_INFO = [
  'ID: 4181',
  'iata: LHR',
  'icao: EGLL',
  'Name: Heathrow Airport',
  'Location: London, England, United Kingdom'
];
const LHR_ADDITIONAL_INFO = [
  'Phone: +44 844 335 1801',
  'GPS Coordenates: 51.470024, -0.4542955',
  'ID: 60'

]

describe("buscala.tv tests", () => {
  const todoPage = new TodoPage();
  beforeEach(() => {
    todoPage.navigate(FLIGHT_INFORMATION_URL);

    todoPage.validateExpected("h1","have.text","Airport Information")
    todoPage.validateExpected("h5","have.text","No airport code provided")
   
  })
  it(`should find ${LHR_AIRPORT} info` , () =>{
    
    todoPage.addTodo("#floatingInput", LHR_AIRPORT);
    todoPage.clickElement('.search');
    
    for (let i = 1; i <= 5; i++){
      todoPage.validateExpected(`.airport__iata > :nth-child(${i})`,'have.text', LHR_INFO[i - 1]);

    }
    todoPage.validateExpected('.airport__address > :nth-child(3)', 'have.text', 'Longford, Greater London, England');
    todoPage.validateExpected(':nth-child(3) > h5', 'have.text', 'Country: GB, United Kingdom');

    for (let j = 1; j <= 3; j++){
      todoPage.validateExpected(`:nth-child(3) > .airport__details > :nth-child(${j})`,'have.text', LHR_ADDITIONAL_INFO[j - 1]);

    }
    todoPage.validateExpected('span > a', 'have.text', ' http://www.heathrow.com/');
    
  });
  it(`should not find ${NON_EXISTENT_AIRPORT} info` , () =>{
    
    todoPage.addTodo("#floatingInput", NON_EXISTENT_AIRPORT);
    todoPage.clickElement('.search')

    todoPage.validateExpected("h5","have.text","No airport found")

  });

})
