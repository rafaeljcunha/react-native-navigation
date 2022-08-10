export type ParamsProps = {
  userId: number;
  isUserSubscribed: boolean;
  disableButtons?: boolean;
  showDescription?: boolean;
};

export type NavigateProps = {
  navigate(screenName: string, params?: ParamsProps): void;
  goBack(): void;
};
