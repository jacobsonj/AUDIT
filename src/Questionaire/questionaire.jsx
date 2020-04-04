import React, { Component } from 'react';
import './questionaire.scss';

export default class Questionaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            haz: 0,
            dep: 0,
            harm: 0,
            qAndA: [
                { Q: 'How often do you have a drink containing alcohol? ', A: ['Never', 'Monthly or less', '2 to 4 times a month', '2 to 3 times a week', '4 or more times a week'], Val: [0, 1, 2, 3, 4] },
                { Q: 'How many drinks containing alcohol do you have on a typical day when you are drinking?', A: ['1 or 2', '3 or 4', '5 or 6', '7 to 9', '10 or more'], Val: [0, 1, 2, 3, 4] },
                { Q: 'How often do you have 5 or more drinks on one occasion? ', A: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'], Val: [0, 1, 2, 3, 4] },
                { Q: 'How often during the last year have you found that you were not able to stop drinking once you had started? ', A: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'], Val: [0, 1, 2, 3, 4] },
                {
                    Q: 'How often during the last year have you failed to do what was normally expected of you because of drinking? ', A: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'], Val: [0, 1, 2, 3, 4]
                },
                { Q: 'How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session? ', A: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'], Val: [0, 1, 2, 3, 4] },
                { Q: 'How often during the last year have you had a feeling of guilt or remorse after drinking?', A: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'], Val: [0, 1, 2, 3, 4] },
                { Q: 'How often during the last year have you been unable to remember what happened the night before because of your drinking? ', A: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'], Val: [0, 1, 2, 3, 4] },
                { Q: 'Have you or someone else been injured because of your drinking', A: ['No', '', 'Yes, but not in the last year', '', 'Yes, during the last year'], Val: [0, 1, 2, 3, 4] },
                { Q: 'Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down? ', A: ['No', '', 'Yes, but not in the last year', '', 'Yes, during the last year'], Val: [0, 1, 2, 3, 4] },
            ]
        }
    }

    createForm = () => {
        let questions = this.state.qAndA
        let formQuestions = []
        // let radClick = this.radioClickHaz
        for (let i in questions) {
            let question = questions[i];
            let title = question.Q;
            let answers = question.A
            let qTitle = <div className='title'>{title}</div>
            formQuestions.push(qTitle);
            let formAnswers = []
            formQuestions.push(formAnswers);
            for (let j in answers) {
                let answer = answers[j];
                let value = question.Val[j];
                console.log(i);
                let radClick; 
                
                if (answer) {
                    if(i <= 2){
                        radClick = this.radioClickHaz;
                    }
                    else if(i >= 3 && i <= 5){
                        radClick = this.radioClickDep;
                    }
                    else
                        radClick = this.radioClickHarm;
                    
                    console.log(radClick);
                    let aTitle =
                        <div className='question'>
                            <input className='radio' type='radio' name={title} value={value} onClick={radClick}></input>
                            <label for='never'>{answer}</label>
                        </div>
                    formAnswers.push(aTitle);
                }
                else continue
            }
        }
        return formQuestions;
    }

    radioClickHaz = (e) => {
        let total = this.state.total;
        let haz = this.state.haz;
        let value = + e.target.value;
        this.setState({ total: total + value, haz: haz + value }, () => {
            console.log(this.state.total);
        })
    }
    radioClickDep = (e) => {
        let total = this.state.total;
        let dep = this.state.dep
        let value = + e.target.value;
        this.setState({ total: total + value, dep: dep + value }, () => {
            console.log(this.state.total);
        })
    }
    radioClickHarm = (e) => {
        let total = this.state.total;
        let harm = this.state.harm;
        let value = + e.target.value;
        this.setState({ total: total + value, harm: harm + value }, () => {
            console.log(this.state.total);
        })
    }

    getIndication = () => {
        let total = this.state.total;
        if (total < 8) {
            return 'within normal range.'
        }
        else if (total >= 8 && total <= 15) {
            return 'Simple advice focused on the reduction of hazardous drinking.'
        }
        else if (total >= 16 && total <= 19) {
            return 'Brief counseling and continued monitoring.'
        }
        else return 'Clear need for further diagnostic evaluation for alcohol dependence.'
    }

    renderResults = () => {
        let total = this.state.total;
        let haz = this.state.haz;
        let dep = this.state.dep;
        let harm = this.state.harm;
        let resultsBox = <div className='results-main'>
            <div className='results-total'>Total:{total}</div>
            <div className='results-clinical'>Clinical Indication: {this.getIndication()}</div>
            <div className='domain-heading'>Domain Scores</div>
            <div className='domain'>Hazardous Alcohol Use: {haz}</div>
            <div className='domain'>Dependence Symptoms: {dep}</div>
            <div className='domain'>Harmful Alcohol Use: {harm}</div>
        </div>
        return resultsBox
    }



    render() {
        return (
            <div id='main'>
                <div className='heading'>
                    <div className='subheading'>
                        Justin Jacobson
                    </div>
                    <div className='subheading'>
                        SocW 622
                    </div>
                <div className='heading-title'>
                    AUDIT
                </div>
                <div className='heading-subtitle'>
                    The Alcohol Use Disorders Identification Test
                </div>
                <div className='heading-subtitle-small'>
                Babor TF ; de la Fuente JR ; Saunders J ; Grant M. AUDIT: The Alcohol Use Disorders Identification Test. Guidelines for use in primary health care. WHO/MNH/DAT 89.4, World Health Organization, Geneva, 1989.
                </div>

                </div>

                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/b/b7/NIH_standard_drink_comparison.jpg' alt='drink'></img>
                </div>
                {this.createForm()}
                {this.renderResults()}
            </div>
        )
    }
}
