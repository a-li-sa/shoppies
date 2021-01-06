import React, { useState } from 'react';
import { Banner, Card, Stack, TextContainer } from "@shopify/polaris";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";

export const ShareContainer = ({nominations}) => {
  const string = `I'm nominating these movies for the Shoppies: ${nominations}`;
  const url = "https://the-shoppies-challenge.herokuapp.com"
  const [open, setOpen] = useState(true);
  return (
    <Card title="Share Your Nominations" sectioned>
      <TextContainer>
        {open ?
          <Banner status="success" onDismiss={() => {setOpen(false)}}>
            <p>
              You have selected 5 nominees. You are finished!
            </p>
          </Banner>
        : ''}
        <Stack spacing="tight">
          <FacebookShareButton
            url={url}
            quote={string}
          >
            <FacebookIcon size={36} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            title={string}
          >
            <TwitterIcon size={36} round={true} />
          </TwitterShareButton>
          <TumblrShareButton
            url={url}
            title={"The Shoppies"}
            caption={string}
          >
            <TumblrIcon size={36} round={true} />
          </TumblrShareButton>
          <RedditShareButton
            url={url}
            title={string}
          >
            <RedditIcon size={36} round={true} />
          </RedditShareButton>
          <LinkedinShareButton
            url={url}
            source={url}
            title={"The Shoppies"}
            summary={string}
          >
            <LinkedinIcon size={36} round={true} />
          </LinkedinShareButton>
          <EmailShareButton
            url={url}
            subject={"The Shoppies"}
            body={string}
            separator={`\n\n`}
          >
            <EmailIcon size={36} round={true} />
          </EmailShareButton>
        </Stack>
      </TextContainer>
    </Card>
  )
}
