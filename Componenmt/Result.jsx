import {calculateInvestmentResults, formatter}   from '../util/investment.js'
export default function  Result ({input})  {
const resultData= calculateInvestmentResults(input);

const initialInvestment= resultData[0].valueEndOfYear-
resultData[0].interest- resultData[0].annualInvestment
    return (
       <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total interest</th>
                <th>Investment Capital</th>
            </tr>
        </thead>
        <tbody>
           {resultData.map((yearData) =>{
            const totalInterest=
              // (الاستثمار السنوي - قيمة نهاية العام)اجمال الفائدة المكتسبة في سنة 
            yearData.valueEndOfYear-yearData.annualInvestment
            * yearData.year-initialInvestment;
            //القيمة نهاية العام ونخصم منها الفائدة
            const totalAmountInvested=yearData.valueEndOfYear-totalInterest;
            return (
            <tr key={yearData.year}>
                
                <td>{formatter.format( yearData.year)}</td>
                <td>{formatter.format( yearData.valueEndOfYear)}</td>
                <td>{formatter.format( yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
             
            </tr>
            );
           })} 
        </tbody>
       </table>
    );
};


