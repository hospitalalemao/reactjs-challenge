import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    color: {
      primary: string;
      secondary: string;
      background: string;

      title_card: string;
      negative: string;
      positive: string;

      title: string;
    };
  }
}
