import { Datagrid, List, Edit, SimpleForm, TextInput, ReferenceInput, NumberField, ReferenceField, TextField, EditButton, NumberInput } from 'react-admin';

export const PlayerList = () => (
    <List>
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