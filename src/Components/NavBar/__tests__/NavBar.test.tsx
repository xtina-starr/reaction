import { BellIcon, SoloIcon } from "@artsy/palette"
import { SystemContextProvider } from "Artsy"
import { mount } from "enzyme"
import React from "react"
import { NavBar } from "../NavBar"
import * as auth from "../Utils/auth"

jest.mock("../Utils/auth")

jest.mock("Components/Search/SearchBar", () => {
  return {
    SearchBarQueryRenderer: () => <div />,
  }
})

describe("NavBar", () => {
  const mediator = {
    trigger: jest.fn(),
  }

  const getWrapper = ({ user = null } = {}) => {
    return mount(
      <SystemContextProvider user={user} mediator={mediator}>
        <NavBar />
      </SystemContextProvider>
    )
  }
  it("renders Artsy Logo and SearchBar", () => {
    const wrapper = getWrapper()
    expect(wrapper.find("ArtsyMarkBlackIcon").length).toEqual(1)
    expect(wrapper.find("SearchBarQueryRenderer").length).toEqual(1)
  })

  describe("desktop", () => {
    const defaultLinks = [
      ["/collect", "Artworks"],
      ["/auctions", "Auctions"],
      ["/galleries", "Galleries"],
      ["/art-fairs", "Fairs"],
      ["/articles", "Magazine"],
    ]

    it("renders correct lg, xl nav items", () => {
      const wrapper = getWrapper()

      // Logo
      expect(
        wrapper
          .find("Link")
          .first()
          .prop("href")
      ).toEqual("/")

      const links = wrapper.find("NavItem")

      defaultLinks.forEach(([href, linkLabel], index) => {
        const navLink = links.at(index)
        expect(href).toEqual(navLink.prop("href"))
        expect(linkLabel).toEqual(navLink.text())
      })
    })

    it("renders logged out items", () => {
      const wrapper = getWrapper()
      expect(wrapper.html()).toContain("Log in")
      expect(wrapper.html()).toContain("Sign up")
      expect(wrapper.find(BellIcon).length).toEqual(0)
      expect(wrapper.find(SoloIcon).length).toEqual(0)
    })

    it("renders logged in items", () => {
      const wrapper = getWrapper({ user: true })
      expect(wrapper.html()).not.toContain("Log in")
      expect(wrapper.html()).not.toContain("Sign up")
      expect(wrapper.find(BellIcon).length).toEqual(1)
      expect(wrapper.find(SoloIcon).length).toEqual(1)
    })
  })

  describe("mediator actions", () => {
    afterEach(() => {
      mediator.trigger.mockReset()
    })

    it("calls login auth action on login button click", () => {
      const wrapper = getWrapper()
      wrapper
        .find("Button")
        .first()
        .simulate("click")
      expect(auth.login).toHaveBeenCalledWith(mediator)
    })

    it("calls signup auth action on signup button click", () => {
      const wrapper = getWrapper()
      wrapper
        .find("Button")
        .last()
        .simulate("click")
      expect(auth.signup).toHaveBeenCalledWith(mediator)
    })
  })

  describe("mobile", () => {
    const wrapper = getWrapper()
    expect(wrapper.find("MobileToggleIcon").length).toEqual(1)

    const toggle = () =>
      wrapper
        .find("NavSection")
        .find("NavItem")
        .last()
        .simulate("click")

    toggle()
    expect(wrapper.find("MobileNavMenu").length).toEqual(1)
    toggle()
    expect(wrapper.find("MobileNavMenu").length).toEqual(0)
  })
})