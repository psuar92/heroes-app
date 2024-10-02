import { AuthProvider } from './auth';
import { MainRouter } from './router/MainRouter';

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <MainRouter />
        </AuthProvider>
    );
};