import { Button } from '@material-ui/core';
import React from 'react';

export default function FormularioCadastro() {
    return (
        <form>
            <label>Nome
                <input type="text" />
            </label>

            <label>Sobrenome
                <input type="text" />
            </label>

            <label>Cpf
                <input type="text" />
            </label>

            <label>Promoções
                <input type="checkbox" />
            </label>

            <label>Novidades
                <input type="checkbox" />
            </label>

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}