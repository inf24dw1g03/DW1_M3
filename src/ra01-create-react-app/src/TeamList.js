import { Datagrid, List, Edit, SimpleForm, TextInput, NumberField, TextField, EditButton, NumberInput } from 'react-admin';

export const TeamList = () => (
    <List>
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

