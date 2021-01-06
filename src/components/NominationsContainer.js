import React from 'react';
import { Card, List, } from '@shopify/polaris';

export const NominationsContainer = (props) => {
  return (
    <Card title="Nominations">
      <Card.Section>
        <List>
          {props.items}
        </List>
      </Card.Section>
      {props.share}
    </Card>
  )
}
