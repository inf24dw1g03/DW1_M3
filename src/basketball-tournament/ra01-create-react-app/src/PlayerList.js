import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const PlayerList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <NumberField source="age" />
            <ReferenceField source="teamId" reference="teams" />
        </Datagrid>
    </List>
);