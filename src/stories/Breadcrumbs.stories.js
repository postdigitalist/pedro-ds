import Breadcrumbs from "../components/Breadcrumbs";
export default {
    title: "Navigation/Breadcrumbs",
    component: Breadcrumbs,
}

export const BreadcrumbsExample = () => (
    <Breadcrumbs
    links={[
      { href: "https://google.com", title: "Cooperativa la Hermandad" },
      { href: "https://vice.com", title: "Guía de agricultura Solarpunk 2022" },
    ]}
  />
)