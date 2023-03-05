import SidebarItem from 'components/SidebarItem';
import { useForm } from 'Contexts/FormContext';
import { ReactNode } from 'react';
import Header from '../Header';
import * as C from './styles'

type IProps = {
    children: ReactNode;
}

const Theme = ({ children }: IProps) => {
    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header/>
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Contatos"
                            description="Como lhe encontrar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem
                            title="Resumo"
                            description="Verifique seus dados"
                            icon="profile"
                            path="/summary"
                            active={state.currentStep === 4}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}

export default Theme;