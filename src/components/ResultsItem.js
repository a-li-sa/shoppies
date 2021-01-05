import React from 'react';
import { Button, List } from "@shopify/polaris";

export const ResultsItem = (props) => {
  return (
    <List.Item>
      {props.string}
      {' '}
      <Button onClick={props.onClick} disabled={props.disabled}>
        Nominate
      </Button>
    </List.Item>
  )
}
