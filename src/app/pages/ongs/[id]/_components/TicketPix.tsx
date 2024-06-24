import React, { useState } from 'react';
import { Button, Snackbar, TextField, Grid, Typography, Card, CardActions, CardContent, CardMedia, Box } from '@mui/material';
import { postCriarPix } from '@/src/app/api/service';

interface TicketPixProps {
    onClose: () => void;
    ongName: string;
    email: string;
    cpf: string;
}

// Função para formatar CPF
const formatCPF = (value: string): string => {
    // Remove caracteres não numéricos
    const cleanedValue = value.replace(/\D/g, '');
    
    // Aplica a formatação do CPF
    return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4').substring(0, 14);
};

const TicketPix: React.FC<TicketPixProps> = ({ onClose, ongName, email, cpf }) => {
    const [ticketUrl, setTicketUrl] = useState<string | null>(null);
    const [amountNumeric, setAmountNumeric] = useState<number>(0);
    const [errorOpen, setErrorOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [cpfValue, setCpfValue] = useState<string>(formatCPF(cpf)); // Formata CPF inicial

    const handlePost = () => {
        if (amountNumeric < 1) {
            setErrorOpen(true);
            return;
        }

        const pixTransaction = {
            transaction_amount: amountNumeric,
            description: "Doação",
            payer: {
                email: email,
                type: "CPF",
                number: cpfValue.replace(/\D/g, "") // Remove não numéricos do CPF
            }
        };

        console.log("POST Body:", pixTransaction);

        postCriarPix(pixTransaction)
            .then(response => {
                console.log("Response:", response);
                if (response.data && response.data.ticket_url) {
                    console.log("QR Code URL:", response.data.ticket_url);
                    setTicketUrl(response.data.ticket_url);
                } else {
                    console.error("Erro: QR Code URL não encontrada no response.");
                }
            })
            .catch(error => {
                console.error("Erro ao criar Pix:", error);
                // Lidar com o erro aqui
            });
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        const numericValue = parseFloat(input) / 100;
        setAmountNumeric(numericValue);

        if (numericValue >= 1) {
            setIsButtonDisabled(false);
            setShowMessage(false);
        } else {
            setIsButtonDisabled(true);
            setShowMessage(true);
        }
    };

    const handleCloseError = () => {
        setErrorOpen(false);
    };

    const formatCurrency = (value: number): string => {
        const formattedValue = value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return `R$ ${formattedValue}`;
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const formattedValue = formatCPF(inputValue);
        setCpfValue(formattedValue);
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, padding: '2rem' }}
        >
            {!ticketUrl ? (
                <Grid item xs={12} md={5}>
                    <Box
                        bgcolor="#f44336"
                        color="white"
                        p={2}
                        mb={2}
                        borderRadius="4px"
                        textAlign="center"
                        style={{ visibility: showMessage ? 'visible' : 'hidden' }}
                    >
                        O valor mínimo para doação é R$ 1,00.
                    </Box>
                    <Card sx={{ width: 440, margin: 'auto' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://nac.cni.com.br/blog/wp-content/uploads/2021/04/pix-1.jpeg"
                            title="Imagem do produto"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Doação
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descrição: A doação é um ato solidário que preenche a alma e semeia a esperança!
                            </Typography>

                            <TextField
                                label="CPF"
                                type="text"
                                value={cpfValue}
                                onChange={handleCpfChange}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                inputProps={{
                                    style: { textAlign: 'right' },
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*'
                                }}
                                InputProps={{ inputProps: { maxLength: 14 } }}
                            />

                            <TextField
                                label="Valor da doação"
                                type="text"
                                value={formatCurrency(amountNumeric)}
                                onChange={handleAmountChange}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    inputMode: 'numeric',
                                    style: { textAlign: 'right' }
                                }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                Pagamento disponível: <strong>pix</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                E-mail: <strong>{email}</strong>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                onClick={handlePost}
                                variant="contained"
                                size="small"
                                disabled={isButtonDisabled}
                            >
                                Doar com Pix
                            </Button>
                            <Button onClick={onClose} variant="contained" size="small">
                                Cancelar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ) : (
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                    <Grid item>
                        <Card sx={{ width: 550, height: 550 }}>
                            <iframe src={ticketUrl} width="100%" height="100%" />
                        </Card>
                    </Grid>
                </Grid>
            )}
            <Snackbar
                open={errorOpen}
                autoHideDuration={6000}
                onClose={handleCloseError}
                message="O valor mínimo para doação é R$ 1,00."
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            />
        </Grid>
    );
};

export default TicketPix;
