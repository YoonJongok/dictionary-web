import { type VariantProps, cva } from 'class-variance-authority';
import React, { FC, ReactNode } from 'react';

const flexBoxRow = cva(['flex', 'flex-row'], {
  variants: {
    intent: {
      flexCenterCenter: ['justify-center', 'items-center'],
      flexStartCenter: ['justify-start', 'items-center'],
      flexBetweenCenter: ['justify-between', 'items-center'],
      flexAroundCenter: ['justify-around', 'items-center'],
    },
    fullWidth: {
      true: ['w-full'],
    },
    modifier: {},
    defaultVariants: {},
  },
});

export interface FlexBoxRowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBoxRow> {
  children: ReactNode;
}

export const FlexBoxRow: FC<FlexBoxRowProps> = ({
  className,
  intent,
  modifier,
  fullWidth,
  children,
  ...props
}) => {
  return (
    <div {...props} className={flexBoxRow({ intent, className, modifier, fullWidth })}>
      {children}
    </div>
  );
};

