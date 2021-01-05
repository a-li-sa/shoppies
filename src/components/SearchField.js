import React from 'react';
import {Icon, TextField, Card, FormLayout } from '@shopify/polaris';
import {SearchMinor} from '@shopify/polaris-icons';

export const SearchField = (props) => {
  return (
    <Card>
      <Card.Section>
        <FormLayout>
          <TextField
            placeholder="Search"
            label="Movie Title"
            value={props.textFieldValue}
            onChange={props.handleTextFieldChange}
            prefix={<Icon source={SearchMinor} color="inkLighter" />}
          />
        </FormLayout>
      </Card.Section>
    </Card>
  );
}
