import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    color: {
      primary: string;
      secondary: string;
      background: string;
      title: string;
      text: string;
    };
  }
}
