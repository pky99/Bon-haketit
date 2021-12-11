import React from "react"
import { Steps, Step } from "react-step-builder";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";
export default function Callback() {
    return (
        <div className="App">
             <div className="auth-wrapper">
                <div className="auth-inner">
                <Steps>
                    <Step component={Step1} />
                    <Step component={Step2} />
                    <Step component={FinalStep} />
                </Steps>
                </div>
            </div>
        </div>
    )
}