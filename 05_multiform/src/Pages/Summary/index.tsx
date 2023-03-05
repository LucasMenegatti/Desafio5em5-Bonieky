import { useEffect } from 'react'
import Theme from 'components/Theme'
import { FormActions, useForm } from 'Contexts/FormContext';
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { Link } from 'react-router-dom';

const Sumary = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    
    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    const handleSair = () => {
        window.location.reload();
    }

    return (
        <Theme>
            <C.Container>
                <p className='textoCabecalho'>Resumo</p>
                <h1>Parabéns {state.name}! Seus dados foram enviados.</h1>
                <p className='textoCabecalho'>Verifique abaixo os dados que foram submetidos.</p>

                <hr />

                <C.Summary>
                    <p className='dadosSumario'>Nome: {state.name} </p>
                    <p className='dadosSumario'>Email: {state.email} </p>
                    <p className='dadosSumario'>Github: {state.github} </p>
                </C.Summary>

                <Link to='/step3' className="backButton">Voltar</Link>
                <button onClick={handleSair}>Sair</button>
            </C.Container>
        </Theme>
    )
}

export default Sumary;