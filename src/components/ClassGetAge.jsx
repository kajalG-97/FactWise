// class AgeCalculator extends React.Component {
//     state = {};
//     public render(): JSX.Element {
//         return (
//             <div id="container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th colSpan={2}><h2>Age Calculator</h2></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td><span>Date of birth: </span></td>
//                             <td><input ref={(r) => this.dob = r} type="date" /></td>
//                         </tr>
//                         <tr>
//                             <td colSpan={2}>
//                                 <button onClick={this.calculateAge}>Calculate age</button>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan={2}><div className="result">{this.state.ageString}</div></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }

//     private calculateAge = (): void => {
//         const dateString: string = this.dob.value;
//         const now: Date = new Date();

//         const yearNow: number = now.getFullYear();
//         const monthNow: number = now.getMonth();
//         const dateNow: number = now.getDate();

//         const dob: Date = new Date(dateString);

//         const yearDob: number = dob.getFullYear();
//         const monthDob: number = dob.getMonth();
//         const dateDob: number = dob.getDate();

//         let yearAge: number = yearNow - yearDob;
//         let monthAge: number;

//         if (monthNow >= monthDob) {
//             monthAge = monthNow - monthDob;
//         } else {
//             yearAge--;
//             monthAge = 12 + monthNow - monthDob;
//         }

//         let dateAge: number;
//         if (dateNow >= dateDob) {
//             dateAge = dateNow - dateDob;
//         } else {
//             monthAge--;
//             dateAge = 31 + dateNow - dateDob;

//             if (monthAge < 0) {
//                 monthAge = 11;
//                 yearAge--;
//             }
//         }

//         const age = {
//             years: yearAge,
//             months: monthAge,
//             days: dateAge
//         };

//         const yearString: string = (age.years > 1) ? "years" : "year";
//         const monthString: string = (age.months > 1) ? " months" : " month";
//         const dayString: string = (age.days > 1) ? " days" : " day";

//         let ageString: string = "";

//         if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
//             ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
//         } else if ((age.years === 0) && (age.months === 0) && (age.days > 0)) {
//             ageString = "Only " + age.days + dayString + " old!";
//         } else if ((age.years > 0) && (age.months === 0) && (age.days === 0)) {
//             ageString = age.years + yearString + " old. Happy Birthday!!";
//         } else if ((age.years > 0) && (age.months > 0) && (age.days === 0)) {
//             ageString = age.years + yearString + " and " + age.months + monthString + " old.";
//         } else if ((age.years === 0) && (age.months > 0) && (age.days > 0)) {
//             ageString = age.months + monthString + " and " + age.days + dayString + " old.";
//         } else if ((age.years > 0) && (age.months === 0) && (age.days > 0)) {
//             ageString = age.years + yearString + " and " + age.days + dayString + " old.";
//         } else if ((age.years === 0) && (age.months > 0) && (age.days === 0)) {
//             ageString = age.months + monthString + " old.";
//         } else {
//             ageString = "Oops! Could not calculate age!";
//         }

//         this.setState({ ageString });
//     };
// }

// ReactDOM.render(<AgeCalculator />, document.getElementById("root"));