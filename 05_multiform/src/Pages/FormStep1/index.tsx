import { useEffect } from 'react'
import Theme from 'components/Theme'
import { FormActions, useForm } from 'Contexts/FormContext';
import { useNavigate } from 'react-router-dom'
import * as C from './FormStep1.styles'

const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step2');
        } else {
            alert('Preencha os dados.')
        }
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleNextStep();
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input 
                        type="text"
                        value={state.name}
                        onChange={handleNameChange}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep1;