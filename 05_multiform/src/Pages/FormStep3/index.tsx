import { useEffect } from 'react'
import Theme from 'components/Theme'
import { FormActions, useForm } from 'Contexts/FormContext';
import { useNavigate } from 'react-router-dom'
import * as C from './FormStep3.styles'
import { Link } from 'react-router-dom';

const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    
    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            navigate('/summary')
        } else {
            alert('Preencha os dados!');
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleNextStep();
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}! Onde te achamos?</h1>
                <p>Preencha seus dados de contato.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input 
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input 
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                        onKeyDown={handleKeyDown}
                    />
                </label>

                <Link to='/step2' className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep3;