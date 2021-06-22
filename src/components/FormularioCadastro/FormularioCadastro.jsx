import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';
import React, {useState} from 'react';

export default function FormularioCadastro() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");

    let onChangeNome = (ev) =>{
        setNome(ev.target.value)
    }

    let onChangeSobrenome = (ev) =>{
        setSobrenome(ev.target.value)
    }

    let onChangeCPF = (ev) =>{
        setCPF(ev.target.value)
    }

    let onFormSubmit = (ev) => {
        ev.preventDefault();

    }


    return (
        <form onSubmit={onFormSubmit}>
            <TextField margin="normal" id="noneId" label="Nome" variant="outlined" onChange={onChangeNome} fullWidth />
            <TextField margin="normal" id="sobrenome" label="Sobrenome" variant="outlined" onChange={onChangeSobrenome} fullWidth />
            <TextField margin="normal" id="cpfId" label="CPF" variant="outlined" onChange={onChangeCPF} fullWidth />
            <FormControlLabel label="Promoções" control={
                <Switch id="promocoesID" label="Promoções" defaultChecked/>
            } />                           
            <FormControlLabel label="Novidades" control={
                <Switch id="novidadeID" label="Novidades" defaultChecked/>
            } />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}