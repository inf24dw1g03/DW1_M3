import { Datagrid, List, Edit, SimpleForm, TextInput, ReferenceInput, NumberField, ReferenceField, TextField, EditButton } from 'react-admin';

export const MatchList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="date" />
            <TextField source="hour" />
            <TextField source="location" />
            <ReferenceField source="teamId" reference="teams" />
            <ReferenceField source="tournamentId" reference="tournaments" />
            <EditButton />
        </Datagrid>
    </List>
);

export const MatchEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberField source="id" />
            <TextInput source="date" />
            <TextInput source="hour" />
            <TextInput source="location" />
            <ReferenceInput source="teamId" reference="teams" />
            <ReferenceInput source="tournamentId" reference="tournaments" />
        </SimpleForm>
    </Edit>
);