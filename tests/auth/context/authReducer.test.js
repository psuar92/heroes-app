import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

    test('Debe retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false });

    });

    test('Debe llamar el login, autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Pedro Suarez'
            }
        };

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('Debe borrar el name del usuario y set logged en false', () => {

        const action = {
            type: types.logout,
        }

        const state = authReducer({ logged: true, user: { name: 'Pedro Suarez' } }, action);

        expect(state).toEqual({ logged: false });

    });

});