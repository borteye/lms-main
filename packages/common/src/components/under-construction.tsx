import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@workspace/ui/lib/utils';

const underConstructionVariants = cva(
  'flex flex-col items-center justify-center min-h-[400px] p-8 text-center',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        minimal: 'bg-transparent text-foreground',
        accent: 'bg-accent text-accent-foreground',
      },
      size: {
        default: 'min-h-[400px]',
        sm: 'min-h-[300px]',
        lg: 'min-h-[500px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface UnderConstructionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof underConstructionVariants> {
  title?: string;
  description?: string;
  showIcon?: boolean;
}

function UnderConstruction({
  className,
  variant,
  size,
  title = 'Under Construction',
  description = "We're working hard to bring you something amazing. Please check back soon!",
  showIcon = true,
  ...props
}: UnderConstructionProps) {
  return (
    <div
      className={cn(underConstructionVariants({ variant, size, className }))}
      {...props}
    >
      {showIcon && (
        <div className='mb-6'>
          <div className='relative'>
            <div className='w-16 h-16 bg-primary/10 border-2 border-black rounded-full flex items-center justify-center mb-4'>
              <div className='w-8 h-8 bg-primary border border-black rounded-full flex items-center justify-center'>
                <div className='w-4 h-4 bg-primary-foreground rounded-sm animate-pulse'></div>
              </div>
            </div>
            <div className='absolute -top-1 -right-1 w-4 h-4 bg-burntAmber rounded-full animate-bounce'></div>
          </div>
        </div>
      )}

      <div className='space-y-4 max-w-md'>
        <h2 className='text-2xl font-bold text-foreground'>{title}</h2>
        <p className='text-muted-foreground text-base leading-relaxed'>
          {description}
        </p>
      </div>

      <div className='mt-8 flex items-center space-x-2 text-sm text-muted-foreground'>
        <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
        <div
          className='w-2 h-2 bg-primary rounded-full animate-pulse'
          style={{ animationDelay: '0.2s' }}
        ></div>
        <div
          className='w-2 h-2 bg-primary rounded-full animate-pulse'
          style={{ animationDelay: '0.4s' }}
        ></div>
      </div>
    </div>
  );
}

export { UnderConstruction, underConstructionVariants };
