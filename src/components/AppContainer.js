import React, {useCallback, useState, useEffect} from 'react';
import {DisplayText, Page, Layout } from "@shopify/polaris";
import { NominationsContainer, ResultsContainer, SearchField, } from '../components'
import API from "../utils/API";

export const AppContainer = () => {
  const [textFieldValue, setTextFieldValue] = useState('ram');
  const [results, setResults] = useState({});

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const searchMovies = async query => {
    try {
      const res = await API.search(query);
      setResults(res.data)
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    searchMovies(textFieldValue);
  };

  useEffect(() => {
    searchMovies(textFieldValue);
  }, [])

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
          <ResultsContainer />
        </Layout.Section>
        <Layout.Section oneHalf>
          <NominationsContainer />
        </Layout.Section>
      </Layout>
    </Page>
  )
}
