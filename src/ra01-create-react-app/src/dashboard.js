import React, { useState } from 'react';
import { useDataProvider, useNotify, Title } from 'react-admin';
import { TextField, Button, Box, Typography } from '@mui/material';

export const Dashboard = () => {
    const [name, setName] = useState('');
    const [fundationYear, setFundationYear] = useState('');
    const [players, setPlayers] = useState([
        { name: '', age: '' },
        { name: '', age: '' },
        { name: '', age: '' },
        { name: '', age: '' },
        { name: '', age: '' },
    ]);
    const dataProvider = useDataProvider();
    const notify = useNotify();

    const handlePlayerChange = (index, field, value) => {
        const updatedPlayers = players.map((player, i) =>
            i === index ? { ...player, [field]: value } : player
        );
        setPlayers(updatedPlayers);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (players.some((player) => !player.name || !player.age)) {
            notify('Todos os campos dos 5 jogadores devem estar preenchidos.', {
                type: 'warning',
            });
            return;
        }
        try {
            const teamResponse = await dataProvider.create('teams', {
                data: {
                    name: name,
                    fundation_year: parseInt(fundationYear, 10),
                },
            });

            const teamId = teamResponse.data.id;
            const playerPromises = players.map((player) =>
                dataProvider.create('players', {
                    data: {
                        name: player.name,
                        age: parseInt(player.age, 10),
                        teamId: teamId, // Associa o jogador ao time criado
                    },
                })
            );

            await Promise.all(playerPromises);
            notify('Equipe e jogadores criados com sucesso!', { type: 'success' });
            setName('');
            setFundationYear('');
            setPlayers([
                { name: '', age: '' },
                { name: '', age: '' },
                { name: '', age: '' },
                { name: '', age: '' },
                { name: '', age: '' },
            ]);
        } catch (error) {
            notify('Erro ao criar equipe ou jogadores. Tente novamente.', { type: 'error' });
        }
    };

    return (
        <Box padding={2}>
            <Title title="Dashboard" />
            <Typography variant="h5" gutterBottom>
                Criar Nova Equipa com Jogadores (5 jogadores obrigatórios)
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2} maxWidth="400px">
                    <TextField
                        label="Nome da Equipa"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Ano de Fundação"
                        type="number"
                        value={fundationYear}
                        onChange={(e) => setFundationYear(e.target.value)}
                        variant="outlined"
                        fullWidth
                        required
                    />

                    <Typography variant="h6" gutterBottom>
                        Jogadores (Preencha os 5 obrigatoriamente)
                    </Typography>
                    {players.map((player, index) => (
                        <Box key={index} display="flex" flexDirection="column" gap={1}>
                            <TextField
                                label={`Nome do Jogador ${index + 1}`}
                                value={player.name}
                                onChange={(e) =>
                                    handlePlayerChange(index, 'name', e.target.value)
                                }
                                variant="outlined"
                                fullWidth
                                required
                            />
                            <TextField
                                label={`Idade do Jogador ${index + 1}`}
                                type="number"
                                value={player.age}
                                onChange={(e) =>
                                    handlePlayerChange(index, 'age', e.target.value)
                                }
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Box>
                    ))}

                    <Button type="submit" variant="contained" color="primary">
                        Criar Equipa com Jogadores
                    </Button>
                </Box>
            </form>
        </Box>
    );
};
