import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const TeamList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <NumberField source="fundation_year" />
        </Datagrid>
    </List>
);