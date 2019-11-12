import * as React from 'react';
import { TextContent, Grid, GridItem, PageSection, Title } from '@patternfly/react-core';
import '@app/Dashboard/dashboard.css';

const Dashboard: React.FunctionComponent<any> = (props) => {
  return (
    <PageSection>
      <TextContent>
        <Grid>
          <GridItem span={12} md={6}>
            <Grid>
              <GridItem span={12} className="pf-u-mx-auto pf-u-my-0">
                <img src="https://via.placeholder.com/350x200.png?text=Image" alt="Image 1" />
              </GridItem>
              <GridItem span={12} className="pf-u-text-align-center">
                <h1>Learn about the Developer program</h1>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem span={12} md={6}>
            <Grid>
              <GridItem span={12} className="pf-u-mx-auto pf-u-my-0">
                <img src="https://via.placeholder.com/350x200.png?text=Image" alt="Image 1" />
              </GridItem>
              <GridItem span={12} className="pf-u-text-align-center">
                <h1>Learn about the Red Hat and Communities</h1>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem span={12} md={3} mdRowSpan={3}>
            <h2>Latest articles on topic</h2>
            <p>article text</p>
          </GridItem>
          <GridItem span={12} md={9}>
            <Grid>
              <GridItem>
                <img src="https://via.placeholder.com/350x200?text=Hello+world" alt="Hello World" />
              </GridItem>
              <GridItem>
                Body content
              </GridItem>
              <GridItem>
                Cards
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem span={12}>
            <h2>Build here, go anywhere</h2>
          </GridItem>
          <GridItem span={12} md={6}>
            <Grid>
              <GridItem span={12}>
                Full width card
              </GridItem>
              <GridItem span={6}>
                Half width card
              </GridItem>
              <GridItem span={6}>
                Half width card
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem span={12} md={6}>
            <Grid>
              <GridItem span={12} md={6} mdRowSpan={2}>
                Full width card
              </GridItem>
              <GridItem span={6} md={6}>
                Half width card
              </GridItem>
              <GridItem span={6} md={6}>
                Half width card
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem span={12}>
            <h2>Featured resources</h2>
          </GridItem>
          <GridItem span={12} md={3} mdRowSpan={2}>
            <Grid>
              <GridItem span={12}>
                <h3>2 min videos to get started</h3>
              </GridItem>
            </Grid>
            <Grid>
              <GridItem>
                Vertical card list
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem span={12} md={9}>
            <Grid>
              <GridItem span={12}>
                <h3>eBooks and cheat sheets</h3>
              </GridItem>
            </Grid>
            <Grid>
              <GridItem span={12} md={4}>
                Card
              </GridItem>
              <GridItem span={12} md={4}>
                Card
              </GridItem>
              <GridItem span={12} md={4}>
                Vertical card list
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </TextContent>
    </PageSection>
  );
}

export { Dashboard };
