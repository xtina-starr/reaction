import { VerifiedIcon } from "@artsy/palette"
import { VerifiedSeller_artwork } from "__generated__/VerifiedSeller_artwork.graphql"
import React from "react"
import { createFragmentContainer } from "react-relay"
import { graphql } from "react-relay"
import { TrustSignal, TrustSignalProps } from "./TrustSignal"

interface VerifiedSellerProps
  extends Omit<TrustSignalProps, "Icon" | "label" | "description"> {
  artwork: VerifiedSeller_artwork
}

export const VerifiedSeller = ({ artwork, ...other }: VerifiedSellerProps) => {
  return (
    artwork.partner.isVerifiedSeller && (
      <TrustSignal
        Icon={<VerifiedIcon />}
        label="Verified seller"
        description={`${artwork.partner.name} is a verified Artsy partner.`}
        {...other}
      />
    )
  )
}

export const VerifiedSellerFragmentContainer = createFragmentContainer(
  VerifiedSeller,
  {
    artwork: graphql`
      fragment VerifiedSeller_artwork on Artwork {
        partner {
          isVerifiedSeller
          name
        }
      }
    `,
  }
)
