import * as React from "react"
import styled, { StyledFunction } from "styled-components"

import * as fonts from "../../Assets/Fonts"

import Icon from "../Icon"

const anchor: StyledFunction<React.HTMLProps<HTMLInputElement>> = styled.a
const Link = anchor`
  display: flex;
  font-size: 14px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${fonts.primary.fontFamily};
  border-top: 1px solid #e5e5e5;
  &:hover {
    background-color: #f8f8f8;
  }
`

const Avatar = styled.img`
  padding: 10px 15px 10px 10px;
`

const FullWidthCol = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Col = styled.div`
  display: flex;
  align-items: center;
`

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  item?: any
  id: string
  _id: string
  name: string
  image_url: string
}

export default class ItemLink extends React.Component<Props, null> {
  followItem() {
    return null
  }

  followItemFailed() {
    null
  }

  // onClick() {
  //   // this.followItem()
  //   this.prop
  // }

  render() {
    return (
      <Link onClick={this.props.onClick.bind(this)}>
        <Col>
          {
            <Avatar
              src={this.props.image_url ? this.props.image_url : "https://www.artsy.net/images/icon-70.png"}
              width={50}
              height={50}
            />
          }
        </Col>
        <FullWidthCol>{this.props.name}</FullWidthCol>
        <Col>
          <Icon name="follow-circle" color="black" fontSize="39px" />
        </Col>
      </Link>
    )
  }
}
