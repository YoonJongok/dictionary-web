import { type VariantProps, cva } from 'class-variance-authority';
import React, { FC, ReactNode } from 'react';

const flexBox = cva('flex', {
  variants: {
    intent: {
      row: ['flex-row'],
      column: ['flex-col'],
    },
    modifier: {
      flexCenterCenter: ['justify-center', 'items-center'],
      flexBetweenCenter: ['justify-between', 'items-center'],
      flexAroundCenter: ['justify-around', 'items-center'],
    },
    defaultVariants: {
      intent: 'row',
    },
  },
});

export interface FlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBox> {
  children: ReactNode;
}

export const FlexBox: FC<FlexBoxProps> = ({ className, intent, modifier, children, ...props }) => {
  return (
    <div {...props} className={flexBox({ intent, className, modifier })}>
      {children}
    </div>
  );
};

