import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import ModuleDetail from '../components/module-detail';

const MODULE_DATA = gql`
  query getModuleData($trackId: ID!, $moduleId: ID!,) {
    track(id: $trackId) {
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      content
      title
      videoUrl
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(MODULE_DATA, {
    variables: {
      trackId, moduleId
    }
  })

  return <Layout fullWidth>
    <QueryResult loading={loading} error={error} data={data}>
      <ModuleDetail track={data?.track} module={data?.module} />
    </QueryResult>
  </Layout>
};

export default Module;