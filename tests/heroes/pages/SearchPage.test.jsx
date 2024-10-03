import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en <SearchPage />', () => {

    const navigate = mockNavigate;

    beforeEach(() => jest.clearAllMocks());

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar a Batman y el input con el valor de queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');

        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');

        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        const div = screen.getByLabelText('alert-danger');

        expect(div.style.display).toBe('none');

    });

    test('Debe mostrar un error si no hay resultados (buscando batman123)', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const div = screen.getByLabelText('alert-danger');

        expect(div.style.display).toBe('');

    });

    test('Debe llamar el navigate a la pantalla nueva', () => {

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } });

        const form = screen.getByLabelText('form');

        fireEvent.submit(form);

        expect(navigate).toHaveBeenCalledWith(`?q=superman`);

    });

});