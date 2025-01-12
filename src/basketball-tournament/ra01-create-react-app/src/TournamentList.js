import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const TournamentList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="begin_date" />
            <TextField source="end_date" />
        </Datagrid>
    </List>
);