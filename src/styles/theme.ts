export type Theme = {
  backgroundColor: string;
};

export type AvailableThemes = {
  main: Theme;
};

export type Themed = {
  theme: Theme;
};

export const theme: AvailableThemes = {
  main: {
    backgroundColor: "#2196f3"
  }
};
