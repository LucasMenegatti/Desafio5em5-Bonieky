// Context, Reducer, Provider, Custom Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type IState = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}
type IAction = {
    type: FormActions;
    payload: any;
}
type IContextType = {
    state: IState;
    dispatch: (action: IAction) => void;
}
type IFormProviderProps = {
    children: ReactNode;
}

const initialData: IState = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}


// === Context ===
const FormContext = createContext<IContextType | undefined>(undefined);

// === Reducer ===
// enum é uma função Typescript. No Vanilla pode ser utilizado um objeto: const STATES = Object.freeze({ ESTADO1: "Estado 1", ESTADO2: "Estado 2"})
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

const formReducer = (state: IState, action: IAction) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, github: action.payload};
        default:
            return state;
    }
}

// === Provider ===
export const FormProvider = ({ children }: IFormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch }
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// === Context Hook ===
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) throw new Error('useform precisa ser utilizado dentro do FormProvider');
    return context;
}