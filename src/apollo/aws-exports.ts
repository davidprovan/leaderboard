import { AuthOptions, AUTH_TYPE } from "aws-appsync-auth-link";

const config = {
    aws_appsync_graphqlEndpoint: 'https://avs6vwtahva7pdf5xamuv4kbra.appsync-api.us-east-2.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-2',
    aws_appsync_authenticationType: AUTH_TYPE.API_KEY as const,
    aws_appsync_apiKey: 'da2-gcobpg6ruzcgjdta4354ncxn4e'
}

export default config;