import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en router <PublicRoute />', () => {

    test('Debe mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Public Route')).toBeTruthy();

    });

    test('Debe navegar si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Helbjorn',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />
                        <Route path='search' element={<h1>Pagina Search</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina Search')).toBeTruthy();

    });

});