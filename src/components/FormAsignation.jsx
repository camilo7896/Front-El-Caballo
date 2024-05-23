import { Box } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from "react";

export default function FormAsignation() {

    const [hInicial, setHInicial] = useState();
    const [hFinal, setHFinal] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(hInicial)
        console.log(hFinal)
    }

    return (
        <>
        <div>
            <Box sx={{ margin: 1 }}>
                <h1 className="title">Registro de horometro</h1>
                
            </Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={
                    {
                        m: 2,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                <Box sx={{ m: 2 }}>
                    <TextField
                        id="HrInicial"
                        label="Hr.Inicial"
                        variant="outlined"
                        size="small"
                        sx={{ width: '25ch' }}
                        type="number"
                        helperText="Ingresa horometro inical"
                        value={hInicial}
                        onChange={(e) => setHInicial(e.target.value)}
                    />
                </Box>
                <Box sx={{ m: 2 }}>
                    <TextField
                        id="HrFinal"
                        label="Hr.final"
                        variant="outlined"
                        size="small"
                        sx={{ width: '25ch' }}
                        type="number"
                        helperText="Ingresa horometro final"
                        value={hFinal}
                        onChange={(e) => setHFinal(e.target.value)}
                    />
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2 }}>
                    Enviar
                </Button>
            </Box>
        </div>
        </>
    )
}
