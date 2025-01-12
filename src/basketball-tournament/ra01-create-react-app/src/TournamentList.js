import { Datagrid, List, Edit, SimpleForm, TextInput, NumberField,TextField, EditButton,} from 'react-admin';

export const TournamentList = () => (
    <List>
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