import { Datagrid, List, Edit, SimpleForm, TextInput, NumberField,TextField, EditButton, SearchInput, SelectInput} from 'react-admin';

const choices = [
    { id: 'name', name: 'Name'},
    { id: 'id' , name: 'Id'}
];

const tournamentFilters = [
    <SearchInput source="q" placeholder="Search by name or id..."  alwaysOn />,
    <TextInput label="Title" source="title"/>,
    <SelectInput source="category" choices={choices} />,
];

export const TournamentList = () => (
    <List filters={tournamentFilters}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="begin_date" />
            <TextField source="end_date" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TournamentEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberField source="id" />
            <TextInput source="name" />
            <TextInput source="begin_date" />
            <TextInput source="end_date" />
        </SimpleForm>
    </Edit>
);