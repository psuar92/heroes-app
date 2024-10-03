
// Debe aparecer el nombre del usuario en el navbar
// Cuando se hace click en logout, que se mande a llamar el navigate con argumento del login y el replace
// 

import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/Navbar";
import { AuthContext } from "../../../src/auth/context";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en <Navbar />', () => {

    const logout = jest.fn();
    const navigate = mockNavigate;

    const contextValue = {
        logged: true,
        user: {
            name: 'Pedro'
        },
        logout,
    };

    beforeEach(() => jest.clearAllMocks());

    test('Debe aparecer el nombre del usuario en el navbar', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Pedro')).toBeTruthy();

    });

    test('Debe llamar el logout y redireccionar', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutBtn = screen.getByRole('button');

        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();

        expect(navigate).toHaveBeenCalledWith('/login', {
            replace: true
        });

    });

});