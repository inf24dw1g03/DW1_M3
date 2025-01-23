import { Datagrid, List, Edit, SimpleForm, TextInput, ReferenceInput, NumberField, ReferenceField, TextField, EditButton, NumberInput, SearchInput, SelectInput } from 'react-admin';

const choices = [
    { id: 'name', name: 'Name'},
    { id: 'id' , name: 'Id'}
];

const playerFilters = [
    <SearchInput source="q" placeholder="Search by name or id..." alwaysOn key="search" />,
    <TextInput label="Title" source="title"/>,
    <SelectInput source="category" choices={choices} />,
];


export const PlayerList = () => (
    <List filters={playerFilters}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <NumberField source="age" />
            <ReferenceField source="teamId" reference="teams" />   
            <EditButton />
        </Datagrid>
    </List>
);

export const PlayerEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberField source="id" />
            <TextInput source="name" />
            <NumberInput source="age" />
            <ReferenceInput source="teamId" reference="teams" />
        </SimpleForm>
    </Edit>
);