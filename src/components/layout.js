import React from "react"
import { css } from "@emotion/react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
  return (
    <div
      style={css`
        margin: 10 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin: ${rhythm(1)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          margin: ${rhythm(1)};
        `}
      >
        About
      </Link>
      <div css={css`
          float: right;
          margin: ${rhythm(1)};
        `}>{children}</div>
    </div>
  )
}