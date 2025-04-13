import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { ReactNode } from 'react';

export type FrankCardProps = {
  cardCover?: ReactNode;
  cardBody?: ReactNode;
  cardHeader?: ReactNode;
  cardFooter?: ReactNode;
  isBlurred?: boolean;
  isFooterBlurred?: boolean;
  isPressable?: boolean;
  isHoverable?: boolean;
  key?: number | string;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  onPress?: () => void;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  disableRipple?: boolean;
  allowTextSelectionOnPress?: boolean;
};

export const FrankCard = ({
  cardCover,
  cardBody,
  cardHeader,
  cardFooter,
  isBlurred,
  isFooterBlurred,
  key,
  isPressable,
  isHoverable,
  shadow,
  onPress,
  cardWidth,
  cardHeight,
  className,
  isDisabled,
  disableAnimation,
  disableRipple,
  allowTextSelectionOnPress,
}: FrankCardProps) => {
  return (
    <div
      style={{
        width: cardWidth ? `${cardWidth}px` : '100%',
        height: cardHeight ? `${cardHeight}px` : '100%',
      }}
    >
      <Card
        isBlurred={isBlurred}
        isFooterBlurred={isFooterBlurred}
        key={key}
        isPressable={isPressable}
        shadow={shadow}
        onPress={onPress}
        fullWidth
        className={`${className} h-full relative`}
        isHoverable={isHoverable}
        isDisabled={isDisabled}
        disableAnimation={disableAnimation}
        disableRipple={disableRipple}
        allowTextSelectionOnPress={allowTextSelectionOnPress}
      >
        {cardCover}
        <div className="absolute w-full h-full flex flex-col">
          {cardHeader && <CardHeader>{cardHeader}</CardHeader>}
          {cardBody && <CardBody>{cardBody}</CardBody>}
          {cardFooter && <CardFooter>{cardFooter}</CardFooter>}
        </div>
      </Card>
    </div>
  );
};

export default FrankCard;
