import React from 'react';
import { Button, List } from "@shopify/polaris";

export const Item = (props) => {
  return (
    <List.Item>
      {props.string}
      {' '}
      <Button onClick={props.onClick} disabled={props.disabled}>
        {props.title}
      </Button>
    </List.Item>
  )
}
