import * as React from "react";
import {useTranslation} from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Logo from "../components/Logo";

// markup
const IndexPage = () => {
	const {t} = useTranslation();
	return (
		<main className="flex h-screen">
			<title>{t('title')}</title>
			<Logo />
		</main>
	)
};

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
