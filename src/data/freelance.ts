export type FreelanceProject = {
  name: string;
  description: string;
  note: string;
  repositoryUrl: string;
  websiteUrl?: string;
};

export const freelanceProjects: readonly FreelanceProject[] = [
  {
    name: 'OnTime Courier',
    description:
      'A multi-route courier website prototype with an illustrated shipment journey and guided quote flows.',
    note: 'Quote and tracking are demonstrations; no carrier or CRM integration.',
    repositoryUrl: 'https://github.com/rohnn-afk/courier',
    websiteUrl: 'https://rohnn-afk.github.io/courier/',
  },
  {
    name: 'Moonlight-web',
    description:
      'An editorial storefront prototype with collection and product pages, cart, and catalogue admin.',
    note: 'Example catalogue; cart and admin are local, checkout is presentational.',
    repositoryUrl: 'https://github.com/rohnn-afk/Moonlight-web',
  },
  {
    name: 'Tyro',
    description:
      'A tyre catalogue prototype with product pages and a searchable size finder.',
    note: 'Displayed company, contact, and trust details are demo content.',
    repositoryUrl: 'https://github.com/rohnn-afk/Tyro',
  },
];
