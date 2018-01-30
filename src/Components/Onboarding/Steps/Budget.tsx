import React from "react"
import { commitMutation, graphql } from "react-relay"
import styled from "styled-components"

import Colors from "../../../Assets/Colors"
import { ContextConsumer, ContextProps } from "../../Artsy"
import { media } from "../../Helpers"
import SelectableToggle from "../SelectableToggle"
import { StepProps } from "../Types"
import { Layout } from "./Layout"

const OptionsContainer = styled.div`
  width: 450px;
  margin: 0 auto 100px;
  &:last-child {
    border-bottom: 1px solid ${Colors.grayRegular};
  }
  ${media.sm`
    width: 100%;
    margin-bottom: 20px;
  `};
`

interface State {
  selection: number | null
}

class Budget extends React.Component<StepProps & ContextProps, State> {
  options = {
    "UNDER $500": 500,
    "UNDER $2,500": 2500,
    "UNDER $5,000": 5000,
    "UNDER $10,000": 10000,
    "UNDER $25,000": 25000,
    "UNDER $50,000": 50000,
    "NO BUDGET IN MIND": 1000000000000,
  }

  state = {
    selection: null,
  }

  onOptionSelected = (index: number) => {
    let selection = { selection: Object.values(this.options)[index] }
    this.setState(selection)
  }

  submit() {
    const priceRangeMax = this.state.selection

    commitMutation(this.props.relayEnvironment, {
      mutation: graphql`
        mutation BudgetUpdateMyUserProfileMutation(
          $input: UpdateMyProfileInput!
        ) {
          updateMyUserProfile(input: $input) {
            user {
              name
            }
          }
        }
      `,
      variables: {
        input: {
          price_range_min: -1,
          price_range_max: priceRangeMax,
        },
      },
    })

    this.props.onNextButtonPressed()
  }

  render() {
    const options = Object.keys(this.options).map((text, index) => (
      <SelectableToggle
        key={index}
        text={text}
        onSelect={this.onOptionSelected.bind(this, index)}
        selected={this.state.selection === this.options[text]}
      />
    ))

    return (
      <Layout
        title="What's your budget?"
        subtitle="Select one"
        onNextButtonPressed={this.state.selection && this.submit.bind(this)}
        isLastStep
      >
        <OptionsContainer>{options}</OptionsContainer>
      </Layout>
    )
  }
}

export default ContextConsumer(Budget)
