import { Datagrid, List, Edit, SimpleForm, TextInput, NumberField, TextField, EditButton, NumberInput, SearchInput, SelectInput } from 'react-admin';

const choices = [
    { id: 'name', name: 'Name'},
    { id: 'id' , name: 'Id'}
];

const teamFilters = [
    <SearchInput source="q" placeholder="Search by name or id..."  alwaysOn />,
    <TextInput label="Title" source="title"/>,
    <SelectInput source="category" choices={choices} />,
];

export const TeamList = () => (
    <List filters={teamFilters}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <NumberField source="fundation_year" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TeamEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberField source="id" />
            <TextInput source="name" />
            <NumberInput source="fundation_year" />
        </SimpleForm>
    </Edit>
);

