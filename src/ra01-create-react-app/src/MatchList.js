import { Datagrid, List, Edit, SimpleForm, TextInput, ReferenceInput, NumberField, ReferenceField, TextField, EditButton, SearchInput, SelectInput } from 'react-admin';

const choices = [
    { id: 'id' , name: 'Id'}
];

const matchFilters = [
    <SearchInput source="q" placeholder="Search by id..."  alwaysOn />,
    <TextInput label="Title" source="title"/>,
    <SelectInput source="category" choices={choices} />,
];

export const MatchList = () => (
    <List filters={matchFilters}>
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