import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const MatchList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="date" />
            <TextField source="hour" />
            <TextField source="location" />
            <ReferenceField source="teamId" reference="teams" />
            <ReferenceField source="tournamentId" reference="tournaments" />
        </Datagrid>
    </List>
);