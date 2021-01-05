import React from 'react';
import { Button, List } from "@shopify/polaris";

export const NominationsItem = (props) => {
  return (
    <List.Item>
      {props.string}
      {' '}
      <Button onClick={props.onClick}>
        Remove
      </Button>
    </List.Item>
  )
}
