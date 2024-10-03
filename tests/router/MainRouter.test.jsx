import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { MainRouter } from "../../src/router/MainRouter";

describe('Pruebas en <MainRouter />', () => {

    test('Debe mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false,
        };

        const router = createMemoryRouter(MainRouter, {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
        });

        render(
            <AuthContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(screen.getAllByText("Login").length).toBe(2);
    });

});