declare const Rating: {
  (props: Props): JSX.Element;
  defaultProps: {
    clearRating: boolean;
    disabled: boolean;
    defaultRating: number;
    counterPosition: string;
    textPosition: string;
    styleConfig: {
      counterStyle: {
        height: string;
        backgroundColor: string;
        paddingLeft: string;
        paddingRight: string;
        color: string;
        lineHeight: string;
      };
      starContainer: {
        fontSize: string;
        backgroundColor: string;
        height: string;
      };
      statusStyle: {
        height: string;
        backgroundColor: string;
        paddingLeft: string;
        paddingRight: string;
        color: string;
        lineHeight: string;
        minWidth: string;
        fontSize: string;
        textAlign: string;
      };
      tooltipStyle: {
        fontSize: string;
        padding: string;
      };
    };
  };
};

declare type Position = "left" | "right";

declare type DefaultProps = {
  clearRating: boolean;
  disabled: boolean;
  defaultRating: number;
  counterPosition: Position;
  textPosition: Position;
  styleConfig: {
    counterStyle: React.CSSProperties;
    starContainer: React.CSSProperties;
    statusStyle: React.CSSProperties;
    tooltipStyle: React.CSSProperties;
  };
};

declare type RequiredProps = {
  max: number;
  tooltipContent: React.ReactNode[];
  ratingValue: React.ReactNode[];
  onChange: (index: number, ratingValue: React.ReactNode) => void;
  ActiveComponent: React.ReactNode;
  InActiveComponent: React.ReactNode;
};

declare type Props = RequiredProps & DefaultProps;

export default Rating;
