import React from 'react';
import {Card, List} from '@shopify/polaris';

export const ResultsContainer = (props) => {
  return (
    <Card title={props.title} >
      <Card.Section>
        <List>
          {props.items}
        </List>
      </Card.Section>
    </Card>
  )
}
