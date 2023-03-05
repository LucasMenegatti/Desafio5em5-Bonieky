import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormStep1 from 'Pages/FormStep1';
import FormStep2 from 'Pages/FormStep2';
import FormStep3 from 'Pages/FormStep3';
import Sumary from 'Pages/Summary';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1/>} />
                <Route path="step2" element={<FormStep2/>} />
                <Route path="step3" element={<FormStep3/>} />
                <Route path="summary" element={<Sumary/>} />
                <Route path="*" element={<h1>404 - Não Encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;