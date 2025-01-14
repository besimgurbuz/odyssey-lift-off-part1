import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      title
      thumbnail
      description
      numberOfViews
      modulesCount
      length
      id
      modules {
        id
        title
        length
      }
      author {
        name
        photo
        id
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId }
  })

  return <Layout>
    <QueryResult error={error} loading={loading} data={data}>
      <TrackDetail track={data?.track} />
    </QueryResult>
  </Layout>;
};

export default Track;