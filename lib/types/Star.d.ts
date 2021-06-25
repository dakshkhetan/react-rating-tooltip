declare type Props = {
  index: number;
  tooltipStyle: React.CSSProperties;
  tpText: React.ReactNode;
  selected: boolean;
  onMouseLeave: () => void;
  onHover: (index: number) => void;
  selectStar: (index: number) => void;
  InActiveComponent: React.ReactNode;
  ActiveComponent: React.ReactNode;
};

declare const Star: (props: Props) => JSX.Element;

export default Star;
