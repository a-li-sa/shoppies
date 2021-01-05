import React, {useCallback, useState, useEffect} from 'react';
import {DisplayText, Page, Layout, List } from "@shopify/polaris";
import { NominationsContainer, ResultsContainer, SearchField, } from '../components'
import API from "../utils/API";

export const AppContainer = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [results, setResults] = useState();
  const [items, setItems] = useState([]);

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const searchMovies = async query => {
    try {
      const res = await API.search(query);
      const search = res.data.Search;
      if (res.data.Error) {
        setItems(res.data.Error)
      } else if (search !== undefined) {
        setResults(search)
        const itemsArr = [];
        for (let i = 0; i < 3; i++) {
          itemsArr.push(<List.Item key={i}>{search[i].Title} ({search[i].Year})</List.Item>)
        }
        setItems(itemsArr);
      } else {
        setItems([])
      }
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    if (textFieldValue !== '') {
      const timerId = setTimeout(() => {
        searchMovies(textFieldValue);
      }, 300);
      return () => {
        clearTimeout(timerId);
      }
    } else {
      setItems([])
    }
  }, [textFieldValue])

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <DisplayText size="large" element="h1">The Shoppies</DisplayText>
        </Layout.Section>
        <Layout.Section>
          <SearchField textFieldValue={textFieldValue} handleTextFieldChange={handleTextFieldChange} />
        </Layout.Section>
        <Layout.Section oneHalf>
          <ResultsContainer items={items}/>
        </Layout.Section>
        <Layout.Section oneHalf>
          <NominationsContainer />
        </Layout.Section>
      </Layout>
    </Page>
  )
}
