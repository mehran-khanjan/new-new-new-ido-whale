import React, {useState, useEffect} from 'react';
import CreateLaunchpadStepOne from "../../components/User/Create/CreateLaunchpadStepOne";
import CreateLaunchpadStepTwo from "../../components/User/Create/CreateLaunchpadStepTwo";
import CreateLaunchpadStepThree from "../../components/User/Create/CreateLaunchpadStepThree";
import CreateLaunchpadStepFour from "../../components/User/Create/CreateLaunchpadStepFour";
import CreateLaunchpadStepFive from "../../components/User/Create/CreateLaunchpadStepFive";
import {useSelector} from "react-redux";

const Create = () => {
    const [step, setStep] = useState(1);
    const isTokenValid = useSelector(state => state.createLaunchpad.isTokenValid);

    useEffect(() => {
        if (isTokenValid) {
            onNextStepHandle();
        }
    }, [isTokenValid])

    const onNextStepHandle = () => {
        setStep(prevState => prevState + 1);
    }

    const onPrevStepHandle = () => {
        setStep(prevState => prevState - 1);
    }

    switch (step) {
        case 1:
            return <CreateLaunchpadStepOne onNextStep={onNextStepHandle}/>
        case 2:
            return <CreateLaunchpadStepTwo onNextStep={onNextStepHandle} onPrevStep={onPrevStepHandle}/>
        case 3:
            return <CreateLaunchpadStepThree onNextStep={onNextStepHandle} onPrevStep={onPrevStepHandle}/>
        case 4:
            return <CreateLaunchpadStepFour onNextStep={onNextStepHandle} onPrevStep={onPrevStepHandle}/>
        case 5:
            return <CreateLaunchpadStepFive onPrevStep={onPrevStepHandle}/>
        default:
            return <CreateLaunchpadStepOne onNextStep={onNextStepHandle}/>
    }
}

export default Create;