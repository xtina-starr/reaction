import * as React from "react"
import { commitMutation, createFragmentContainer, graphql, QueryRenderer, RelayProp } from "react-relay"
import { RecordSourceSelectorProxy, SelectorData } from "relay-runtime"

import { ContextConsumer, ContextProps } from "../../../Artsy"
import ItemLink from "../../ItemLink"

export interface RelayProps {
  suggested_genes: [
    {
      id: string | null
      _id: string | null
      name: string | null
      image_url: string | null
      image: {
        url: string | null
      } | null
    }
  ]
}

interface Props extends React.HTMLProps<HTMLAnchorElement>, RelayProps {
  relay?: RelayProp
}

class SuggestedGenesContent extends React.Component<Props, null> {
  followedGene(geneId: string) {
    const onGeneFollowed = (store: RecordSourceSelectorProxy, data: SelectorData): void => {
      const suggestedGene = store.get(data.followGene.gene.similar.edges[0].node.__id)

      const suggestedGenesRootField = store.get("client:root")
      const suggestedGenes = suggestedGenesRootField.getLinkedRecords("suggested_genes")
      const updatedSuggestedGenes = suggestedGenes.map(gene => (gene.getDataID() === geneId ? suggestedGene : gene))

      suggestedGenesRootField.setLinkedRecords(updatedSuggestedGenes, "suggested_genes")
    }

    commitMutation(this.props.relay.environment, {
      mutation: graphql`
        mutation SuggestedGenesFollowGeneMutation($input: FollowGeneInput!) {
          followGene(input: $input) {
            gene {
              __id
              similar(first: 1) {
                edges {
                  node {
                    id
                    __id
                    name
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        input: {
          gene_id: geneId
        },
      },
      updater: (store: RecordSourceSelectorProxy, data: SelectorData) => onGeneFollowed(store, data)
    })
  }

  render() {
    const items = this.props.suggested_genes.map((item, index) => {
      return (
        <ItemLink
          href="#"
          item={item}
          key={index}
          id={item.id}
          _id={item._id}
          name={item.name}
          image_url={item.image_url || item.image.url}
          onClick={() => this.followedGene(item.id)}
        />
      )
    })

    return <div>{items}</div>
  }
}

const SuggestedGenesContainer = createFragmentContainer(
  SuggestedGenesContent,
  graphql`
    fragment SuggestedGenesContent_suggested_genes on SuggestedGene @relay(plural: true) {
      id
      name
      _id
      image_url
      image {
        url
      }
    }
  `
)

const SuggestedGenesComponent: React.SFC<ContextProps> = ({ relayEnvironment }) => {
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query SuggestedGenesQuery {
          suggested_genes {
            ...SuggestedGenesContent_suggested_genes
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (props) {
          return <SuggestedGenesContainer suggested_genes={props.suggested_genes} />
        } else {
          return null
        }
      }}
    />
  )
}

export const SuggestedGenes = ContextConsumer(SuggestedGenesComponent)
