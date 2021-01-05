import React from 'react';
import {Card, List} from '@shopify/polaris';

export const ResultsContainer = () => {
  return (
    <Card title="Results">
      <Card.Section>
        <List>
          <List.Item>
            Rambo (1999)
          </List.Item>
          <List.Item>
            Hey Ram (2000)
          </List.Item>
          <List.Item>
            Ram Dass, Going Home (2007)
          </List.Item>
        </List>
      </Card.Section>
    </Card>
  )
}
