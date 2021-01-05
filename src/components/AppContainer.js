import React, {useCallback, useState, useEffect} from 'react';
import {DisplayText, Page, Layout } from "@shopify/polaris";
import { NominationsContainer, NominationsItem, ResultsContainer, ResultsItem, SearchField, } from '../components'
import API from "../utils/API";

export const AppContainer = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [items, setItems] = useState([]);
  const [nominations, setNominations] = useState([]);

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
        const itemsArr = [];
        for (let i = 0; i < 3; i++) {
          const string = `${search[i].Title} (${search[i].Year})`
          itemsArr.push(<ResultsItem
            key={i}
            string={string}
            onClick={() => {
              const savedNominations = JSON.parse(localStorage.getItem("nominations"))
              savedNominations.push(string);
              setNominations(savedNominations);
              localStorage.setItem("nominations", JSON.stringify(savedNominations));
            }}
            disabled={nominations.includes(string) || nominations.length > 4 ? true : false}
          />)
        }
        setItems(itemsArr);
      } else {
        setItems([])
      }
    } catch (e) {
      console.log(e)
    }
  };

  const renderNominations = () => {
    const itemsArr = [];
    const savedNominations = JSON.parse(localStorage.getItem("nominations"))
    for (let i = 0; i < savedNominations.length; i++) {
      itemsArr.push(<NominationsItem
        key={i}
        string={nominations[i]}
        onClick={() => {
          savedNominations.splice(i, 1);
          setNominations(savedNominations);
          localStorage.setItem("nominations", JSON.stringify(savedNominations));
        }}
      />)
    }
    return itemsArr;
  }

  useEffect(() => {
    if (localStorage.getItem("nominations")) {
      const savedNominations = JSON.parse(localStorage.getItem("nominations"))
      setNominations(savedNominations);
    } else {
      localStorage.setItem("nominations", JSON.stringify(nominations));
    }
  }, [])

  useEffect(() => {
    if (textFieldValue !== '') {
      const timerId = setTimeout(() => {
        searchMovies(textFieldValue);
      }, 100);
      return () => {
        clearTimeout(timerId);
      }
    } else {
      setItems([])
    }
  }, [textFieldValue, nominations])

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
          <ResultsContainer items={items} title={
            textFieldValue === '' ? 'Search for a movie!' : `Results for "${textFieldValue}"`
          } />
        </Layout.Section>
        <Layout.Section oneHalf>
          <NominationsContainer items={renderNominations()}/>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
