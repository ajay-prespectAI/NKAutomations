declare namespace FooterNS {
  interface IFooterLinks {
    linkHref: string;
    linkName: string;
  }

  interface Services {
    linkHref: string;
    linkName: string;
    description: string;
    icon?: string;
    features?: string[];
    banner?: any;
    keyPoints?: IKeyPoints[];
  }

  interface IKeyPoints {
    title: string;
    description: string;
  }

  interface IAboutSectionOne {
    features?: string[];
    banner?: any;
    keyPoints?: IKeyPoints[];
  }
}
