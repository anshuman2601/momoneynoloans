import React from 'react';
import Navbar from './Navbar';

function Study() {










  
const terms = [
  {title:"Employed",
  description:"This category includes those who at the time of the survey worked as paid employees, worked in their own business, or worked as unpaid workers in a family member’s business. It also includes those who were not working but who had jobs from which they were temporarily absent due to, for example, vacation, illness, or bad weather."},
  {title:"Unemployed",
  description:"This category includes those who were not employed, were available for work, and had tried to find employment during the previous four weeks. It also includes those waiting to be recalled after a temporary layoff."},
  {title:"Not in the labor force",
  description:"This category includes those who fit neither of the first two categories, such as a full-time student, homemaker, or retiree."},
  {title:"Natural rate of unemployment",
  description:"A long-run rate of unemployment around which short-run unemployment rates fluctuates"},
  {title:"Cyclical rate of unemployment",
  description:"Corresponds to deviations of unemployment from the natural rate"},
  {title:"Frictional unemployment",
  description:"Corresponds to the period necessary for individuals to searching for jobs, which are best suit to their tastes and skills, and for which there will be job market matching"},
  {title:"Structual unemployment",
  description:"Arises because the number of jobs available in certain labor markets is insufficient to provide a job for everyone searching for a job. This form of unemployment can be of particular concern since it corresponds to individuals who are subject to potentially long spells of unemployment"},
  {title:"Efficiency Wage",
  description:"Wages that are higher than initial reservation wage, aimed at maintaining worker loyalty and reducing turnover, in order to maintain overall quality of workers within a company and avoid the loss of valuable human capital within the corporation. It has to be higher than other firms."},
  {title:"Externality",
  description:"An externality is a cost or benefit caused by a producer that is not financially incurred or received by that producer. An externality can be both positive or negative and can stem from either the production or consumption of a good or service."},
  {title:"Spillover effect",
  description:"Spillover effect refers to the impact that seemingly unrelated events in one nation can have on the economies of other nations."},
  {title:"Reservation wages",
  description:"Reservation wages invoke the idea that individuals have different threshold levels for wage which they consider to be high for them to agree to being hiring."},
  {title:"Menu Cost",
  description:"Transaction costs linked to changing prices"},
  {title:"Moore's Law",
  description:"Roughly every two years, the number of transistors on microchips will double. Therefore, computational progress will become significantly faster, smaller, and more efficient over time."},
  {title:"Moral hazard",
  description:"Moral hazard is a situation in which one party gets involved in a risky event knowing that it is protected against the risk and the other party will incur the cost. It arises when both the parties have incomplete information about each other."},
  {title:"Rachet effect",
  description:"A rachet effect is an instance of the restrained ability of human process to be reserve once a specific thing has happened."},
  {title:"Money",
  description:"The set of assets that are widely used and accept as payment, such as currency and checking accounts"},
  {title:"Currency",
  description:"Paper money and coin issued by the government; cash"},
  {title:"Money supply",
  description:"Quantity of money available in the economy"},
  {title:"Dynamics",
  description:"Trace and study the behavior of variables through 'time', and determine whether these variables tend to mobe towards equilibrium"},
  {title:"Partial equilibrium",
  description:"Condition of economic equilibrium which analyzes only a sinle market, cetris peribus except for the one change at the time being analyzed."},
  {title:"General equilibrium",
  description:"The price and quantities of all markets in the economy are considered simultaneously, including feedback effects from one another."},
  {title:"Ceteris Paribus assumption",
  description:"This is a very commonly used expression to highlight the difference between movements along demand and supply curves (“changes in quantities demanded or supplied”) and shifts in those curves, which arise because of “holding other variables (factors) constant”"},
  {title:"Black Swan",
  description:"Rare events, hence 'outliers', which are largely not anticipated, but can have subsequent impacts, thereby generating major economic structual changes in behavior and the structure of economies."}
];


  return (
    <div>
    <Navbar />
    <main role="main" class="container">
    <h1>This is Study Page</h1>

    
    </main>
    </div>
   


  )
}

export default Study;