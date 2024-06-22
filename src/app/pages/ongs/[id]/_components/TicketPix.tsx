import { useState } from 'react';
import { Button, Snackbar, TextField, Grid, Typography, Card, CardActions, CardContent, CardMedia, Box } from '@mui/material';
import { postCriarPix } from '@/src/app/api/service';

interface TicketPixProps {
    onClose: () => void; // Função para fechar o TicketPix
    ongName: string; // Nome da ONG
    email: string; // Email para simulação, substitua pelo seu
    cpf: string; // CPF para simulação, substitua pelo seu
}

const TicketPix: React.FC<TicketPixProps> = ({ onClose, ongName, email, cpf }) => {
    const [ticketUrl, setTicketUrl] = useState<string>("");
    const [amountNumeric, setAmountNumeric] = useState<number>(0); // Estado para o valor numérico da doação
    const [errorOpen, setErrorOpen] = useState(false); // Estado para controlar a exibição do erro
    const [showMessage, setShowMessage] = useState(false); // Estado para exibir mensagem de valor mínimo
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para desabilitar o botão de pagamento

    const handlePost = () => {
        if (amountNumeric < 1) {
            setErrorOpen(true);
            return;
        }

        const MOCK_BODY = {
            description: "Doação",
            paymentMethodId: "pix",
            email: email, // Email da ONG
            identificationType: "CPF",
            number: cpf, // CPF da ONG
            transaction_amount: amountNumeric 
        };

        console.log("POST Body:", MOCK_BODY); // Adicionando log para depuração

        postCriarPix(MOCK_BODY)
            .then(response => {
                console.log("Response:", response);
                setTicketUrl(response.data.point_of_interaction.transaction_data.ticket_url);
            })
            .catch(error => {
                console.error("Erro ao criar Pix:", error);
            });
    };

    // Função para formatar o valor da doação conforme é digitado
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Remove tudo que não for dígito
        const input = e.target.value.replace(/\D/g, "");
        // Converte o valor formatado para número
        const numericValue = parseFloat(input) / 100;
        setAmountNumeric(numericValue);

        // Verifica se o valor é maior ou igual a R$ 1,00
        if (numericValue >= 1) {
            setIsButtonDisabled(false); // Habilita o botão se o valor for válido
            setShowMessage(false); // Esconde a mensagem se o valor for válido
        } else {
            setIsButtonDisabled(true); // Desabilita o botão se o valor for menor que 1 real
            setShowMessage(true); // Mostra a mensagem se o valor for menor que 1 real
        }
    };

    const handleCloseError = () => {
        setErrorOpen(false);
    };

    const formatCurrency = (value: number): string => {
        // Formata o valor da doação para "R$ 0,00"
        const formattedValue = value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return `R$ ${formattedValue}`;
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, padding: '2rem' }}
        >
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
                            Descrição: Doação
                        </Typography>
                        <TextField
                            label="Valor da doação"
                            type="text"
                            value={formatCurrency(amountNumeric)} // Formata para "R$ 0,00"
                            onChange={handleAmountChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                inputMode: 'numeric',
                                inputProps: {
                                    pattern: '[0-9]*',
                                    style: { textAlign: 'right' }
                                },
                            }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            Pagamento disponível: <strong>pix</strong>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Seu e-mail: <strong>{email}</strong>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            CPF: <strong>{cpf}</strong>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={handlePost}
                            variant="contained"
                            size="small"
                            disabled={isButtonDisabled} 
                        >
                            Pagar com Pix
                        </Button>
                        <Button onClick={onClose} variant="contained" size="small">
                            Cancelar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            {ticketUrl && (
                <Grid item xs={12} md={6}>
                    <Card sx={{ width: 440, height: 820 }}>
                        <iframe src={ticketUrl} width="100%" height="100%" />
                    </Card>
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
